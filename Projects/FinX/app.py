"""
FinX NPS - Live Interactive Dashboard (Streamlit)
-------------------------------------------------
Reads monthly fact-table JSON files from ./data (one per cycle, named
nps-YYYY-MM.json) and renders an interactive, cross-filtered dashboard.

Each data file is produced by the monthly compile routine and has shape:
  { "meta": {"month": "...", "monthId": "YYYY-MM", ...},
    "cohorts": [{key, name, targeted, ...}],
    "users":   [{u, c, s, b, r:[{q,a}], t:[...]}] }

To add a month: drop a new nps-YYYY-MM.json into ./data. No code change.
"""

import glob
import json
import os

import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st

# ---- brand palette ----
NAVY = "#1B1464"
BLUE = "#2777F3"
GREEN = "#45B644"
GREY = "#AEB4C4"
RED = "#DE493B"
PRIMARY_Q = "Reason for Low Rating"
BUCKET_COLORS = {"promoter": GREEN, "passive": GREY, "detractor": RED}

st.set_page_config(page_title="FinX NPS Dashboard", page_icon="📊", layout="wide")

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")


@st.cache_data(show_spinner=False)
def load_data():
    """Load every monthly JSON in ./data into one tidy users DataFrame
    plus a cohort-meta lookup and a month list."""
    rows = []
    cohort_meta = {}
    months = []
    for path in sorted(glob.glob(os.path.join(DATA_DIR, "nps-*.json"))):
        with open(path, "r", encoding="utf-8") as fh:
            d = json.load(fh)
        meta = d.get("meta", {})
        month_id = meta.get("monthId") or os.path.basename(path).replace("nps-", "").replace(".json", "")
        month_label = meta.get("month", month_id)
        months.append((month_id, month_label))
        names = {c["key"]: c["name"] for c in d.get("cohorts", [])}
        cohort_meta[month_id] = {c["key"]: c for c in d.get("cohorts", [])}
        for u in d.get("users", []):
            reasons = u.get("r", []) or []
            primary = next((x["a"] for x in reasons if x.get("q") == PRIMARY_Q), "")
            subs = [x for x in reasons if x.get("q") != PRIMARY_Q]
            rows.append({
                "month_id": month_id,
                "month": month_label,
                "user": u.get("u", ""),
                "cohort": names.get(u.get("c"), u.get("c")),
                "cohort_key": u.get("c"),
                "score": int(u.get("s")),
                "bucket": u.get("b"),
                "primary_reason": primary,
                "sub_reasons": subs,
                "verbatims": u.get("t", []) or [],
            })
    df = pd.DataFrame(rows)
    months = sorted(set(months))
    return df, cohort_meta, months


def nps(frame):
    n = len(frame)
    if n == 0:
        return 0.0
    p = (frame["bucket"] == "promoter").sum()
    d = (frame["bucket"] == "detractor").sum()
    return round((p - d) / n * 100, 1)


def pct(part, whole):
    return round(part / whole * 100, 1) if whole else 0.0


df, cohort_meta, months = load_data()

if df.empty:
    st.error("No data found in ./data. Add a file named nps-YYYY-MM.json.")
    st.stop()

# ============ Sidebar filters ============
st.sidebar.title("FinX NPS")
st.sidebar.caption("Filters apply to every panel.")

month_labels = {mid: lbl for mid, lbl in months}
month_ids = [m[0] for m in months]
sel_month = st.sidebar.selectbox(
    "Month", month_ids, index=len(month_ids) - 1,
    format_func=lambda m: month_labels.get(m, m),
)

mdf = df[df["month_id"] == sel_month]

cohorts = sorted(mdf["cohort"].unique())
sel_cohorts = st.sidebar.multiselect("Cohort", cohorts, default=cohorts)

buckets = ["promoter", "passive", "detractor"]
sel_buckets = st.sidebar.multiselect(
    "Sentiment", buckets, default=buckets,
    format_func=lambda b: b.capitalize(),
)

smin, smax = st.sidebar.select_slider(
    "Score range", options=list(range(0, 11)), value=(0, 10),
)

f = mdf[
    mdf["cohort"].isin(sel_cohorts)
    & mdf["bucket"].isin(sel_buckets)
    & mdf["score"].between(smin, smax)
]

# ============ Header ============
st.title("FinX Net Promoter Score")
st.caption(
    f"{month_labels.get(sel_month, sel_month)}  ·  deduped, standard NPS  ·  "
    f"{len(f):,} of {len(mdf):,} responses in view"
)

# ============ KPI row ============
total = len(f)
p = int((f["bucket"] == "promoter").sum())
pa = int((f["bucket"] == "passive").sum())
d = int((f["bucket"] == "detractor").sum())
k1, k2, k3, k4, k5 = st.columns(5)
k1.metric("NPS Score", f"{nps(f)}%")
k2.metric("Responses", f"{total:,}")
k3.metric("Promoters", f"{pct(p, total)}%", f"{p:,}")
k4.metric("Passives", f"{pct(pa, total)}%", f"{pa:,}")
k5.metric("Detractors", f"{pct(d, total)}%", f"{d:,}", delta_color="inverse")

st.divider()

# ============ Row 1: cohort NPS + sentiment donut + score dist ============
c1, c2, c3 = st.columns([1.2, 1, 1])

with c1:
    st.subheader("NPS by Cohort")
    rows = []
    for ck in sorted(f["cohort"].unique()):
        sub = f[f["cohort"] == ck]
        rows.append({"Cohort": ck, "NPS": nps(sub), "Responses": len(sub)})
    cdf = pd.DataFrame(rows).sort_values("NPS")
    if not cdf.empty:
        fig = px.bar(
            cdf, x="NPS", y="Cohort", orientation="h", text="NPS",
            color="NPS", color_continuous_scale=[RED, BLUE, GREEN],
        )
        fig.update_traces(texttemplate="%{text}%", textposition="outside")
        fig.update_layout(coloraxis_showscale=False, height=300,
                          margin=dict(l=0, r=10, t=10, b=0))
        st.plotly_chart(fig, use_container_width=True)

with c2:
    st.subheader("Sentiment Split")
    counts = [p, pa, d]
    labels = ["Promoters", "Passives", "Detractors"]
    colors = [GREEN, GREY, RED]
    fig = go.Figure(go.Pie(
        labels=labels, values=counts, hole=0.6,
        marker=dict(colors=colors), sort=False,
    ))
    fig.update_layout(
        height=300, margin=dict(l=0, r=0, t=10, b=0),
        annotations=[dict(text=f"<b>{nps(f)}</b><br>NPS", showarrow=False, font_size=18)],
    )
    st.plotly_chart(fig, use_container_width=True)

with c3:
    st.subheader("Score Distribution")
    dist = f["score"].value_counts().reindex(range(0, 11), fill_value=0).reset_index()
    dist.columns = ["Score", "Count"]
    dist["Bucket"] = dist["Score"].apply(
        lambda s: "promoter" if s >= 9 else ("passive" if s >= 7 else "detractor"))
    fig = px.bar(dist, x="Score", y="Count", color="Bucket",
                 color_discrete_map=BUCKET_COLORS)
    fig.update_layout(height=300, showlegend=False, xaxis=dict(dtick=1),
                      margin=dict(l=0, r=0, t=10, b=0))
    st.plotly_chart(fig, use_container_width=True)

st.divider()

# ============ Row 2: reasons + drill ============
r1, r2 = st.columns(2)

with r1:
    st.subheader("Top Detractor Reasons")
    reasons = f[f["primary_reason"] != ""]["primary_reason"].value_counts().head(10)
    if reasons.empty:
        st.info("No low-rating reasons in this selection.")
    else:
        rdf = reasons.reset_index()
        rdf.columns = ["Reason", "Count"]
        fig = px.bar(rdf.sort_values("Count"), x="Count", y="Reason",
                     orientation="h", text="Count")
        fig.update_traces(marker_color=RED, textposition="outside")
        fig.update_layout(height=360, margin=dict(l=0, r=10, t=10, b=0))
        st.plotly_chart(fig, use_container_width=True)

with r2:
    st.subheader("Deeper Issue Breakdown")
    sub_rows = []
    for _, row in f.iterrows():
        for sr in row["sub_reasons"]:
            sub_rows.append({"Issue": sr.get("a", ""), "Question": sr.get("q", "")})
    if not sub_rows:
        st.info("No follow-up answers in this selection.")
    else:
        sdf = pd.DataFrame(sub_rows)
        top = sdf["Issue"].value_counts().head(10).reset_index()
        top.columns = ["Issue", "Count"]
        fig = px.bar(top.sort_values("Count"), x="Count", y="Issue",
                     orientation="h", text="Count")
        fig.update_traces(marker_color=BLUE, textposition="outside")
        fig.update_layout(height=360, margin=dict(l=0, r=10, t=10, b=0))
        st.plotly_chart(fig, use_container_width=True)

st.divider()

# ============ Row 3: verbatims + respondents ============
v1, v2 = st.columns(2)

with v1:
    verb_rows = []
    for _, row in f.iterrows():
        for t in row["verbatims"]:
            verb_rows.append({"Cohort": row["cohort"], "Score": row["score"], "Verbatim": t})
    st.subheader(f"Verbatims ({len(verb_rows)})")
    if verb_rows:
        st.dataframe(pd.DataFrame(verb_rows), use_container_width=True, height=340,
                     hide_index=True)
    else:
        st.info("No verbatims in this selection.")

with v2:
    st.subheader(f"Respondents ({len(f):,})")
    show = f[["user", "cohort", "score", "bucket", "primary_reason"]].rename(
        columns={"user": "User", "cohort": "Cohort", "score": "Score",
                 "bucket": "Sentiment", "primary_reason": "Primary reason"})
    st.dataframe(show, use_container_width=True, height=340, hide_index=True)

# ============ Trend (multi-month) ============
if len(months) > 1:
    st.divider()
    st.subheader("NPS Trend")
    trend = []
    for mid, lbl in months:
        sub = df[df["month_id"] == mid]
        trend.append({"Month": lbl, "NPS": nps(sub)})
    tdf = pd.DataFrame(trend)
    fig = px.line(tdf, x="Month", y="NPS", markers=True, text="NPS")
    fig.update_traces(line_color=BLUE, textposition="top center")
    fig.update_layout(height=300, margin=dict(l=0, r=0, t=10, b=0))
    st.plotly_chart(fig, use_container_width=True)

st.caption(
    "Source: Plotline cohort NPS surveys, deduped (last answer per user per question). "
    "NPS = (Promoters − Detractors) / Total × 100. Promoter 9-10 · Passive 7-8 · Detractor 0-6."
)
