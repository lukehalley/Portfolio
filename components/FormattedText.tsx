interface FormattedTextProps {
  text: string;
  className?: string;
  animatedUnderline?: boolean;
}

export function FormattedText({ text, className = "", animatedUnderline = false }: FormattedTextProps) {
  // Replace **text** with <strong>, __text__ with <u>, and \n with <br>
  const strongClass = animatedUnderline
    ? 'font-black text-[1.35em] text-red-600 tracking-wide relative inline-block after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-red-600 after:origin-left after:scale-x-0 after:animate-[underline-slide_1s_ease-out_1.5s_forwards]'
    : 'font-black text-[1.15em]';

  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, `<strong class="${strongClass}">$1</strong>`)
    .replace(/__(.*?)__/g, '<u class="decoration-4 decoration-tertiary underline-offset-4">$1</u>')
    .replace(/\n/g, '<br />');

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
}
