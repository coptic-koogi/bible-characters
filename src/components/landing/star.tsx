'use client';

/**
 * The app's emblem: an eight-pointed Coptic star (all 43 scene definitions
 * ship with it in the real app). Pure SVG, no dependencies.
 */

export const STAR_POINTS =
  '70,20 78,50.6 105.4,34.6 89.4,62 120,70 89.4,78 105.4,105.4 78,89.4 70,120 62,89.4 34.6,105.4 50.6,78 20,70 50.6,62 34.6,34.6 62,50.6';

export function CopticStar({
  className = 'w-6 h-6',
  stroke = 'currentColor',
  fill = 'none',
  strokeWidth = 7,
  title,
}: {
  className?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  title?: string;
}) {
  return (
    <svg viewBox="0 0 140 140" className={className} role={title ? 'img' : 'presentation'} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <polygon points={STAR_POINTS} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}

/** Star with rotating halo rays — used in the hero. */
export function CopticStarGlow({ className = 'w-40 h-40' }: { className?: string }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* halo rays */}
      <div className="absolute inset-0 animate-spin-slow">
        {rays.map((a) => (
          <span
            key={a}
            className="absolute left-1/2 top-1/2 origin-top"
            style={{
              width: 2,
              height: '50%',
              transform: `translate(-50%,0) rotate(${a}deg)`,
              background: 'linear-gradient(to bottom, rgba(232,206,140,0.55), transparent 78%)',
              borderRadius: 999,
            }}
          />
        ))}
      </div>
      {/* breathing disc */}
      <div
        className="absolute inset-[14%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,206,140,0.22) 0%, rgba(232,206,140,0.05) 55%, transparent 72%)',
          animation: 'floaty 6s ease-in-out infinite',
        }}
      />
      {/* the star */}
      <div className="absolute inset-[24%] text-gold-400">
        <CopticStar className="w-full h-full" stroke="currentColor" fill="rgba(232,206,140,0.10)" />
      </div>
    </div>
  );
}
