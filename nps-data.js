/* ============================================================
   NPS DASHBOARD — DATA CONTRACT
   ------------------------------------------------------------
   This is the ONLY file the monthly routine rewrites.
   The dashboard (index.html) reads window.NPS_DATA and renders.
   To add a month: append one object to `months`. Newest last.

   Field rules:
   - nps        = % promoters minus % detractors (rounded to 1 dp)
   - promoters/passives/detractors = % of responses in that bucket
   - passives   = null when the survey used a 2-bucket model
                  (Feb 2026 report had no passive bucket)
   - responseRate = responses / targeted * 100 (1 dp)
   - drivers    = top detractor themes by mention count, deduped
                  by (userId, questionId, response) before counting
   ============================================================ */

window.NPS_DATA = {
  meta: {
    product: "Choice FinX",
    cadence: "Monthly",
    lastUpdated: "February 2026",
    npsFormula: "% Promoters minus % Detractors",
    note: "Feb 2026 baseline carried from the static report. Passive (7-8) bucket was not separated in that survey, so it shows as not available."
  },

  months: [
    {
      id: "2026-02",
      label: "February 2026",
      overall: {
        nps: 31.8,
        promoters: 65.9,
        passives: null,
        detractors: 34.1,
        responses: 2352
      },
      cohorts: [
        { key: "cash_delivery",  name: "Cash Delivery",   nps: 37.1, promoters: 68.6, passives: null, detractors: 31.4, responses: 801,  targeted: 154870, responseRate: 0.52 },
        { key: "fno",            name: "F&O",             nps: 26.8, promoters: 63.4, passives: null, detractors: 36.6, responses: 1109, targeted: 34030,  responseRate: 3.26 },
        { key: "cash_intraday",  name: "Cash Intraday",   nps: 29.9, promoters: 65.0, passives: null, detractors: 35.0, responses: 352,  targeted: 8370,   responseRate: 4.21 },
        { key: "new_not_traded", name: "New · Not Traded", nps: 53.8, promoters: 76.9, passives: null, detractors: 23.1, responses: 90,   targeted: 16676,  responseRate: 0.54 }
      ],
      drivers: [
        { theme: "Order execution speed & delays",     mentions: 93 },
        { theme: "Margin not updating / miscalculated", mentions: 85 },
        { theme: "App crashes & freezes",               mentions: 84 },
        { theme: "Limited tools & analytics",           mentions: 65 },
        { theme: "Charges transparency",                mentions: 30 }
      ]
    }
  ]
};
