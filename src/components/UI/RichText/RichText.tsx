import { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders project copy with a deliberately tiny inline syntax:
 *
 *   [text](https://example.com)   external link (new tab, noopener)
 *   [text](/portfolio/lizzie)     in-app link (router, no reload)
 *   **bold**   *italic*
 *   a paragraph whose lines all start with "- " becomes a bullet list
 *
 * Everything becomes React elements - no HTML is ever injected - and a link
 * whose URL isn't http(s) or a site path is rendered as plain text.
 */

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const m of Array.from(text.matchAll(TOKEN))) {
    const at = m.index ?? 0;
    if (at > last) {
      out.push(text.slice(last, at));
    }
    const [whole, label, url, bold, italic] = m;

    if (label !== undefined && url !== undefined) {
      if (url.startsWith('/') && !url.startsWith('//')) {
        out.push(<Link key={key++} to={url}>{renderInline(label)}</Link>);
      } else if (/^https?:\/\//i.test(url)) {
        out.push(
          <a key={key++} href={url} target="_blank" rel="noopener noreferrer">
            {renderInline(label)}
          </a>
        );
      } else {
        out.push(whole); // unknown scheme: show it as text, don't link it
      }
    } else if (bold !== undefined) {
      out.push(<strong key={key++}>{renderInline(bold)}</strong>);
    } else if (italic !== undefined) {
      out.push(<em key={key++}>{renderInline(italic)}</em>);
    }
    last = at + whole.length;
  }

  if (last < text.length) {
    out.push(text.slice(last));
  }
  return out;
}

function isList(paragraph: string) {
  const lines = paragraph.split('\n').filter((l) => l.trim() !== '');
  return lines.length > 0 && lines.every((l) => l.trimStart().startsWith('- '));
}

interface RichTextProps {
  paragraphs: string[];
  className?: string;
}

export default function RichText(props: RichTextProps) {
  if (props.paragraphs.length === 0) {
    return null;
  }

  return (
    <div className={props.className}>
      {props.paragraphs.map((paragraph, i) => (
        <Fragment key={i}>
          {isList(paragraph) ? (
            <ul>
              {paragraph
                .split('\n')
                .filter((l) => l.trim() !== '')
                .map((line, j) => (
                  <li key={j}>{renderInline(line.trimStart().slice(2))}</li>
                ))}
            </ul>
          ) : (
            <p>{renderInline(paragraph)}</p>
          )}
        </Fragment>
      ))}
    </div>
  );
}

/** Inline-only variant, for single strings like testimonial quotes. */
export function InlineText(props: { text: string }) {
  return <>{renderInline(props.text)}</>;
}
