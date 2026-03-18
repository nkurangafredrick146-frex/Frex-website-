'use client';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface GlossaryTermProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export default function GlossaryTerm({ term, definition, children }: GlossaryTermProps) {
  const id = `glossary-${term.replace(/\s+/g, '-')}`;
  return (
    <>
      <span data-tooltip-id={id} data-tooltip-content={definition} className="underline decoration-cyan-400 cursor-help">
        {children}
      </span>
      <Tooltip id={id} place="top" className="!bg-gray-900 !text-white !border !border-cyan-500 !rounded !p-2" />
    </>
  );
}
