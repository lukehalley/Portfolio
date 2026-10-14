// VerticalAI logo mark, copied from the verticalai.com.au site's va-logo-black-bold.svg.
// Inline so it inherits currentColor in light and dark blocks.
export function VaMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <polygon points="13.54,33.84 26.46,33.84 60,117.69 93.54,33.84 106.46,33.84 60,150" />
      <polygon points="140,33.84 186.46,150 173.54,150 140,66.16 106.46,150 93.54,150" />
      <circle cx="140" cy="111" r="6.5" />
    </svg>
  );
}
