# FinX NPS - Streamlit Dashboard

Interactive, live NPS dashboard. Reads monthly fact-table JSON from `./data`
and renders cross-filtered KPIs, charts, drill-downs, verbatims, and a
respondent table. Filters in the sidebar apply to every panel.

## Run locally

```bash
cd streamlit-app
pip install -r requirements.txt
streamlit run app.py
```
Opens at http://localhost:8501

## Monthly refresh (no code change)

The compile routine writes one file per cycle into `./data`:
```
data/nps-2026-02.json
data/nps-2026-03.json   <- drop the new month here
```
The app auto-discovers every `nps-YYYY-MM.json`, adds it to the Month
selector, and builds the trend line once 2+ months exist.

Each file shape:
```json
{ "meta": {"month": "March 2026", "monthId": "2026-03"},
  "cohorts": [{"key": "fno", "name": "F&O", "targeted": 34030}],
  "users":   [{"u": "ID", "c": "fno", "s": 8, "b": "passive",
               "r": [{"q": "Reason for Low Rating", "a": "..."}], "t": ["..."]}] }
```

## Deploy

### Recommended: Azure App Service (private, work-account login)
Best fit for a Microsoft 365 org. Stakeholders open the link and sign in
with their existing work account; nobody else can view it.

1. Push this `streamlit-app/` folder to a repo (private).
2. Create an Azure App Service (Linux, Python 3.11).
3. Startup command:
   ```
   python -m streamlit run app.py --server.port 8000 --server.address 0.0.0.0
   ```
4. App Service → **Authentication** → add identity provider **Microsoft**
   (Entra ID), restrict to your tenant. This gates the whole site behind
   a work-account login.
5. Share the URL with stakeholders. Access is controlled by Entra, not by
   keeping the link secret.

### Fast but PUBLIC: Streamlit Community Cloud
Free, deploys from a public GitHub repo, live in minutes. The URL is public
to anyone who has it. **Only use with de-identified data** (tokenized client
IDs, no real verbatims). Do not host real client PII here.

## Privacy
The data files contain real client IDs and verbatims. Keep them in a
**private** repo and a **login-gated** host (the Azure path above). Never
commit them to the public `claudecode_` repo (the repo `.gitignore` already
blocks `nps-real.*`).
