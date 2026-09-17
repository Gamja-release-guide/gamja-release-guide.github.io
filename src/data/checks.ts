export interface Check {
  id: string;
  name: string;
  description: string;
  category: string;
  defaultEnabled: boolean;
  options?: CheckOption[];
}

export interface CheckOption {
  key: string;
  label: string;
  type: 'number' | 'string[]';
  defaultValue: number | string[];
}

export interface CheckCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  checks: Check[];
}

export const categories: CheckCategory[] = [
  {
    id: 'security',
    name: 'Security',
    icon: '\u{1F6E1}',
    count: 7,
    checks: [
      { id: 'secret-scan', name: 'Secret Scan', description: 'Detect leaked API keys, tokens, and credentials via gitleaks + TruffleHog', category: 'security', defaultEnabled: true },
      { id: 'secrets-in-url-check', name: 'Secrets in URL', description: 'Find API keys and tokens embedded in URLs', category: 'security', defaultEnabled: true },
      { id: 'sensitive-comment-check', name: 'Sensitive Comments', description: 'Detect passwords, internal URLs, private IPs in code comments', category: 'security', defaultEnabled: true },
      { id: 'iac-security-check', name: 'IaC Security', description: 'Terraform, Kubernetes, CloudFormation misconfiguration detection', category: 'security', defaultEnabled: true },
      { id: 'security-header-check', name: 'Security Headers', description: 'CORS, CSRF, HSTS, CSP misconfiguration checks', category: 'security', defaultEnabled: true },
      { id: 'sql-injection-check', name: 'SQL Injection', description: 'Detect unsafe query construction across 7 languages', category: 'security', defaultEnabled: true },
      { id: 'xss-check', name: 'XSS', description: 'Cross-site scripting patterns across 11 patterns, 7 frameworks', category: 'security', defaultEnabled: true },
    ],
  },
  {
    id: 'code-quality',
    name: 'Code Quality',
    icon: '\u{2728}',
    count: 12,
    checks: [
      { id: 'complexity-check', name: 'Complexity', description: 'File length, nesting depth, parameter count, function density', category: 'code-quality', defaultEnabled: true },
      { id: 'error-handling-check', name: 'Error Handling', description: 'Empty catch blocks, unguarded async, broad exceptions', category: 'code-quality', defaultEnabled: true },
      { id: 'deprecated-api-check', name: 'Deprecated APIs', description: '30+ deprecated APIs across 6 ecosystems', category: 'code-quality', defaultEnabled: true },
      { id: 'dead-code-check', name: 'Dead Code', description: 'Unused exports and function definitions', category: 'code-quality', defaultEnabled: true },
      { id: 'unused-import-check', name: 'Unused Imports', description: 'Unused imports in JS/TS, Python, Go', category: 'code-quality', defaultEnabled: true },
      { id: 'circular-dependency-check', name: 'Circular Dependencies', description: 'Direct 2-node import cycle detection', category: 'code-quality', defaultEnabled: true },
      { id: 'magic-number-check', name: 'Magic Numbers', description: 'Unexplained numeric literals in code', category: 'code-quality', defaultEnabled: true },
      { id: 'console-log-check', name: 'Console Logs', description: 'Debug statements left in code across 8 languages', category: 'code-quality', defaultEnabled: true },
      { id: 'todo-fixme-check', name: 'TODO/FIXME', description: 'TODO, FIXME, HACK, XXX markers in added code', category: 'code-quality', defaultEnabled: true },
      { id: 'type-safety-check', name: 'Type Safety', description: 'TypeScript any, unsafe assertions, @ts-ignore', category: 'code-quality', defaultEnabled: true },
      { id: 'hardcoded-config-check', name: 'Hardcoded Config', description: 'Inline URLs, IPs, ports, connection strings', category: 'code-quality', defaultEnabled: true },
      { id: 'regex-dos-check', name: 'ReDoS', description: 'Regular expression denial of service patterns', category: 'code-quality', defaultEnabled: true },
    ],
  },
  {
    id: 'pr-quality',
    name: 'PR Quality',
    icon: '\u{1F4CB}',
    count: 4,
    checks: [
      {
        id: 'pr-size-check', name: 'PR Size', description: 'PR size classification (XS/S/M/L/XL) with line breakdown', category: 'pr-quality', defaultEnabled: true,
        options: [
          { key: 'warn_lines', label: 'Warning threshold (lines)', type: 'number', defaultValue: 300 },
          { key: 'max_lines', label: 'Max threshold (lines)', type: 'number', defaultValue: 500 },
        ],
      },
      { id: 'branch-name-check', name: 'Branch Name', description: 'Branch naming convention enforcement', category: 'pr-quality', defaultEnabled: true },
      { id: 'commit-message-check', name: 'Commit Messages', description: 'Conventional commit format validation', category: 'pr-quality', defaultEnabled: true },
      { id: 'test-file-check', name: 'Test Coverage', description: 'Check for missing test files when source files change', category: 'pr-quality', defaultEnabled: true },
    ],
  },
  {
    id: 'api',
    name: 'API',
    icon: '\u{1F517}',
    count: 1,
    checks: [
      { id: 'api-breaking-change-check', name: 'Breaking Changes', description: 'Endpoint removals, schema changes, method changes', category: 'api', defaultEnabled: true },
    ],
  },
  {
    id: 'build-deps',
    name: 'Build & Deps',
    icon: '\u{1F4E6}',
    count: 3,
    checks: [
      { id: 'lockfile-check', name: 'Lockfile Sync', description: 'Manifest/lockfile sync across 9 ecosystems', category: 'build-deps', defaultEnabled: true },
      { id: 'dependency-count-check', name: 'Dependency Count', description: 'Track new dependency additions per PR', category: 'build-deps', defaultEnabled: true },
      { id: 'package-json-check', name: 'Package JSON', description: 'JSON syntax, unpinned deps, missing fields', category: 'build-deps', defaultEnabled: true },
    ],
  },
  {
    id: 'files',
    name: 'Files & Encoding',
    icon: '\u{1F4C4}',
    count: 4,
    checks: [
      { id: 'large-file-check', name: 'Large Files', description: 'Files over 1 MB, binary files, archives', category: 'files', defaultEnabled: true },
      { id: 'encoding-check', name: 'Encoding', description: 'BOM, mixed line endings, control characters', category: 'files', defaultEnabled: true },
      { id: 'naming-convention-check', name: 'Naming Convention', description: 'Per-language file naming rule enforcement', category: 'files', defaultEnabled: true },
      { id: 'license-header-check', name: 'License Headers', description: 'Missing or inconsistent license headers', category: 'files', defaultEnabled: true },
    ],
  },
  {
    id: 'container',
    name: 'Container',
    icon: '\u{1F433}',
    count: 1,
    checks: [
      { id: 'dockerfile-check', name: 'Dockerfile', description: '12+ Dockerfile anti-patterns and security issues', category: 'container', defaultEnabled: true },
    ],
  },
  {
    id: 'env-db',
    name: 'Env & Database',
    icon: '\u{1F5C4}',
    count: 2,
    checks: [
      { id: 'env-diff-check', name: 'Env Diff', description: 'Environment variable file change detection', category: 'env-db', defaultEnabled: true },
      { id: 'migration-rollback-check', name: 'Migration Rollback', description: 'Missing rollback definitions in DB migrations', category: 'env-db', defaultEnabled: true },
    ],
  },
  {
    id: 'docs',
    name: 'Documentation',
    icon: '\u{1F4DD}',
    count: 2,
    checks: [
      { id: 'changelog-check', name: 'Changelog', description: 'Missing changelog updates for feat/fix PRs', category: 'docs', defaultEnabled: true },
      { id: 'path-alias-check', name: 'Path Aliases', description: 'Deep relative imports that should use path aliases', category: 'docs', defaultEnabled: true },
    ],
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: '\u{1F4CA}',
    count: 2,
    checks: [
      { id: 'health-dashboard', name: 'Health Dashboard', description: 'Weekly workflow health report as GitHub Issue', category: 'reports', defaultEnabled: true },
      { id: 'secret-rotation-reminder', name: 'Secret Rotation', description: 'Quarterly secret rotation checklist', category: 'reports', defaultEnabled: true },
    ],
  },
];

export const totalChecks = categories.reduce((sum, cat) => sum + cat.count, 0);
