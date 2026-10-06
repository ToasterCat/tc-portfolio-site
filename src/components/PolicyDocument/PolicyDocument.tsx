import { ReactNode } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './PolicyDocument.scss';

export interface PolicySection {
  /** The id of the element to jump to, on the page's own markup. */
  id: string;
  label: string;
  /** A sub-section: indented under the entry before it, and not numbered. */
  sub?: boolean;
}

interface PolicyDocumentProps {
  title: string;
  /** ISO date (YYYY-MM-DD) of the last substantive change. */
  updated: string;
  /** Optional quick-reference directory: a sticky side column on wide screens. */
  sections?: PolicySection[];
  children: ReactNode;
}

/**
 * Shared layout for the site's policy pages (privacy, AI usage): a plain
 * reading column with a dated header. Content is the page's own markup.
 */
export default function PolicyDocument({ title, updated, sections, children }: PolicyDocumentProps) {
  useDocumentTitle(title);

  return (
    <article className={`policy ${sections ? 'policy--directory' : ''}`}>
      <header className="policy-head">
        <h1 className="policy-title">{title}</h1>
        <p className="meta meta-dim policy-updated">
          Last updated <time dateTime={updated}>{updated}</time>
        </p>
      </header>

      {sections && (
        <nav className="policy-directory" aria-labelledby="policy-directory-label">
          <h2 id="policy-directory-label" className="meta meta-dim policy-directory-label">
            On this page
          </h2>
          <ol>
            {sections.map((s) => (
              <li key={s.id} className={s.sub ? 'policy-directory-sub' : undefined}>
                {/* Plain hash links: same-page jumps, no route change. */}
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="policy-body">{children}</div>
    </article>
  );
}
