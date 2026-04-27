import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { HelperText, PageTitle, SectionSubtitle } from '../components/ui/heading';

const PREVIEW_LIST: Array<{
  key: 'dashboard' | 'tokens' | 'portfolio';
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  href: string;
  external?: boolean;
  ctaLabel?: string;
  extraLink?: {
    label: string;
    href: string;
  };
  secondaryCtaLabel?: string;
}> = [
  {
    key: 'dashboard',
    eyebrow: 'Sample Page 01',
    title: 'Dashboard',
    description:
      '사이드바, 상단 검색, 통계 카드, 차트 영역, 최근 가입 리스트를 포함한 관리자 메인 화면입니다.',
    note: '대시보드 안에서 사용자 관리 화면까지 함께 확인할 수 있습니다.',
    href: '/dashboard',
    ctaLabel: 'dashboard',
  },
  {
    key: 'tokens',
    eyebrow: 'Foundation',
    title: 'Token Showcase',
    description:
      '색상, 타이포그래피, 폼, 탭, 다이얼로그, 테이블, 토스트까지 현재 디자인 시스템을 한 번에 확인하는 페이지입니다.',
    note: '컴포넌트 상태와 토큰 적용 결과를 빠르게 점검하기 좋은 화면입니다.',
    href: '/tokens',
    ctaLabel: 'Token View',
    extraLink: {
      label: 'Storybook',
      href: 'https://sanghwan-ui-system-storybook.netlify.app/',
    },
    secondaryCtaLabel: 'Storybook',
  },
  {
    key: 'portfolio',
    eyebrow: 'Archive',
    title: 'Web Publisher Portfolio',
    description:
      'UI 시스템 외에 제가 진행했던 프로젝트와 자기소개를 확인할 수 있는 웹퍼블리셔 포트폴리오입니다.',
    note: '기존 퍼블리싱 프로젝트와 작업 이력을 함께 정리한 별도 포트폴리오입니다.',
    href: 'https://sanghwan-portfolio.netlify.app/',
    external: true,
    ctaLabel: 'portfolio',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-surface-page px-sec py-lay">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-lay">
        <header className="flex flex-col gap-comp-gap">
          <HelperText className="tracking-[0.18em] uppercase text-ink-secondary">
            Sanghwan UI System
          </HelperText>
          <PageTitle>Admin Design System Preview</PageTitle>
          <p className="max-w-3xl text-body-md text-ink-secondary">
            스토리북과 별도로, 실제 관리자 화면 맥락에서 디자인 시스템이 어떻게 조합되는지 바로
            확인할 수 있도록 구성한 페이지입니다.
            <br /> 아래 리스트의 버튼을 클릭해 각 화면을 확인해 주세요.
          </p>
        </header>

        <Card className="bg-surface-card">
          <CardContent className="p-0">
            <ul className="divide-y divide-line">
              {PREVIEW_LIST.map((item) => (
                <li key={item.key} className="py-sec">
                  <div className="flex flex-col gap-comp-gap md:flex-row md:items-stretch md:justify-between">
                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-pad-sm">
                        <Badge variant="outline">{item.eyebrow}</Badge>
                      </div>

                      <div className="flex flex-1 flex-col gap-2">
                        <SectionSubtitle className="text-ink-primary">{item.title}</SectionSubtitle>
                        <p className="text-body-md text-ink-secondary">{item.description}</p>
                        <HelperText>{item.note}</HelperText>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-end gap-pad-sm md:pl-sec">
                      {item.external ? (
                        <a href={item.href} target="_blank" rel="noreferrer">
                          <Button>{item.ctaLabel ?? '페이지 열기'}</Button>
                        </a>
                      ) : (
                        <Link to={item.href}>
                          <Button>{item.ctaLabel ?? '페이지 열기'}</Button>
                        </Link>
                      )}

                      {item.extraLink ? (
                        <a href={item.extraLink.href} target="_blank" rel="noreferrer">
                          <Button>{item.secondaryCtaLabel ?? item.extraLink.label}</Button>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <section className="rounded-crd border border-line bg-surface-card p-lay">
          <SectionSubtitle>What this project shows</SectionSubtitle>
          <ul className="mt-comp-gap grid gap-pad-sm text-body-md text-ink-secondary md:grid-cols-2">
            <li>React + TypeScript 기반 컴포넌트 설계</li>
            <li>Figma token을 CSS variable과 Tailwind utility로 매핑</li>
            <li>Storybook으로 상태와 사용 예시 문서화</li>
            <li>실제 BSS 관리자 화면 맥락의 샘플 페이지 구성</li>
          </ul>
        </section>

        <footer className="flex flex-col gap-pad-sm border-t border-line pt-sec text-body-md text-ink-secondary md:flex-row md:items-center md:justify-between">
          <p>Sanghwan UI System · Portfolio Project</p>
          <a
            href="https://github.com/ansanghwan/sanghwan-ui-system"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-action-primary transition-colors hover:text-action-primary-hover"
          >
            GitHub Repository
          </a>
        </footer>
      </div>
    </div>
  );
}
