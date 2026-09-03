import { Container } from "../Container";
import { Field } from "../Field";
import { Avatar } from "../Avatar";
import { NumberedSection } from "../NumberedSection";
import { SectionHead } from "../SectionHead";
import { SectionBanner } from "../SectionBanner";
import { CaseStudyHero } from "../CaseStudyHero";
import { MockupFrame } from "../MockupFrame";
import { PlaceholderAsset } from "../PlaceholderAsset";
import { StepFlow } from "../StepFlow";
import { StatGrid } from "../StatGrid";
import { Reveal } from "../ui/Reveal";
import { TiltOnScroll } from "../ui/TiltOnScroll";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { CS1_PIPELINE, CS1_EVAL_STATS } from "../../data/content";
import { asset } from "../../lib/asset";

function ShapLegend() {
  return (
    <div className="shap-legend">
      <span>
        <i className="neg" />
        negative contribution
      </span>
      <span>
        <i className="pos" />
        positive contribution
      </span>
    </div>
  );
}

export function CaseStudyOne() {
  const flat = useMediaQuery("(max-width: 560px)");

  return (
    <>
      {/* ── Title ── */}
      <CaseStudyHero
        id="case-study-1"
        eyebrow="Undergraduate Thesis · Explainable AI"
        title="Multi-Layer XAI Validation Framework"
      >
        <TiltOnScroll className="float-card float-card--primary" baseRotate={flat ? 0 : -6} max={4}>
          <h4>SHAP global feature importance</h4>
          <PlaceholderAsset
            label={"placeholder\nchart export"}
            src={asset("/assets/shap-summary.png")}
            alt="SHAP summary plot — global feature importance for the heart-disease model"
          />
        </TiltOnScroll>
        <TiltOnScroll className="float-card float-card--secondary" baseRotate={flat ? 0 : 5} max={4}>
          <h4>Jaccard stability comparison</h4>
          <PlaceholderAsset
            label={"placeholder\nchart export"}
            src={asset("/assets/jaccard-bar.png")}
            alt="Mean Jaccard stability of XAI explanations — SHAP 0.7184 vs LIME 0.6103"
          />
        </TiltOnScroll>
      </CaseStudyHero>

      {/* ── 01 Project Overview ── */}
      <section className="section">
        <Container>
          <NumberedSection num="01" title="Project Overview">
            <Field label="Background case">
              High-performing machine learning models like XGBoost are often black boxes. In clinical screening
              contexts, doctors and patients can’t act on a prediction they don’t understand — and Explainable AI
              tools like SHAP and LIME are frequently used without ever checking whether the explanation itself is
              stable, consistent, or medically plausible. This gap between “looks interpretable” and “is actually
              trustworthy” is what this research addresses.
            </Field>
            <Field label="Project Goals">
              To build and validate a multi-layer framework that audits SHAP and LIME explanations across three
              dimensions — computational stability, LLM-based semantic plausibility, and clinical domain-expert
              review — using heart disease classification as the test case.
            </Field>
            <Field label="My Role" justify={false}>
              AI/ML Engineer (Research)
            </Field>
            <Field label="My Responsibilities" justify={false}>
              Data Pipeline Design, Model Development, XAI Validation Framework, Statistical Analysis
            </Field>
          </NumberedSection>
        </Container>
      </section>

      {/* ── 02 Understand context ── */}
      <SectionBanner title="Understand context of the problem" />
      <section className="section">
        <Container>
          <div className="problem-grid">
            <Reveal>
              <span className="eyebrow">02</span>
              <h3 style={{ margin: "6px 0 16px", fontSize: "clamp(1.5rem, 3.4vw, 2rem)", fontWeight: 600 }}>
                Main Problem
              </h3>
              <p className="body body--justify">
                Explainable AI outputs (SHAP, LIME) are algorithmic artifacts that can be affected by data noise,
                method configuration, preprocessing, and model characteristics — so they cannot be accepted at face
                value. They need to be evaluated for stability, cross-method consistency, medical plausibility, and
                expert judgment.
              </p>
            </Reveal>
            <Reveal className="problem-quote" delay={0.08}>
              <span className="tag-label">Problem</span>
              <blockquote>
                “An accurate model with an untrustworthy explanation is not safe to deploy in healthcare — yet most
                XAI research stops at visualizing SHAP plots without testing whether that visualization is reliable.”
              </blockquote>
              <span className="chip-cta">How to solve this problem?</span>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 03 Research ── */}
      <section className="section">
        <Container>
          <SectionHead num="03" title="Research" />
          <div className="research-grid">
            <Reveal className="stakeholder" lift>
              <div className="stakeholder__top">
                <Avatar monogram="AU" />
                <div>
                  <div className="stakeholder__name">Dr. dr. Amalia Tri Utami, M.Biomed</div>
                  <div className="stakeholder__role">Biomedical Science Expert</div>
                  <div className="stakeholder__tag">Domain Validator</div>
                </div>
              </div>
              <hr />
              <div className="stack" style={{ gap: 18 }}>
                <Field label="Background" labelSize="1.25rem">
                  Reviewed SHAP global/local plots, LIME local explanations, and SHAP–LIME overlap comparisons as
                  the domain-expert layer of the validation framework.
                </Field>
                <Field label="Context" labelSize="1.25rem">
                  Existing XAI outputs are rarely tested for whether their reasoning aligns with actual clinical
                  knowledge before being presented to healthcare stakeholders.
                </Field>
                <Field label="Needs" labelSize="1.25rem">
                  An explanation artifact that is readable, medically relevant, and honest about its own
                  limitations — not just visually convincing.
                </Field>
              </div>
            </Reveal>
            <Reveal className="findings" delay={0.08} lift>
              <span className="kicker">Findings</span>
              <div className="stack">
                <p className="body body--justify">
                  <strong>Model performance trade-off:</strong> Random Forest led on accuracy (86.89%) and AUC-ROC
                  (94.05%), but XGBoost was selected for recall (92.86%) — in screening, missing a sick patient is
                  costlier than a false alarm.
                </p>
                <p className="body body--justify">
                  <strong>Explanation stability varies by method:</strong> SHAP (TreeExplainer) is more
                  deterministic since it reads the tree structure directly; LIME depends on local sampling and
                  surrogate models, making it more sensitive to configuration.
                </p>
                <p className="body body--justify">
                  <strong>Plausibility is feature-dependent:</strong> Features like <em>thalach</em> (75%) and{" "}
                  <em>cp</em> (60%) aligned well with medical literature; features like <em>chol</em> (33%) needed
                  caution due to phenomena like the cholesterol paradox.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Validation journey map ── */}
      <section className="section section--soft">
        <Container>
          <div className="journey-grid">
            <Reveal className="stack" style={{ gap: 34 }}>
              <Field label="Prospective Validation Journey" labelSize="1.5rem">
                A prediction is generated → SHAP/LIME explanation is produced → explanation undergoes noise-based
                stability testing → direction of contribution is checked by GPT-4 against medical literature → final
                artifact is reviewed by a domain expert before being considered trustworthy.
              </Field>
              <Field label="Retrospective Validation Journey" labelSize="1.5rem">
                Testing revealed that computational stability alone (Jaccard 0.72 for SHAP) wasn’t sufficient —
                semantic validation caught cases where a statistically stable explanation still lacked medical
                plausibility, which led to explicitly flagging “features requiring caution” (chol, ca) in the final
                framework.
              </Field>
            </Reveal>
            <Reveal delay={0.08}>
              <MockupFrame bar={false} style={{ boxShadow: "0 0 15px 20px rgba(0,0,0,0.06)" }}>
                <h4 style={{ margin: "0 0 14px", fontSize: "0.9rem", fontWeight: 600 }}>Validation journey diagram</h4>
                <PlaceholderAsset
                  label={"placeholder\nvalidation journey diagram\nadd asset"}
                  src={asset("/assets/validation-journey.png")}
                  alt="XAI implementation and multi-layer validation flow: SHAP/LIME → stability, semantic, and clinical review → final artifact"
                  style={{ minHeight: 360 }}
                />
              </MockupFrame>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 04 Solution ── */}
      <section className="section">
        <Container>
          <NumberedSection num="04" title="Solution">
            <p className="body body--justify">
              A three-layer XAI validation framework: (1) computational stability testing via noise injection and
              Jaccard index, (2) LLM-based semantic validation of feature-contribution direction against medical
              literature, and (3) domain-expert review of the final artifacts — applied on top of a leakage-safe
              XGBoost/Random Forest pipeline.
            </p>
          </NumberedSection>
        </Container>
      </section>

      {/* ── 05 Ideate & Methodology ── */}
      <SectionBanner title="Ideate & Methodology Design" />
      <section className="section">
        <Container>
          <NumberedSection num="05" title="Ideate">
            <div className="ideate-pair">
              <Field label="Computational Stability Testing">
                Inject Gaussian noise (σ=0.01) into 20 test patients across 30 iterations, then measure how much the
                top-5 SHAP/LIME feature set survives using the Jaccard index — revealing whether an explanation is a
                stable signal or noise-sensitive artifact.
              </Field>
              <Field label="LLM Semantic Validation Layer">
                Use GPT-4 as a literature-grounded reviewer (not a diagnostic tool) to score whether each feature’s
                direction of contribution — e.g. “higher age increases risk” — is medically plausible, producing a
                1–5 alignment score per case.
              </Field>
            </div>
          </NumberedSection>
        </Container>
      </section>

      {/* ── Pipeline flow ── */}
      <section className="section section--soft">
        <Container>
          <Reveal as="p" className="kicker">
            Pipeline Flow
          </Reveal>
          <StepFlow steps={CS1_PIPELINE} />
          <Reveal as="p" className="flow-caption">
            Raw Data → preprocessing → resampling → tuning → champion model → interpretation → validation → artifact
          </Reveal>
        </Container>
      </section>

      {/* ── Preprocessing design ── */}
      <section className="section">
        <Container>
          <Reveal as="p" className="kicker">
            Preprocessing Design
          </Reveal>
          <div className="pre-grid">
            <Reveal>
              <MockupFrame bar={false} style={{ boxShadow: "0 0 4px 2px rgba(0,0,0,0.12)" }}>
                <h4 style={{ margin: "0 0 14px", fontSize: "0.9rem", fontWeight: 600 }}>Anti-leakage pipeline sketch</h4>
                <PlaceholderAsset
                  label={"placeholder\npipeline sketch / diagram\nadd asset"}
                  src={asset("/assets/pipeline-preprocessing.png")}
                  alt="Anti-leakage imblearn pipeline: split → ColumnTransformer (numeric/categorical) → SMOTE in-fold → model → refit"
                  style={{ minHeight: 300, maxWidth: 420 }}
                />
              </MockupFrame>
              <div className="mini-cards">
                <div className="mini-card">
                  <h4>Split first</h4>
                  <p>Data is split before any transformation is fitted.</p>
                </div>
                <div className="mini-card">
                  <h4>SMOTE in-fold</h4>
                  <p>Resampling runs only on the training fold, never on validation data.</p>
                </div>
                <div className="mini-card">
                  <h4>Split paths</h4>
                  <p>Numeric and categorical features travel separate transformation paths.</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="why-card" delay={0.08}>
              <span className="field__label">Why the pipeline is built this way</span>
              <div className="stack">
                <p className="body body--justify">
                  <strong>Why split before any transformation:</strong> fitting an imputer or scaler on the full
                  dataset lets test-set statistics leak into training, inflating every metric that follows.
                </p>
                <p className="body body--justify">
                  <strong>Why SMOTE only in the training fold:</strong> synthesising minority samples across the
                  whole set creates near-duplicates of validation rows, so the model is scored on data it has
                  effectively seen.
                </p>
                <p className="body body--justify">
                  <strong>Why numeric and categorical paths are separated:</strong> each type needs its own
                  imputation and encoding strategy — KNNImputer + MinMaxScaler for numeric, SimpleImputer + One-Hot
                  for categorical.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Model comparison framework ── */}
      <section className="section section--panel">
        <Container>
          <Reveal as="p" className="kicker">
            Model Comparison Framework
          </Reveal>
          <Reveal>
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Random Forest</th>
                  <th>XGBoost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Accuracy</td>
                  <td className="lead">
                    86.89% <span className="note">— led</span>
                  </td>
                  <td className="muted">85.25%</td>
                </tr>
                <tr>
                  <td>AUC-ROC</td>
                  <td className="lead">
                    94.05% <span className="note">— led</span>
                  </td>
                  <td className="muted">91.56%</td>
                </tr>
                <tr className="is-selection">
                  <td className="lead">
                    Recall <span className="champ">(selection metric)</span>
                  </td>
                  <td className="muted">89.29%</td>
                  <td className="lead">
                    92.86% <span className="champ">— champion</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>
          <div className="decision">
            <Reveal className="decision__card" index={0} lift>
              <h4>Candidate metrics</h4>
              <p>Accuracy, AUC-ROC and recall are all on the table after 5-fold tuning.</p>
            </Reveal>
            <span className="arrow">→</span>
            <Reveal className="decision__card" index={1} lift>
              <h4>Decision criterion: recall</h4>
              <p>In screening, missing a sick patient is costlier than a false alarm.</p>
            </Reveal>
            <span className="arrow">→</span>
            <Reveal className="decision__card decision__card--win" index={2} lift>
              <h4>Champion: XGBoost</h4>
              <p>Recall 92.86% — carried forward into SHAP/LIME interpretation.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <MockupFrame bar={false} style={{ marginTop: 32, boxShadow: "var(--shadow-card)" }}>
              <h4 style={{ margin: "0 0 12px", fontSize: "0.9rem", fontWeight: 600 }}>Model comparison chart</h4>
              <PlaceholderAsset
                label={"placeholder — RF vs XGBoost metric chart · add asset"}
                src={asset("/assets/roc-comparison.png")}
                alt="ROC curves comparing Random Forest (AUC 0.9405) and XGBoost (AUC 0.9156)"
                style={{ minHeight: 320, maxWidth: 620 }}
              />
            </MockupFrame>
          </Reveal>
        </Container>
      </section>

      {/* ── Validation framework system ── */}
      <section className="section section--panel">
        <Container>
          <Reveal as="p" className="kicker">
            Validation Framework System
          </Reveal>
          <div className="cards-3">
            <Reveal className="layer-card" index={0} lift>
              <span className="n">Layer 01</span>
              <h3>Stability</h3>
              <p className="body body--justify">
                Computational stability testing via noise injection and the Jaccard index.
              </p>
            </Reveal>
            <Reveal className="layer-card" index={1} lift>
              <span className="n">Layer 02</span>
              <h3>Semantic</h3>
              <p className="body body--justify">
                LLM-based semantic validation of feature-contribution direction against medical literature.
              </p>
            </Reveal>
            <Reveal className="layer-card" index={2} lift>
              <span className="n">Layer 03</span>
              <h3>Expert</h3>
              <p className="body body--justify">
                Domain-expert review of the final artifacts before they are considered trustworthy.
              </p>
            </Reveal>
          </div>
          <Reveal as="p" className="body" style={{ marginTop: 30 }}>
            Stability → Semantic → Expert: a reusable component set for validating XAI outputs on other projects,
            the same way a UI design system is reusable across screens.
          </Reveal>
        </Container>
      </section>

      {/* ── 06 Artefacts & Output ── */}
      <section className="section section--panel">
        <Container>
          <SectionHead num="06" title="Artefacts & Output" />
          <div className="artefacts">
            <Reveal className="artefact" index={0}>
              <h4>SHAP Global Feature Importance</h4>
              <PlaceholderAsset
                label={"placeholder\nplot export · add asset"}
                src={asset("/assets/shap-bar.png")}
                alt="SHAP mean absolute feature importance bar chart"
              />
              <ShapLegend />
            </Reveal>
            <Reveal className="artefact" index={1}>
              <h4>SHAP Waterfall Plot</h4>
              <p className="sub">local explanation, per-patient</p>
              <PlaceholderAsset
                label={"placeholder\nplot export · add asset"}
                src={asset("/assets/shap-waterfall.png")}
                alt="SHAP waterfall plot showing per-feature contributions for a single patient"
              />
              <ShapLegend />
            </Reveal>
            <Reveal className="artefact" index={2}>
              <h4>LIME Local Explanation</h4>
              <p className="sub">rule-based</p>
              <PlaceholderAsset
                label={"placeholder\nplot export · add asset"}
                src={asset("/assets/lime-local.png")}
                alt="LIME local explanation with rule-based feature contributions for a single patient"
              />
            </Reveal>
          </div>
          <Reveal as="p" className="center-note">
            All artefacts and outputs of the research
          </Reveal>
          <div className="artefacts artefacts--split" style={{ marginTop: 24 }}>
            <Reveal className="artefact" index={0}>
              <h4>Jaccard Stability Comparison</h4>
              <p className="sub">SHAP vs LIME</p>
              <PlaceholderAsset
                label={"placeholder\nchart export · add asset"}
                src={asset("/assets/stability-boxplot.png")}
                alt="Boxplot comparing Jaccard stability of SHAP vs LIME explanations across 20 patients"
                style={{ minHeight: 320 }}
              />
            </Reveal>
            <Reveal className="artefact" index={1}>
              <h4>Domain Expert Review Summary</h4>
              <PlaceholderAsset
                label={"placeholder\nreview summary · add asset"}
                src={asset("/assets/domain-expert.png")}
                alt="Domain-expert validation sheet (Lembar Validasi Ahli Domain) reviewed by a biomedical specialist"
                style={{ minHeight: 340 }}
              />
            </Reveal>
            <Reveal className="artefact artefact--wide" index={2}>
              <h4>GPT-4 Semantic Alignment Scorecard</h4>
              <PlaceholderAsset
                label={"placeholder\nscorecard export · add asset"}
                src={asset("/assets/layer2-summary.png")}
                alt="GPT-4 semantic alignment batch summary: per-patient alignment scores and feature plausibility"
                style={{ minHeight: 340 }}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 07 Model evaluation ── */}
      <section className="section">
        <Container>
          <div className="eval-grid">
            <Reveal>
              <span className="eyebrow">07</span>
              <h2 style={{ margin: "6px 0 16px", fontSize: "clamp(1.5rem, 3.4vw, 2rem)", fontWeight: 600, maxWidth: "16ch" }}>
                Model Evaluation &amp; Validation Testing
              </h2>
              <p className="body body--justify" style={{ maxWidth: 660 }}>
                Validation was tested across four dimensions: model performance on an isolated test set, explanation
                stability under noise injection (20 patients × 30 iterations), semantic alignment via GPT-4, and
                review by a licensed biomedical domain expert.
              </p>
              <p className="kicker" style={{ margin: "28px 0 16px" }}>
                Result and Impact
              </p>
              <StatGrid items={CS1_EVAL_STATS} />
              <p className="body body--justify" style={{ maxWidth: 660 }}>
                <strong>Impact:</strong> The framework revealed that a technically stable explanation isn’t
                automatically a trustworthy one — surfacing specific features (cholesterol, vessel count) that need
                clinical caution before any XAI artifact is used to support real medical decisions.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <TiltOnScroll className="tilt-sheet" baseRotate={flat ? 0 : -12} max={5}>
                <h4>Validation test plan &amp; results</h4>
                <table className="test-plan-table">
                  <thead>
                    <tr>
                      <th>Dimension</th>
                      <th>Method</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test-set performance</td>
                      <td>Isolated hold-out set, champion model (XGBoost)</td>
                      <td className="lead">92.86% recall</td>
                    </tr>
                    <tr>
                      <td>Explanation stability</td>
                      <td>Noise injection, 20 patients × 30 iterations, Jaccard index</td>
                      <td className="lead">
                        0.7184 SHAP<span className="note">vs 0.6103 LIME</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Semantic alignment</td>
                      <td>GPT-4 batch scoring vs. medical literature</td>
                      <td className="lead">
                        3.05 / 5<span className="note">partially aligned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Domain expert review</td>
                      <td>Licensed biomedical specialist review of final artifacts</td>
                      <td className="lead">
                        Reviewed<span className="note">flagged chol, ca for caution</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TiltOnScroll>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 08 Conclusion ── */}
      <section className="section">
        <Container>
          <NumberedSection num="08" title="Conclusion">
            <p className="body body--justify">
              This research shows that evaluating a medical ML model requires more than accuracy — it requires
              layered scrutiny of the explanation itself: is it stable, is it consistent across methods, is it
              medically plausible, and does a domain expert agree. The project demonstrates both technical ML
              competency and the judgment to know when a result is “good enough to publish” versus “good enough to
              deploy” — two very different bars.
            </p>
          </NumberedSection>
        </Container>
      </section>
    </>
  );
}
