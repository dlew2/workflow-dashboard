export default function NotFullStack({ steps }) {
  return (
    <aside className="not-fullstack" aria-label="Additional steps required to go live">
      <p className="nfs-title">Additional steps required to go live</p>
      <p className="nfs-body">
        This tool generates and edits code but has no hosting, database, or deployment layer. You still need to:
      </p>
      <ul className="nfs-steps">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </aside>
  );
}
