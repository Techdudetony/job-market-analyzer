"use client";

import { motion } from "framer-motion";

export function InsightsSection() {
  return (
    <section className="section alt" id="insights">
      <div className="container">
        <header className="sectionHeader">
          <h2 className="sectionTitle">Insights</h2>
          <p className="sectionSubtitle">
            Turn raw data into decisions: what to learn next, where to apply,
            and what pays.
          </p>
        </header>

        <div className="gridThree">
          {[
            {
              title: "Skill Demand",
              desc: "Track which skills are rising across industries and roles.",
            },
            {
              title: "Wage Signals",
              desc: "Compare wage trends across roles and regions.",
            },
            {
              title: "Career Paths",
              desc: "See adjacent roles based on overlapping skills.",
            },
          ].map((card) => (
            <motion.article
              key={card.title}
              className="panel"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="panelTitle">{card.title}</h3>
              <p className="muted">{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
