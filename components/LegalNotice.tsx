/**
 * Flags every legal page as a structural placeholder — not reviewed,
 * not to be published as-is. Remove once real, lawyer-reviewed text
 * replaces the bracketed placeholders on that page.
 */
export function LegalNotice() {
  return (
    <div className="mb-12 rounded-xl border border-gold/30 bg-navy-raised p-4 text-sm text-offwhite/80">
      <strong className="text-gold">Not reviewed — do not publish as-is.</strong>{" "}
      This page is a structural placeholder covering the standard fields German
      law typically requires. Bracketed text needs real details, and the whole
      page should be reviewed by a lawyer (or a proper generator like{" "}
      <a href="https://www.e-recht24.de" className="underline hover:text-gold">
        e-recht24.de
      </a>
      ) before this site goes live.
    </div>
  );
}
