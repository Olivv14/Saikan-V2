import { type CSSProperties } from "react";
import { CAPABILITIES, OUTCOMES, THESIS_INPUTS } from "./data";

const VB_W = 340;
const VB_H = 236;
const pctX = (n: number) => `${(n / VB_W) * 100}%`;
const pctY = (n: number) => `${(n / VB_H) * 100}%`;

const DOT_X = 140;
const ENTRY_X = 210;

const linePath = (y: number, entry: number) =>
  `M ${DOT_X} ${y} C ${DOT_X + 32} ${y}, ${ENTRY_X - 32} ${entry}, ${ENTRY_X} ${entry}`;

const OUT_DOT_X = 126;
const OUT_ARROW_X = 224.5;
const OUT_ROW_WIDTH = 103.5;

const outLinePath = (chipY: number, rowY: number) =>
  `M ${OUT_DOT_X} ${chipY} C ${OUT_DOT_X + 32} ${chipY}, ${OUT_ARROW_X - 32} ${rowY}, ${OUT_ARROW_X} ${rowY}`;

export function ThesisInputSlide() {
  return (
    <section
      aria-label="Absorb every input"
      className="thesis-fixed-slide thesis-mockup-slide thesis-coded-slide thesis-input-coded-slide"
    >
      <div className="thesis-io">
        <div className="io-stage">
          <div className="io-radar" aria-hidden="true" />

          <svg
            className="io-lines"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {THESIS_INPUTS.map(({ label, color }) => (
                <marker
                  key={`arrow-${label}`}
                  id={`thesis-arrow-${label.toLowerCase()}`}
                  markerWidth="7"
                  markerHeight="7"
                  refX="4.5"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill={color} />
                </marker>
              ))}
            </defs>
            {THESIS_INPUTS.map(({ label, color, y, entry }) => (
              <g key={label} style={{ color }}>
                <path
                  d={linePath(y, entry)}
                  stroke={color}
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.85"
                  markerEnd={`url(#thesis-arrow-${label.toLowerCase()})`}
                  style={{ filter: "drop-shadow(0 0 2.5px currentColor)" }}
                />
                <circle cx={DOT_X} cy={y} r="2" fill={color} />
              </g>
            ))}
          </svg>

          {THESIS_INPUTS.map(({ label, Icon, color, y }) => (
            <div
              key={label}
              className="io-row"
              style={
                {
                  "--c": color,
                  left: pctX(6),
                  top: pctY(y),
                } as CSSProperties
              }
            >
              <span className="io-tile" aria-hidden="true">
                <Icon strokeWidth={1.8} />
              </span>
              <span className="io-label">{label}</span>
            </div>
          ))}

          <div
            className="io-chip"
            aria-hidden="true"
            style={{
              left: pctX(214),
              top: pctY(58),
              width: pctX(118),
              height: pctY(124),
            }}
          >
            <span className="chip-bracket chip-bracket-tl" />
            <span className="chip-bracket chip-bracket-tr" />
            <span className="chip-bracket chip-bracket-bl" />
            <span className="chip-bracket chip-bracket-br" />
            <span className="chip-word">saikan</span>
            <small className="chip-os">OS</small>
          </div>
        </div>
      </div>

    </section>
  );
}

export function ThesisCapabilitySlide() {
  return (
    <section
      aria-label="System capabilities"
      className="thesis-fixed-slide thesis-mockup-slide thesis-coded-slide thesis-cap-coded-slide"
    >
      <div className="cap-grid-wrap">
        <div className="cap-grid">
          {CAPABILITIES.map(({ title, desc, color, Icon, badge }) => (
            <article
              key={title}
              className="cap-card"
              style={{ "--c": color } as CSSProperties}
            >
              <span className="cap-icon" aria-hidden="true">
                {badge ? (
                  <span className="cap-badge">{badge}</span>
                ) : Icon ? (
                  <Icon strokeWidth={1.8} />
                ) : null}
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}

export function ThesisOutcomeSlide() {
  return (
    <section
      aria-label="Deliver outcomes"
      className="thesis-fixed-slide thesis-mockup-slide thesis-coded-slide thesis-output-coded-slide"
    >
      <div className="thesis-io">
        <div className="io-stage">
          <div className="io-radar io-radar-left" aria-hidden="true" />

          <svg
            className="io-lines"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {OUTCOMES.map(({ title, color }) => (
                <marker
                  key={`out-arrow-${title}`}
                  id={`out-arrow-${title.toLowerCase()}`}
                  markerWidth="7"
                  markerHeight="7"
                  refX="4.5"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill={color} />
                </marker>
              ))}
            </defs>
            {OUTCOMES.map(({ title, color, chipY, rowY }) => (
              <g key={title} style={{ color }}>
                <path
                  d={outLinePath(chipY, rowY)}
                  stroke={color}
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.85"
                  markerEnd={`url(#out-arrow-${title.toLowerCase()})`}
                  style={{ filter: "drop-shadow(0 0 2.5px currentColor)" }}
                />
                <circle cx={OUT_DOT_X} cy={chipY} r="2" fill={color} />
              </g>
            ))}
          </svg>

          <div
            className="io-chip"
            aria-hidden="true"
            style={{
              left: pctX(8),
              top: pctY(58),
              width: pctX(118),
              height: pctY(124),
            }}
          >
            <span className="chip-bracket chip-bracket-tl" />
            <span className="chip-bracket chip-bracket-tr" />
            <span className="chip-bracket chip-bracket-bl" />
            <span className="chip-bracket chip-bracket-br" />
            <span className="chip-word">saikan</span>
            <small className="chip-os">OS</small>
          </div>

          {OUTCOMES.map(({ title, color, Icon, rowY }) => (
            <div
              key={title}
              className="io-row out-row"
              style={
                {
                  "--c": color,
                  right: pctX(6),
                  top: pctY(rowY),
                  width: pctX(OUT_ROW_WIDTH),
                } as CSSProperties
              }
            >
              <span className="io-tile" aria-hidden="true">
                <Icon strokeWidth={1.8} />
              </span>
              <span className="out-text">
                <b>{title}</b>
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}


