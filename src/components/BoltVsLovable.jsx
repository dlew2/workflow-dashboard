import { useState } from 'react';

function WinBadge({ win, label }) {
  if (!win) return null;
  const cls = win === 'a' ? 'win-a' : win === 'b' ? 'win-b' : 'win-tie';
  return <span className={`win ${cls}`}>{label}</span>;
}

export default function BoltVsLovable({ comparison }) {
  const [open, setOpen] = useState(false);
  const { left, right, note } = comparison;

  return (
    <div className="vs-section">
      <div
        className="vs-header"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls="vs-body"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(!open)}
      >
        <div>
          <p className="vs-title">Lovable vs Bolt.new — side by side</p>
          <p className="vs-subtitle">Expand to compare on six dimensions</p>
        </div>
        <svg
          className={`vs-chevron${open ? ' open' : ''}`}
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {open && (
        <div className="vs-body" id="vs-body">
          <div className="vs-grid">
            {[left, right].map((col) => (
              <div className="vs-col" key={col.name}>
                <p className="vs-col-head">{col.name}</p>
                {col.rows.map((row) => (
                  <div key={row.label}>
                    <p className="vs-row-label">
                      {row.label}
                      <WinBadge win={row.win} label={row.winLabel} />
                    </p>
                    <p className="vs-row-val">{row.value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="vs-note">{note}</p>
        </div>
      )}
    </div>
  );
}
