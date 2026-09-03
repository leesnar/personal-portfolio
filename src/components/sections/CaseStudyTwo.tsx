import { Container } from "../Container";
import { Field } from "../Field";
import { NumberedSection } from "../NumberedSection";
import { SectionHead } from "../SectionHead";
import { SectionBanner } from "../SectionBanner";
import { CaseStudyHero } from "../CaseStudyHero";
import { MockupFrame } from "../MockupFrame";
import { PlaceholderAsset } from "../PlaceholderAsset";
import { StepFlow } from "../StepFlow";
import { StatGrid } from "../StatGrid";
import { TagRow } from "../TagRow";
import { Reveal } from "../ui/Reveal";
import { CS2_EXEC_STATS, CS2_DATA_FLOW, CS2_BUILD_STATS } from "../../data/content";
import { asset } from "../../lib/asset";

export function CaseStudyTwo() {
  return (
    <>
      {/* ── Title ── */}
      <CaseStudyHero
        id="case-study-2"
        browser
        eyebrow="Data Analyst Internship, PT Vinix Seven Aurum (VINIX7) · Security Analytics"
        title="Network Intrusion Detection & Risk Scoring"
      >
        <MockupFrame url>
          <PlaceholderAsset
            label={"placeholder\nLooker Studio dashboard screenshot\nadd asset"}
            src={asset("/assets/dash-executive.png")}
            alt="Network Intrusion Detection dashboard — Executive Overview in Looker Studio"
            style={{ minHeight: 360 }}
          />
        </MockupFrame>
      </CaseStudyHero>

      {/* ── 01 Project Overview ── */}
      <section className="section">
        <Container>
          <NumberedSection num="01" title="Project Overview">
            <Field label="Background case">
              A security team receiving 47,700+ network connection logs per cycle can’t review them manually. Worse,
              a raw classifier that flags 46.6% of all traffic as anomalous produces alert fatigue — analysts start
              ignoring warnings, including real ones. The challenge wasn’t just detection; it was making detection
              operationally usable.
            </Field>
            <Field label="Project Goals">
              Build an end-to-end system that classifies network traffic as normal or anomalous, then translates
              that classification into a prioritized, actionable risk score — reducing the reviewable alert volume
              to a size a human team can realistically handle.
            </Field>
            <Field label="My Role" justify={false}>
              Data Analyst
            </Field>
            <Field label="My Responsibilities" justify={false}>
              Data Pipeline Engineering, Model Development, Risk Scoring System, Dashboard Engineering
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
                Without prioritization, security teams face a binary choice: investigate everything (impossible at
                scale) or investigate nothing systematically (dangerous). The system needs a middle layer that ranks
                urgency, not just detects anomalies.
              </p>
            </Reveal>
            <Reveal className="problem-quote" delay={0.08}>
              <span className="tag-label">Problem</span>
              <blockquote>
                “46.6% of traffic flagged as anomalous is not a usable security signal — it’s noise that overwhelms
                the team it’s meant to help.”
              </blockquote>
              <span className="chip-cta">How to solve this problem?</span>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 03 Key dashboard pages ── */}
      <SectionBanner title="Key dashboard pages and features" />
      <section className="section">
        <Container>
          <NumberedSection num="03" title="Key Pages & Features">
            <TagRow
              items={[
                { label: "Executive Overview", cls: "tag--fill" },
                { label: "Traffic Analysis", cls: "tag--fill" },
                { label: "ML & Threat Analysis", cls: "tag--fill" },
              ]}
            />
          </NumberedSection>
        </Container>
      </section>

      {/* ── Dashboard pages 1 / 2 / 3 ── */}
      <section className="section section--soft">
        <Container>
          <div className="dash-pages">
            <Reveal>
              <span className="field__label" style={{ fontSize: "1.5rem" }}>
                Page: Executive Overview
              </span>
              <p className="body body--justify" style={{ margin: "14px 0" }}>
                Key-indicator summary, designed so non-technical stakeholders can read the state of the network at a
                glance.
              </p>
              <StatGrid items={CS2_EXEC_STATS} style={{ margin: 0 }} />
            </Reveal>
            <Reveal delay={0.08}>
              <span className="field__label" style={{ fontSize: "1.5rem" }}>
                Page: Traffic Analysis
              </span>
              <p className="body body--justify" style={{ margin: "14px 0" }}>
                Protocol distribution (TCP/UDP/ICMP), connection-flag distribution, top 10 services, and anomaly
                rate per service — for deeper investigation by analysts.
              </p>
              <TagRow
                items={[
                  "Protocol distribution",
                  "Connection flag distribution",
                  "Top 10 service",
                  "Anomaly rate per service",
                ]}
              />
            </Reveal>
          </div>
          <div className="dash-pages" style={{ marginTop: 40 }}>
            <Reveal>
              <span className="field__label" style={{ fontSize: "1.5rem" }}>
                Page: ML &amp; Threat Analysis
              </span>
              <p className="body body--justify" style={{ margin: "14px 0 0" }}>
                Model feature importance (src_bytes, dst_bytes, flag), model comparison across 5 algorithms, risk
                score distribution, and protocol priority breakdown.
              </p>
            </Reveal>
            <Reveal delay={0.08} style={{ alignContent: "flex-start" }}>
              <TagRow
                items={[
                  "Feature importance",
                  "Model comparison (5 algorithms)",
                  "Risk score distribution",
                  "Protocol priority breakdown",
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 04 Final design ── */}
      <section className="section section--panel">
        <Container>
          <SectionHead num="04" title="Final Design" />
          <Reveal as="p" className="kicker" style={{ color: "var(--muted)" }}>
            ALL PAGES
          </Reveal>
          <div className="mock-grid">
            <Reveal>
              <MockupFrame label="Executive Overview">
                <PlaceholderAsset
                  label={"placeholder\nExecutive Overview page\nadd asset"}
                  src={asset("/assets/dash-executive.jpg")}
                  alt="Executive Overview dashboard page — total traffic, anomaly traffic, average risk score, security health index"
                  style={{ minHeight: 300 }}
                />
              </MockupFrame>
            </Reveal>
            <Reveal delay={0.08}>
              <MockupFrame label="Traffic Analysis">
                <PlaceholderAsset
                  label={"placeholder\nTraffic Analysis page\nadd asset"}
                  src={asset("/assets/dash-traffic.jpg")}
                  alt="Traffic Analysis dashboard page — protocol and flag distribution, protocol priority, top services"
                  style={{ minHeight: 300 }}
                />
              </MockupFrame>
            </Reveal>
          </div>
          <div className="mock-grid mock-grid--wide" style={{ marginTop: 24 }}>
            <Reveal>
              <MockupFrame label="ML & Threat Analysis">
                <PlaceholderAsset
                  label={"placeholder\nML & Threat Analysis page\nadd asset"}
                  src={asset("/assets/dash-ml-threat.jpg")}
                  alt="ML & Threat Analysis dashboard page — model metrics (99.80% accuracy), model comparison, feature importance, risk score distribution"
                  style={{ minHeight: 420 }}
                />
              </MockupFrame>
            </Reveal>
          </div>
          <Reveal className="data-flow-panel">
            <StepFlow steps={CS2_DATA_FLOW} six />
            <PlaceholderAsset
              label={"placeholder — data flow diagram export · add asset"}
              src={asset("/assets/data-flow.png")}
              alt="Project data flow: onboarding, dataset assessment, preprocessing, EDA, visualization, modeling/risk scoring, insight, recommendation, handover"
              style={{ minHeight: 320, marginTop: 24, maxWidth: 560 }}
            />
            <h3>Main Data Flow</h3>
          </Reveal>
        </Container>
      </section>

      {/* ── 05 Building the system ── */}
      <section className="section section--panel">
        <Container>
          <SectionHead num="05" title="Building The System" />
          <Reveal as="p" className="body" style={{ fontSize: "1.25rem", color: "var(--muted)", marginBottom: 20 }}>
            With Python &amp; Looker Studio
          </Reveal>
          <div className="build-grid">
            <Reveal>
              <p className="body body--justify" style={{ marginBottom: 24 }}>
                Built with Python (pandas, NumPy, scikit-learn) for the ML pipeline and Looker Studio for the
                dashboard layer. Random Forest was benchmarked against Logistic Regression, Decision Tree, KNN, and
                Gradient Boosting on the same data split — reaching 99.80% accuracy and 99.96% recall, with
                consistent high F1 scores across all five models confirming the data was genuinely separable rather
                than the result of overfitting one model.
              </p>
              <div className="build-card">
                <span className="field__label">Five algorithms, same data split</span>
                <TagRow
                  items={[
                    { label: "Random Forest — champion", cls: "tag--solid" },
                    "Logistic Regression",
                    "Decision Tree",
                    "KNN",
                    "Gradient Boosting",
                  ]}
                />
                <StatGrid items={CS2_BUILD_STATS} style={{ margin: 0 }} />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <MockupFrame dark dots={false} label="intrusion_detection.ipynb">
                <PlaceholderAsset label={"placeholder\nJupyter notebook screenshot\nadd asset"} 
                src={asset("/assets/intrusion_detection.png")}
                style={{ minHeight: 440 }} />
              </MockupFrame>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 06 Final project ── */}
      <section className="section">
        <Container>
          <div className="final-project">
            <SectionHead num="06" title="Final Project" />
            <Reveal>
              <MockupFrame url>
                <PlaceholderAsset
                  label={"placeholder\npublished dashboard screenshot\nadd asset"}
                  src={asset("/assets/dash-executive.jpg")}
                  alt="Published Network Intrusion Detection dashboard in Looker Studio"
                  style={{ minHeight: 420 }}
                />
              </MockupFrame>
            </Reveal>
          </div>
          <div className="url-cards">
            <Reveal className="url-card url-card--a" index={0}>
              <span className="k">Dashboard URL:</span>
              <a
                className="v"
                href="https://datastudio.google.com/u/0/reporting/9c6d61ca-328c-4efc-bd24-28e73221b30f"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
              >
                https://datastudio.google.com/u/0/reporting/9c6d61ca-328c-4efc-bd24-28e73221b30f
              </a>
            </Reveal>
            <Reveal className="url-card url-card--b" index={1}>
              <span className="k">Project on Github:</span>
              <span className="v placeholder">[GitHub repo link — ]</span>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
