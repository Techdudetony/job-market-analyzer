"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container heroInner">
        <motion.h1
          className="heroTitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Make the job market make sense!
        </motion.h1>

        <motion.p
          className="heroSubtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          Explore trending roles, rising skills, and wage signals using public
          data APIs.
        </motion.p>

        <motion.div
          className="heroCtas"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          <a className="btn primary" href="#insights">
            See Insights
          </a>
        </motion.div>

        <motion.div
          className="heroStats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <div className="statCard">
            <p className="statLabel">Data</p>
            <p className="statValue">Public APIs</p>
          </div>
          <div className="statCard">
            <p className="statLabel">Focus</p>
            <p className="statValue">Skills + Wages</p>
          </div>
          <div className="statCard">
            <p className="statLabel">Goal</p>
            <p className="statValue">Actionable Insights</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
