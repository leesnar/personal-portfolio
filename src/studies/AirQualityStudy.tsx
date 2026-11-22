import { EvidenceFigure } from "../components/EvidenceFigure";
import { figures } from "../data/figures";

const evidence = "https://github.com/leesnar/proyek-analisis-data/blob/9be999561126d075de274a5689c8facea67d56c1/";

export default function AirQualityStudy() {
  return <>
    <section className="study-section">
      <h2>Four years at one Beijing station</h2>
      <p>For my Dicoding / DBS independent study, I used hourly observations from Wanshouxigong to examine when fine-particle concentrations tended to rise and which pollutants varied alongside them. The station series runs from March 2013 through February 2017.</p>
      <table className="study-table">
        <caption>Coverage of the Wanshouxigong station file, March 2013–February 2017</caption>
        <thead><tr><th scope="col">Coverage measure</th><th scope="col">Hourly rows</th></tr></thead>
        <tbody>
          <tr><th scope="row">All station records</th><td>35,064</td></tr>
          <tr><th scope="row">Missing PM2.5 reading in the source</th><td>696</td></tr>
        </tbody>
      </table>
      <p><a href={evidence + "data/PRSA_Data_Wanshouxigong_20130301-20170228.csv"}>Inspect the station data (CSV)</a></p>
    </section>
    <section className="study-section">
      <h2>What varied with the seasons?</h2>
      <p>I grouped the hourly measurements by month to see both typical concentrations and unusually polluted hours. The boxes show the middle half of the readings, measured in micrograms per cubic metre (µg/m³).</p>
      <EvidenceFigure figure={figures.airMonthly} />
    </section>
    <section className="study-section">
      <h2>Which pollutants varied together?</h2>
      <p>I compared six pollutants measured at the same station. The heatmap shows how closely pairs varied over time. Identifying a shared emissions source would require additional evidence.</p>
      <EvidenceFigure figure={figures.airCorrelations} />
    </section>
    <section className="study-section">
      <h2>Reading the notebook and dashboard together</h2>
      <p>The notebook carries the previous reading forward to fill missing measurements. The Streamlit dashboard reads the raw series and exposes a date filter. Selecting the same period can therefore give different chart values.</p>
      <details className="study-appendix">
        <summary>Dashboard filters and reproducibility</summary>
        <p>The dashboard code filters hourly timestamps against the selected dates. The end date is interpreted as midnight, so later hours on that date fall outside the selection. The saved notebook preserves the figures from the full analysis.</p>
        <p className="study-links"><a href={evidence + "dashboard/dashboard.py"}>Inspect the Streamlit dashboard code</a><a href={evidence + "notebook.ipynb"}>Inspect the cleaning and plots</a></p>
      </details>
    </section>
  </>;
}