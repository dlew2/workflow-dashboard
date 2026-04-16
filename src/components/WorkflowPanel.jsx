import NotFullStack from './NotFullStack';
import StabilityWarning from './StabilityWarning';
import DimGrid from './DimGrid';
import TradeOffRow from './TradeOffRow';
import BoltVsLovable from './BoltVsLovable';

export default function WorkflowPanel({ workflow }) {
  const { title, dotColor, fullStack, subtitle, steps, warning, surfaces, dimensions, engineering, information, tradeoff, comparison } = workflow;

  return (
    <div>
      <div className="wf-header">
        <div className="wf-dot" style={{ background: dotColor }} aria-hidden="true" />
        <div>
          <h2 className="wf-title">
            {title}
            <span className={`badge ${fullStack ? 'badge-yes' : 'badge-no'}`}>
              {fullStack ? 'full-stack capable' : 'not full-stack'}
            </span>
          </h2>
          <p className="wf-sub">{subtitle}</p>
        </div>
      </div>

      {!fullStack && steps && <NotFullStack steps={steps} />}
      {warning && <StabilityWarning warning={warning} />}

      {surfaces && (
        <div className="surface-grid">
          {surfaces.map((s) => (
            <div className="surface-card" key={s.label}>
              <p className="surface-label">{s.label}</p>
              <p className="surface-val">{s.value}</p>
            </div>
          ))}
        </div>
      )}

      <DimGrid dimensions={dimensions} />
      <TradeOffRow engineering={engineering} information={information} tradeoff={tradeoff} />

      {comparison && <BoltVsLovable comparison={comparison} />}
    </div>
  );
}
