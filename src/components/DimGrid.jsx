export default function DimGrid({ dimensions }) {
  return (
    <div className="dim-grid">
      {dimensions.map((dim) => (
        <div className="dim-card" key={dim.label}>
          <p className="dim-label">{dim.label}</p>
          <p className="dim-value">
            {dim.notSpecified && (
              <span className="ns-badge" aria-label="Not specified — developer chooses">
                not specified
              </span>
            )}
            {dim.value}
          </p>
        </div>
      ))}
    </div>
  );
}
