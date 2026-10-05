import { ReactNode } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './PolicyDocument.scss';

interface PolicyDocumentProps {
  title: string;
  /** ISO date (YYYY-MM-DD) of the last substantive change. */
  updated: string;
  children: ReactNode;
}

/**
 * Shared layout for the site's policy pages (privacy, AI usage): a plain
 * reading column with a dated header. Content is the page's own markup.
 */
export default function PolicyDocument({ title, updated, children }: PolicyDocumentProps) {
  useDocumentTitle(title);

  return (
    <article className="policy">
      <header className="policy-head">
        <h1 className="policy-title">{title}</h1>
        <p className="meta meta-dim policy-updated">
          Last updated <time dateTime={updated}>{updated}</time>
        </p>
      </header>

      <div className="policy-body">{children}</div>
    </article>
  );
}
