import { EvidenceFigure } from "../components/EvidenceFigure";
import { figures } from "../data/figures";

export default function XaiStudy() {
  return <>
    <section className="study-section">
      <h2>Choosing the model to explain</h2>
      <p>My undergraduate thesis at Universitas Brawijaya examined 303 Cleveland heart-disease records with 13 predictors. I compared classifiers on a 61-record holdout and selected XGBoost for the explanation experiment because it identified more of the 28 positive cases.</p>
      <table className="study-table">
        <caption>Accuracy and positive cases identified on the same 61-record holdout</caption>
        <thead><tr><th scope="col">Classifier</th><th scope="col">Holdout result</th></tr></thead>
        <tbody>
          <tr><th scope="row">Random Forest</th><td>86.89% accuracy · 25 of 28 positive cases identified</td></tr>
          <tr><th scope="row">XGBoost</th><td>85.25% accuracy · 26 of 28 positive cases identified</td></tr>
        </tbody>
      </table>
      <p>Random Forest had the higher accuracy and an ROC AUC of 0.9405. XGBoost had higher positive-class recall, at 92.86%. The model choice reflects the research question and the size of this holdout.</p>
      <EvidenceFigure figure={figures.roc} />
    </section>
    <section className="study-section">
      <h2>How stable were the explanations?</h2>
      <p>SHAP and LIME each ranked the features behind a prediction. I made small changes to each test input and checked whether the same five features stayed near the top. The Jaccard index compares overlap between two sets, with 1 indicating identical sets.</p>
      <table className="study-table">
        <caption>Mean top-five Jaccard overlap across 20 test cases and 30 perturbations per case</caption>
        <thead><tr><th scope="col">Explanation method</th><th scope="col">Mean overlap</th></tr></thead>
        <tbody>
          <tr><th scope="row">SHAP</th><td>0.7184</td></tr>
          <tr><th scope="row">LIME</th><td>0.6103</td></tr>
        </tbody>
      </table>
      <p>SHAP’s top features were more stable on average in this experiment. The methods also showed positive feature-rank agreement (Spearman ρ = 0.7887). Rank agreement and stability under perturbation answer different questions.</p>
      <EvidenceFigure figure={figures.stability} />
    </section>
    <section className="study-section">
      <h2>Interpretation and limits</h2>
      <p>A language-model assessment found partial semantic alignment between the explanations. A domain expert reviewed their interpretability. The evaluation used one historical dataset and measured agreement and stability. Clinical outcomes and deployment were outside its scope.</p>
      <EvidenceFigure figure={figures.importance} />
      <details className="study-appendix">
        <summary>Preprocessing and validation design</summary>
        <p>After separating the holdout, the training pipeline fitted numerical and categorical transformations and applied SMOTE inside training folds. Stratified cross-validation supported parameter selection before evaluating the final models on the holdout.</p>
        <p>The stability experiment repeatedly added small perturbations to the 20 selected inputs. Each method’s perturbed top-five feature set was compared with its own original explanation.</p>
      </details>
      <p>The paper was coauthored by Lesnar Tambun, Nanang Yudi Setiawan and Hariz Farisi. <a href="https://garuda.kemdiktisaintek.go.id/documents/detail/6714990">Read the publication record</a>.</p>
    </section>
  </>;
}