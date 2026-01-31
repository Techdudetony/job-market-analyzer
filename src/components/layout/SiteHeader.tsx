"use client";

import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <motion.a
          href="/"
          className="brand"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <span className="brandMark" aria-hidden="true">
            ⁘
          </span>
          <span className="brandText">Job Market Analyzer</span>
        </motion.a>

        <nav className="nav" aria-label="Primary navigation">
          <a className="navLink" href="#dashboard">
            Dashboard
          </a>
          <a className="navLink" href="#insights">
            Insights
          </a>
          <a className="navLink" href="#about">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
