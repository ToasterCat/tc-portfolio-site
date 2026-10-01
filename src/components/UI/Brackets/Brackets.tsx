import { ReactNode } from 'react';

interface BracketsProps {
  children: ReactNode;
}

/**
 * Label for a tertiary command button: renders `[ LABEL ]`. Put it inside a
 * `.btn.btn--tertiary` element. The brackets are decorative (hidden from
 * screen readers); the label is what gets announced.
 */
export default function Brackets(props: BracketsProps) {
  return (
    <>
      <span className="btn-bracket" aria-hidden="true">[</span>
      <span className="btn-label">{props.children}</span>
      <span className="btn-bracket" aria-hidden="true">]</span>
    </>
  );
}
