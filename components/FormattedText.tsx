interface FormattedTextProps {
  text: string;
  className?: string;
}

export function FormattedText({ text, className = "" }: FormattedTextProps) {
  // Replace **text** with <strong> and __text__ with <u>
  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-black text-[1.15em]">$1</strong>')
    .replace(/__(.*?)__/g, '<u class="decoration-4 decoration-tertiary underline-offset-4">$1</u>');

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
}
