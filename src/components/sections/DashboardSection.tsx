"use clients";

import { motion } from "framer-motion";

const MOCK_TRENDS = [
  { label: "Data Analyst", change: "+12%" },
  { label: "UX Designer", change: "+9%" },
  { label: "Frontend Engineer", change: "+7%" },
  { label: "AI/ML Engineer", change: "+15%" },
];

const MOCK_SKILLS = [
  "SQL",
  "Python",
  "Excel",
  "Power BI",
  "Tableau",
  "React",
  "AWS",
];

export function DashboardSection() {
  return (
    <section className="section" id="dashboard">
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionTitle">Dashboard</h2>
          <p className="sectionSubtitle">
            Trending roles and skills (mock data for now - API integration
            next).
          </p>
        </header>

        <div className="gridTwo">
          <motion.article
            className="panel"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35 }}
          >
            <header className="panelHeader">
              <h3 className="panelTitle">Role Momentum</h3>
              <p className="muted small">Month-over-month change</p>
            </header>

            <ul className="list">
              {MOCK_TRENDS.map((item) => (
                <li key={item.label} className="listRow">
                  <span className="listLabel">{item.label}</span>
                  <span className="pill">{item.change}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="panel"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: 0.06 }}
          >
            <header className="panelHeader">
              <h3 className="panelTitle">Top Skills</h3>
              <p className="muted small">Frequency requested</p>
            </header>

            <div className="chipWrap" aria-label="Top skills list">
              {MOCK_SKILLS.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>

            <p className="muted small panelNote">
              Next: connect O*NET + BLS to generate these dynamically.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
