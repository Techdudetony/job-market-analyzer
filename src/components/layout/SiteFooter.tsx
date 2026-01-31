export function SiteFooter() {
  return (
    <footer className="siteFooter" id="about">
      <div className="container footerInner">
        <p className="muted">
          Built with public data sources. More integrations coming soon.
        </p>
        <p className="muted small">
          © {new Date().getFullYear()} Job Market Analyzer
        </p>
      </div>
    </footer>
  );
}
