import { EvidenceFigure } from "../components/EvidenceFigure";
import { figures } from "../data/figures";

const evidence = "https://github.com/leesnar/network-intrusion-detection/blob/d8043063c67602357a6dde811cbd06addc5c68a9/";

export default function VinixStudy() {
  return <>
    <section className="study-section">
      <h2>From benchmark records to a review queue</h2>
      <p>During my April–June 2026 internship at PT Vinix Seven Aurum, Group 1 used simulated network traffic to explore how an analyst might prioritize connections. Our two input files contained 47,736 records. The dashboard scored the 25,192 labeled records. The other 22,544 were unlabeled.</p>
      <p>The Executive Overview summarizes the scoring results. Traffic Analysis lets a reader explore connection patterns, and the threat analysis view brings model outputs and priority bands together.</p>
      <EvidenceFigure figure={figures.executive} />
    </section>
    <section className="study-section">
      <h2>Which connections rose to the top?</h2>
      <table className="study-table">
        <caption>Three measures on the same 25,192 scored records</caption>
        <thead><tr><th scope="col">What was counted</th><th scope="col">Connections</th></tr></thead>
        <tbody>
          <tr><th scope="row">Anomaly in the benchmark labels</th><td>11,743 (46.6%)</td></tr>
          <tr><th scope="row">Flagged by Isolation Forest</th><td>2,520</td></tr>
          <tr><th scope="row">Assigned highest priority (P1)</th><td>210</td></tr>
        </tbody>
      </table>
      <p>The first count comes from the original labels. Isolation Forest used a 10% contamination setting. The team then scaled its anomaly scores to 0–100 across the scored rows and assigned P1 to scores of 75 or higher. The figures describe a simulated queue. Operational review time was outside the evaluation.</p>
      <EvidenceFigure figure={figures.traffic} />
      <p className="study-links"><a href={evidence + "Code%20Notebook.ipynb"}>Analysis notebook</a><a href={evidence + "looker-clone/data/dashboard_summary.csv"}>Dashboard totals (CSV)</a></p>
    </section>
    <section className="study-section">
      <h2>How to read the model results</h2>
      <p>The team held out 5,039 of the 25,192 labeled connections for classifier validation. Random Forest classified 99.80% of that holdout correctly. Its 99.96% recall measures how often it recognized a <strong>normal connection</strong>, because the pipeline encodes normal as the positive class.</p>
      <p>The results describe a single stratified benchmark split. Categorical vocabularies were fitted across both input files, which limits what the evaluation can establish about unfamiliar traffic.</p>
      <EvidenceFigure figure={figures.threat} />
      <details className="study-appendix">
        <summary>Scoring and dashboard definitions</summary>
        <p>The Random Forest evaluation and Isolation Forest priority scores answer separate questions. The first compares predicted classes with known labels. The second ranks connections by how unusual they look within this benchmark.</p>
        <p>The dashboard reports mean risk of 23.14 out of 100. Its “security health” value of 76.86 is calculated by subtracting mean risk from 100. Both measures depend on the distribution of the scored sample.</p>
        <p><a href={evidence + "looker-clone/tools/run_notebook_pipeline.py"}>Inspect the scoring and evaluation pipeline</a></p>
      </details>
    </section>
  </>;
}