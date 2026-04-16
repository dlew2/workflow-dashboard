export default function StabilityWarning({ warning }) {
  return (
    <aside className="stability-warning" aria-label={warning.title}>
      <p className="sw-title">{warning.title}</p>
      <p className="sw-body">{warning.body}</p>
    </aside>
  );
}
