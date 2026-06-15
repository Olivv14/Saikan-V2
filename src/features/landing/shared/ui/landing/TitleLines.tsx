type TitleLinesProps = {
  lines: string[];
  highlightedLines?: string[];
};

export function TitleLines({ lines, highlightedLines = [] }: TitleLinesProps) {
  return (
    <>
      {lines.map((line, index) => {
        const content = highlightedLines.includes(line) ? (
          <span>{line}</span>
        ) : (
          line
        );

        return (
          <span className="landing-title-line" key={line}>
            {content}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        );
      })}
    </>
  );
}
