import { useState, useRef } from 'react';
import { workflows, recommendations } from './data/workflows';
import WorkflowPanel from './components/WorkflowPanel';
import RecommendationsTable from './components/RecommendationsTable';
import './App.css';

const tabs = [
  ...workflows.map((w) => ({ id: w.id, label: w.label })),
  { id: 'rec', label: 'Recommendations' },
];

export default function App() {
  const [active, setActive] = useState(workflows[0].id);
  const tabRefs = useRef([]);

  function handleKeyDown(e) {
    const idx = tabs.findIndex((t) => t.id === active);
    if (e.key === 'ArrowRight') {
      const next = tabs[(idx + 1) % tabs.length];
      setActive(next.id);
      tabRefs.current[(idx + 1) % tabs.length]?.focus();
    }
    if (e.key === 'ArrowLeft') {
      const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
      setActive(prev.id);
      tabRefs.current[(idx - 1 + tabs.length) % tabs.length]?.focus();
    }
    if (e.key === 'Home') { setActive(tabs[0].id); tabRefs.current[0]?.focus(); }
    if (e.key === 'End')  { setActive(tabs[tabs.length - 1].id); tabRefs.current[tabs.length - 1]?.focus(); }
  }

  const activeWorkflow = workflows.find((w) => w.id === active);

  return (
    <div className="container">
      <header>
        <h1>Vibe Coding Workflow Comparison</h1>
        <p className="header-sub">Six tools analysed across containers, database, languages, deployment, and trade-offs</p>
      </header>

      <div role="tablist" aria-label="Workflow tabs" className="tab-bar" onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            className="tab"
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {workflows.map((w) => (
        <div
          key={w.id}
          id={`panel-${w.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${w.id}`}
          hidden={active !== w.id}
        >
          <WorkflowPanel workflow={w} />
        </div>
      ))}

      <div
        id="panel-rec"
        role="tabpanel"
        aria-labelledby="tab-rec"
        hidden={active !== 'rec'}
      >
        <RecommendationsTable recommendations={recommendations} />
      </div>
    </div>
  );
}
