export default function TradeOffRow({ engineering, information, tradeoff }) {
  return (
    <>
      <div className="trade-row">
        <div className="tc tc-eng">
          <p className="tt">Engineering concerns</p>
          <p className="tb">{engineering}</p>
        </div>
        <div className="tc tc-info">
          <p className="tt">Information concerns</p>
          <p className="tb">{information}</p>
        </div>
      </div>
      <div className="callout" role="note">
        Trade-off: {tradeoff}
      </div>
    </>
  );
}
