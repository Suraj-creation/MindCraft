import React from 'react';

/**
 * Section rhythm and width are props, not copy-paste. The previous build
 * repeated one container 69 times and one padding 33 times, which is what
 * read as templated. Varying tone/band/width is the whole point.
 */

type Tone = 'ground' | 'ground-2' | 'raised' | 'deep';
type Band = 'tight' | 'normal' | 'loose';
type Width = 'text' | 'default' | 'wide';

const TONE: Record<Tone, string> = {
  ground: 'bg-[var(--color-ground)]',
  'ground-2': 'bg-[var(--color-ground-2)]',
  raised: 'bg-[var(--color-raised)]',
  deep: 'bg-[var(--color-ground-deep)]',
};

const BAND: Record<Band, string> = {
  tight: 'py-[var(--band-tight)]',
  normal: 'py-[var(--band)]',
  loose: 'py-[var(--band-loose)]',
};

const WIDTH: Record<Width, string> = {
  text: 'max-w-[var(--container-text)]',
  default: 'max-w-[var(--container)]',
  wide: 'max-w-[var(--container-wide)]',
};

export const Container: React.FC<{
  width?: Width;
  className?: string;
  children: React.ReactNode;
}> = ({ width = 'default', className = '', children }) => (
  <div className={`${WIDTH[width]} mx-auto px-[var(--gutter)] ${className}`}>{children}</div>
);

export const Section: React.FC<{
  id?: string;
  tone?: Tone;
  band?: Band;
  width?: Width;
  rule?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ id, tone = 'ground', band = 'normal', width = 'default', rule = false, className = '', children }) => (
  <section
    id={id}
    className={`${TONE[tone]} ${BAND[band]} ${rule ? 'border-t border-[var(--color-line)]' : ''} ${className}`}
  >
    <Container width={width}>{children}</Container>
  </section>
);

/**
 * Section heading. Deliberately has no eyebrow slot — a label that only
 * restates the heading is deleted, not styled. Mono metadata that carries a
 * real fact goes in `meta`.
 */
export const SectionHead: React.FC<{
  title: string;
  lead?: string;
  meta?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}> = ({ title, lead, meta, action, className = '' }) => (
  <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}>
    <div className="max-w-2xl">
      <h2 className="text-h3">{title}</h2>
      {lead && <p className="mt-4 text-lead text-[var(--color-ink-2)] measure">{lead}</p>}
    </div>
    {(meta || action) && (
      <div className="flex shrink-0 items-center gap-5">
        {meta}
        {action}
      </div>
    )}
  </div>
);
