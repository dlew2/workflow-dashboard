const pillColors = {
  blue:   'p-blue',
  pink:   'p-pink',
  teal:   'p-teal',
  amber:  'p-amber',
  purple: 'p-purple',
  gray:   'p-gray',
};

export default function RecommendationsTable({ recommendations }) {
  return (
    <div>
      <p className="rec-intro">
        A workflow is only recommended if it genuinely outperforms the others on that dimension.{' '}
        <span className="badge badge-no" style={{ marginLeft: 0 }}>not full-stack</span>{' '}
        tools are flagged where the gap to a live app matters.
      </p>
      <table>
        <caption>Workflow recommendations by project type</caption>
        <thead>
          <tr>
            <th scope="col" style={{ width: '26%' }}>Project type</th>
            <th scope="col" style={{ width: '32%' }}>Recommended</th>
            <th scope="col">Reasoning & trade-offs</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((rec) => (
            <tr key={rec.type}>
              <th scope="row">{rec.type}</th>
              <td>
                {rec.pills.map((p) => (
                  <span key={p.label} className={`pill ${pillColors[p.color]}`}>
                    {p.label}
                  </span>
                ))}
              </td>
              <td>
                {rec.reasoning}
                <span className="why">{rec.caveat}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
