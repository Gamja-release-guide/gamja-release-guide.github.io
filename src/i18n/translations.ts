export type Locale = 'en' | 'ko';

export interface Translations {
  lang: string;
  dir: string;
  nav: {
    output: string;
    features: string;
    playground: string;
    roadmap: string;
    github: string;
  };
  hero: {
    badge: string;
    title: string;
    titleBreak: string;
    desc: string;
    cta: string;
    ctaSecondary: string;
    terminalTitle: string;
    terminalComment1: string;
    terminalComment2: string;
  };
  install: {
    title: string;
    desc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  output: {
    title: string;
    desc: string;
    botName: string;
    botLabel: string;
    timeAgo: string;
    resultTitle: string;
    summaryBadge: string;
    criticalLabel: string;
    warningLabel: string;
    passedLabel: string;
    infoLabel: string;
    critDetail: string;
    critAction: string;
    warnDetail: string;
    warnAction: string;
    infoDetail: string;
    footerText: string;
  };
  features: {
    title: string;
    desc: string;
    languageTitle: string;
    languageDesc: string;
  };
  playground: {
    title: string;
    desc: string;
    yamlPreview: string;
    copy: string;
    copied: string;
    enabled: string;
    disabled: string;
  };
  roadmap: {
    title: string;
    desc: string;
    v1Header: string;
    v2Header: string;
    v1Items: string[];
  };
  footer: {
    tagline: string;
    project: string;
    resources: string;
    contributing: string;
    license: string;
    copyright: string;
  };
  langSwitch: {
    label: string;
    current: string;
    other: string;
    otherHref: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    lang: 'en',
    dir: 'ltr',
    nav: {
      output: 'Output',
      features: 'Features',
      playground: 'Playground',
      roadmap: 'Roadmap',
      github: 'GitHub',
    },
    hero: {
      badge: 'Open Source · Zero Dependencies · Free',
      title: 'Every PR, automatically',
      titleBreak: 'checked for what matters.',
      desc: 'Release Guard is a drop-in collection of GitHub Actions workflows that scans every pull request for security vulnerabilities, code quality issues, and operational risks. 40+ checks, pure bash, no external services.',
      cta: 'Get Started',
      ctaSecondary: 'Try Playground',
      terminalTitle: 'release-guard.yml',
      terminalComment1: '# PR opened → 40+ checks run automatically',
      terminalComment2: '# Results posted as PR comments with severity + fix suggestions',
    },
    install: {
      title: 'Get started in three steps',
      desc: 'No npm install, no API keys, no paid plans. Copy the workflows into your repo and every PR gets checked automatically.',
      step1Title: 'Copy workflows',
      step1Desc: 'Clone the .github/workflows/ and .github/actions/ directories into your repository.',
      step2Title: 'Configure (optional)',
      step2Desc: 'Create .release-guard.yml in your repo root to enable/disable checks and set thresholds.',
      step3Title: 'Open a PR',
      step3Desc: "That's it. Release Guard runs on every pull request and posts findings as PR comments with severity levels and fix suggestions.",
    },
    output: {
      title: 'What Your Team Sees',
      desc: 'Release Guard posts a structured comment on every PR. Results are grouped by severity so reviewers know exactly where to look.',
      botName: 'release-guard',
      botLabel: 'bot',
      timeAgo: 'commented 2 minutes ago',
      resultTitle: 'Release Guard Check Results',
      summaryBadge: '6 checks · 1 critical · 1 warning',
      criticalLabel: 'Critical',
      warningLabel: 'Warning',
      passedLabel: 'Passed',
      infoLabel: 'Info',
      critDetail: 'Possible API key found in src/config.ts:24',
      critAction: 'Rotate this secret immediately.',
      warnDetail: 'PR is Large -- +847 lines changed (threshold: 500)',
      warnAction: 'Consider splitting into smaller PRs for easier review.',
      infoDetail: 'Dashboard updated at /reports/week-38',
      footerText: 'Powered by release-guard v1.0 · Customize in .release-guard.yml',
    },
    features: {
      title: 'What gets checked',
      desc: 'checks across 10 categories. Every check is configurable, and you can disable any of them.',
      languageTitle: 'Language Support',
      languageDesc: 'Checks work across all major languages and frameworks.',
    },
    playground: {
      title: 'Config Builder',
      desc: 'Toggle the checks you need. Copy the generated YAML into your repo.',
      yamlPreview: 'YAML Preview',
      copy: 'Copy',
      copied: 'Copied!',
      enabled: 'Enabled',
      disabled: 'Disabled',
    },
    roadmap: {
      title: 'Roadmap',
      desc: 'Release Guard v1 ships with 40+ checks. Here\'s what\'s coming in v2.',
      v1Header: 'v1 -- Shipped',
      v2Header: 'v2 -- In Progress',
      v1Items: [
        '40+ automated checks',
        '10 categories (Security, Code Quality, PR, API, Build, Files, Container, Env, Docs, Reports)',
        'Per-check config via .release-guard.yml',
        'Slack & Discord notifications',
        'Weekly health dashboard',
        'One-command install script',
        '9+ language support',
      ],
    },
    footer: {
      tagline: 'Automated PR safety checks for GitHub repositories.',
      project: 'Project',
      resources: 'Resources',
      contributing: 'Contributing',
      license: 'MIT License',
      copyright: 'Gamja Lab. Open source under MIT.',
    },
    langSwitch: {
      label: 'Language',
      current: 'EN',
      other: 'KO',
      otherHref: '/ko/',
    },
  },
  ko: {
    lang: 'ko',
    dir: 'ltr',
    nav: {
      output: '결과',
      features: '기능',
      playground: '플레이그라운드',
      roadmap: '로드맵',
      github: 'GitHub',
    },
    hero: {
      badge: '오픈 소스 · 외부 의존성 제로 · 무료',
      title: '모든 PR을, 자동으로',
      titleBreak: '중요한 것만 체크합니다.',
      desc: 'Release Guard는 모든 Pull Request에서 보안 취약점, 코드 품질 문제, 운영 위험을 자동으로 스캔하는 GitHub Actions 워크플로 모음입니다. 40개 이상의 체크, 순수 bash, 외부 서비스 불필요.',
      cta: '시작하기',
      ctaSecondary: '플레이그라운드',
      terminalTitle: 'release-guard.yml',
      terminalComment1: '# PR 열림 → 40개 이상의 체크가 자동 실행',
      terminalComment2: '# 결과는 심각도와 수정 제안과 함께 PR 코멘트로 게시',
    },
    install: {
      title: '세 단계로 시작하세요',
      desc: 'npm install 필요 없음, API 키 필요 없음, 유료 플랜 필요 없음. 워크플로를 복사하면 모든 PR이 자동으로 체크됩니다.',
      step1Title: '워크플로 복사',
      step1Desc: '.github/workflows/ 와 .github/actions/ 디렉토리를 레포지토리에 복사합니다.',
      step2Title: '설정 (선택사항)',
      step2Desc: '레포 루트에 .release-guard.yml을 생성하여 체크를 활성화/비활성화하고 임계값을 설정합니다.',
      step3Title: 'PR 열기',
      step3Desc: '끝입니다. Release Guard가 모든 Pull Request에서 실행되고 심각도와 수정 제안과 함께 PR 코멘트로 결과를 게시합니다.',
    },
    output: {
      title: '팀이 보는 화면',
      desc: 'Release Guard는 모든 PR에 구조화된 코멘트를 게시합니다. 결과는 심각도별로 그룹화되어 리뷰어가 정확히 어디를 봐야 하는지 알 수 있습니다.',
      botName: 'release-guard',
      botLabel: 'bot',
      timeAgo: '2분 전 코멘트',
      resultTitle: 'Release Guard 체크 결과',
      summaryBadge: '6개 체크 · 1 심각 · 1 경고',
      criticalLabel: '심각',
      warningLabel: '경고',
      passedLabel: '통과',
      infoLabel: '정보',
      critDetail: 'src/config.ts:24에서 API 키 발견',
      critAction: '이 시크릿을 즉시 회전(rotate)하세요.',
      warnDetail: 'PR 크기 Large -- +847줄 변경 (임계값: 500)',
      warnAction: '더 쉬운 리뷰를 위해 작은 PR로 분할을 고려하세요.',
      infoDetail: '대시보드가 /reports/week-38에 업데이트됨',
      footerText: 'release-guard v1.0 · .release-guard.yml에서 커스터마이즈',
    },
    features: {
      title: '무엇을 체크하나요',
      desc: '10개 카테고리에 걸친 체크들. 모든 체크는 설정 가능하며, 원하지 않는 것은 비활성화할 수 있습니다.',
      languageTitle: '언어 지원',
      languageDesc: '모든 주요 언어와 프레임워크에서 동작합니다.',
    },
    playground: {
      title: '설정 빌더',
      desc: '필요한 체크를 토글하세요. 생성된 YAML을 레포에 복사하면 됩니다.',
      yamlPreview: 'YAML 미리보기',
      copy: '복사',
      copied: '복사됨!',
      enabled: '활성화',
      disabled: '비활성화',
    },
    roadmap: {
      title: '로드맵',
      desc: 'Release Guard v1은 40개 이상의 체크와 함께 출시되었습니다. v2에서 추가될 기능입니다.',
      v1Header: 'v1 -- 출시 완료',
      v2Header: 'v2 -- 개발 중',
      v1Items: [
        '40개 이상의 자동화된 체크',
        '10개 카테고리 (보안, 코드 품질, PR, API, 빌드, 파일, 컨테이너, 환경, 문서, 보고서)',
        '.release-guard.yml을 통한 체크별 설정',
        'Slack & Discord 알림',
        '주간 건강 대시보드',
        '한 번의 명령어로 설치',
        '9개 이상의 언어 지원',
      ],
    },
    footer: {
      tagline: 'GitHub 레포지토리를 위한 자동화 PR 안전 체크.',
      project: '프로젝트',
      resources: '리소스',
      contributing: '기여 가이드',
      license: 'MIT 라이선스',
      copyright: 'Gamja Lab. MIT 라이선스 오픈 소스.',
    },
    langSwitch: {
      label: '언어',
      current: 'KO',
      other: 'EN',
      otherHref: '/',
    },
  },
};

export function t(locale: Locale): Translations {
  return translations[locale];
}
