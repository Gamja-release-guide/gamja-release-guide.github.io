import { useState, useMemo, useCallback } from 'react';
import { categories, type Check, type CheckCategory } from '../data/checks';

interface CheckState {
  enabled: boolean;
  options: Record<string, number | string[]>;
}

function generateYaml(states: Record<string, CheckState>): string {
  const lines: string[] = ['checks:'];

  for (const cat of categories) {
    for (const check of cat.checks) {
      const state = states[check.id];
      if (!state) continue;

      lines.push(`  ${check.id}:`);
      lines.push(`    enabled: ${state.enabled}`);

      if (check.options && state.enabled) {
        for (const opt of check.options) {
          const val = state.options[opt.key] ?? opt.defaultValue;
          if (Array.isArray(val)) {
            lines.push(`    ${opt.key}:`);
            for (const item of val) {
              lines.push(`      - ${item}`);
            }
          } else {
            lines.push(`    ${opt.key}: ${val}`);
          }
        }
      }
    }
  }

  return lines.join('\n');
}

function CheckToggle({
  check,
  state,
  onToggle,
  onOptionChange,
}: {
  check: Check;
  state: CheckState;
  onToggle: () => void;
  onOptionChange: (key: string, value: number) => void;
}) {
  return (
    <div className="pg-check">
      <label className="pg-check-row">
        <span className="pg-check-info">
          <span className="pg-check-name">{check.name}</span>
          <span className="pg-check-desc">{check.description}</span>
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={state.enabled}
          className={`pg-toggle ${state.enabled ? 'pg-toggle--on' : ''}`}
          onClick={onToggle}
        >
          <span className="pg-toggle-knob" />
        </button>
      </label>
      {check.options && state.enabled && (
        <div className="pg-options">
          {check.options.map((opt) =>
            opt.type === 'number' ? (
              <label key={opt.key} className="pg-option">
                <span className="pg-option-label">{opt.label}</span>
                <input
                  type="number"
                  className="pg-option-input"
                  value={(state.options[opt.key] as number) ?? opt.defaultValue}
                  onChange={(e) =>
                    onOptionChange(opt.key, parseInt(e.target.value, 10) || 0)
                  }
                />
              </label>
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}

function CategoryGroup({
  category,
  states,
  onToggle,
  onOptionChange,
}: {
  category: CheckCategory;
  states: Record<string, CheckState>;
  onToggle: (id: string) => void;
  onOptionChange: (checkId: string, key: string, value: number) => void;
}) {
  return (
    <div className="pg-category">
      <div className="pg-cat-header">
        <span className="pg-cat-name">{category.name}</span>
        <span className="pg-cat-count">{category.count}</span>
      </div>
      {category.checks.map((check) => (
        <CheckToggle
          key={check.id}
          check={check}
          state={states[check.id]!}
          onToggle={() => onToggle(check.id)}
          onOptionChange={(key, val) => onOptionChange(check.id, key, val)}
        />
      ))}
    </div>
  );
}

export default function ConfigPlayground() {
  const [states, setStates] = useState<Record<string, CheckState>>(() => {
    const init: Record<string, CheckState> = {};
    for (const cat of categories) {
      for (const check of cat.checks) {
        const options: Record<string, number | string[]> = {};
        if (check.options) {
          for (const opt of check.options) {
            options[opt.key] = opt.defaultValue;
          }
        }
        init[check.id] = { enabled: check.defaultEnabled, options };
      }
    }
    return init;
  });

  const [copied, setCopied] = useState(false);

  const yaml = useMemo(() => generateYaml(states), [states]);

  const enabledCount = useMemo(
    () => Object.values(states).filter((s) => s.enabled).length,
    [states],
  );

  const handleToggle = useCallback((id: string) => {
    setStates((prev) => ({
      ...prev,
      [id]: { ...prev[id]!, enabled: !prev[id]!.enabled },
    }));
  }, []);

  const handleOptionChange = useCallback(
    (checkId: string, key: string, value: number) => {
      setStates((prev) => ({
        ...prev,
        [checkId]: {
          ...prev[checkId]!,
          options: { ...prev[checkId]!.options, [key]: value },
        },
      }));
    },
    [],
  );

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(yaml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = yaml;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [yaml]);

  return (
    <div className="pg-container">
      <div className="pg-controls">
        <div className="pg-controls-header">
          <span className="pg-controls-title">Checks</span>
          <span className="pg-controls-count">
            {enabledCount}/{Object.keys(states).length} enabled
          </span>
        </div>
        <div className="pg-controls-list">
          {categories.map((cat) => (
            <CategoryGroup
              key={cat.id}
              category={cat}
              states={states}
              onToggle={handleToggle}
              onOptionChange={handleOptionChange}
            />
          ))}
        </div>
      </div>
      <div className="pg-preview">
        <div className="pg-preview-header">
          <span className="pg-preview-title">.release-guard.yml</span>
          <button
            type="button"
            className="pg-copy-btn"
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="pg-preview-code">
          <code>{yaml}</code>
        </pre>
      </div>
    </div>
  );
}
