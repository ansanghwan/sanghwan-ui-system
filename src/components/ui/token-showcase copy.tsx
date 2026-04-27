import * as React from 'react';
import { cn } from '../../lib/cn';

// ---- Color token row ------------------------------------------------

type SwatchItem = { label: string; value: string; className: string };

function SwatchRow({ items }: { items: SwatchItem[] }) {
  return (
    <div className="flex flex-wrap gap-comp-gap">
      {items.map(({ label, value, className }) => (
        <div key={label} className="flex flex-col items-start gap-2">
          <div className={cn('h-10 w-32 rounded-crd border border-line', className)} />
          <p className="text-list-ttl text-ink-primary">{label}</p>
          <p className="text-list-body text-ink-secondary font-mono">{value}</p>
        </div>
      ))}
    </div>
  );
}

// ---- Section wrapper ------------------------------------------------

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-comp-gap">
      <h2 className="text-sec-title text-ink-primary border-b border-line pb-2">{title}</h2>
      {children}
    </section>
  );
}

// ---- Sample stat card -----------------------------------------------

function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="bg-surface-card rounded-crd border border-line p-pad flex flex-col gap-2 min-w-[180px]">
      <p className="text-info-title text-ink-secondary">{label}</p>
      <p className="text-page-title text-ink-primary">{value}</p>
      <p className="text-body-sm text-ink-secondary">{delta}</p>
    </div>
  );
}

// ---- Main showcase --------------------------------------------------

export function TokenShowcase() {
  return (
    <div className="min-h-screen bg-surface-page p-lay">
      {/* Page header */}
      <header className="mb-sec">
        <p className="text-body-sm text-ink-secondary tracking-widest uppercase">
          BSS Admin · Design Token System
        </p>
        <h1 className="text-page-title text-ink-primary mt-1">
          Figma → CSS Variables → Tailwind
        </h1>
        <p className="text-body-md text-ink-secondary mt-2 max-w-prose">
          Figma Variables에 정의된 디자인 토큰이 CSS Custom Properties를 거쳐
          Tailwind 유틸리티 클래스로 연결되는 전체 체인을 시각화합니다.
        </p>
      </header>

      <div className="flex flex-col gap-sec">
        {/* Surface colors */}
        <Section title="01 Surface Colors">
          <p className="text-body-sm text-ink-secondary font-mono">
            bg-surface-page · bg-surface-card · bg-surface-subtle · bg-surface-primary
          </p>
          <SwatchRow
            items={[
              { label: 'surface-page',    value: '#F8FAFC', className: 'bg-surface-page' },
              { label: 'surface-card',    value: '#FFFFFF',  className: 'bg-surface-card' },
              { label: 'surface-subtle',  value: '#F1F5F9',  className: 'bg-surface-subtle' },
              { label: 'surface-primary', value: '#3B82F6',  className: 'bg-surface-primary' },
              { label: 'surface-success', value: '#F0FDF4',  className: 'bg-surface-success' },
              { label: 'surface-warning', value: '#FEFCE8',  className: 'bg-surface-warning' },
              { label: 'surface-error',   value: '#FEF2F2',  className: 'bg-surface-error' },
              { label: 'surface-info',    value: '#F0F9FF',  className: 'bg-surface-info' },
            ]}
          />
        </Section>

        {/* Text colors */}
        <Section title="02 Text Colors (ink)">
          <p className="text-body-sm text-ink-secondary font-mono">
            text-ink-primary · text-ink-secondary · text-ink-disabled · text-ink-inverse
          </p>
          <div className="flex flex-col gap-2">
            {[
              { cls: 'text-ink-primary',   label: 'ink-primary',   sample: '헤딩·주요 텍스트' },
              { cls: 'text-ink-secondary', label: 'ink-secondary',  sample: '서브·설명 텍스트' },
              { cls: 'text-ink-disabled',  label: 'ink-disabled',   sample: '비활성 텍스트' },
              { cls: 'text-ink-success',   label: 'ink-success',    sample: '성공 상태 텍스트' },
              { cls: 'text-ink-warning',   label: 'ink-warning',    sample: '경고 상태 텍스트' },
              { cls: 'text-ink-error',     label: 'ink-error',      sample: '오류 상태 텍스트' },
            ].map(({ cls, label, sample }) => (
              <div key={label} className="flex items-center gap-comp-gap">
                <span className={cn('text-body-md w-40', cls)}>{sample}</span>
                <span className="text-list-body text-ink-secondary font-mono">{cls}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section title="03 Typography Scale">
          <p className="text-body-sm text-ink-secondary font-mono">
            text-page-title · text-sec-title · text-info-title · text-body-md · text-body-sm
          </p>
          <div className="bg-surface-card rounded-crd border border-line p-pad flex flex-col gap-comp-gap">
            {[
              { cls: 'text-page-title',  label: 'page-title',  size: '28px / 700', sample: 'Dashboard Overview' },
              { cls: 'text-sec-title',   label: 'sec-title',   size: '20px / 600', sample: 'User Management' },
              { cls: 'text-info-title',  label: 'info-title',  size: '16px / 600', sample: '총 사용자 수' },
              { cls: 'text-body-md',     label: 'body-md',     size: '14px / 400', sample: '상세 설명 및 데이터 정보를 표시합니다.' },
              { cls: 'text-body-sm',     label: 'body-sm',     size: '12px / 400', sample: '2024.01.15 · updated 3 mins ago' },
              { cls: 'text-list-ttl',    label: 'list-ttl',    size: '14px / 500', sample: '김상환' },
              { cls: 'text-list-body',   label: 'list-body',   size: '12px / 400', sample: 'sanghwan@company.com' },
            ].map(({ cls, label, size, sample }) => (
              <div key={label} className="flex items-baseline gap-comp-gap flex-wrap">
                <span className={cn('text-ink-primary shrink-0', cls)}>{sample}</span>
                <span className="text-list-body text-ink-secondary font-mono shrink-0">
                  {cls} · {size}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Spacing & Radius */}
        <Section title="04 Spacing · Radius">
          <div className="flex flex-wrap gap-sec">
            {/* Spacing */}
            <div className="flex flex-col gap-comp-gap">
              <p className="text-info-title text-ink-primary">Spacing</p>
              {[
                { key: 'pad-sm',   px: '8px',  cls: 'w-2' },
                { key: 'pad',      px: '12px', cls: 'w-3' },
                { key: 'comp-gap', px: '16px', cls: 'w-4' },
                { key: 'sec',      px: '24px', cls: 'w-6' },
                { key: 'lay',      px: '32px', cls: 'w-8' },
              ].map(({ key, px, cls }) => (
                <div key={key} className="flex items-center gap-comp-gap">
                  <div className={cn('h-4 bg-action-primary rounded-sm', cls)} />
                  <span className="text-list-body text-ink-secondary font-mono">
                    {key} · {px}
                  </span>
                </div>
              ))}
            </div>

            {/* Radius */}
            <div className="flex flex-col gap-comp-gap">
              <p className="text-info-title text-ink-primary">Radius</p>
              {[
                { key: 'btn', px: '6px',    cls: 'rounded-btn' },
                { key: 'crd', px: '8px',    cls: 'rounded-crd' },
                { key: 'inp', px: '6px',    cls: 'rounded-inp' },
                { key: 'mdl', px: '12px',   cls: 'rounded-mdl' },
                { key: 'bdg', px: '9999px', cls: 'rounded-bdg' },
              ].map(({ key, px, cls }) => (
                <div key={key} className="flex items-center gap-comp-gap">
                  <div className={cn('h-8 w-16 bg-surface-subtle border border-line', cls)} />
                  <span className="text-list-body text-ink-secondary font-mono">
                    {key} · {px}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Sample component */}
        <Section title="05 Sample Component — Stat Cards">
          <p className="text-body-sm text-ink-secondary">
            위의 토큰들을 조합해 실제 컴포넌트를 구성한 예시입니다.
          </p>
          <div className="flex flex-wrap gap-comp-gap">
            <StatCard label="총 사용자"    value="1,234" delta="전월 대비 +12.5%" />
            <StatCard label="신규 가입"    value="89"    delta="지난주 대비 +5.2%" />
            <StatCard label="활성 세션"    value="342"   delta="현재 접속 중" />
            <StatCard label="오류 발생"    value="7"     delta="최근 24시간 기준" />
          </div>

          {/* Primary button using action token */}
          <div className="mt-comp-gap">
            <button
              className={cn(
                'bg-action-primary text-ink-inverse text-body-md',
                'px-pad py-pad-sm rounded-btn',
                'hover:bg-action-primary-hover transition-colors',
              )}
            >
              상세 보기
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
}
