import * as React from 'react';
import { cn } from '../lib/cn';

const NAV_ITEMS = [
  { label: '대시보드', key: 'dashboard' },
  { label: '사용자 관리', key: 'users' },
  { label: '콘텐츠', key: 'content' },
  { label: '통계', key: 'stats' },
  { label: '설정', key: 'settings' },
] as const;

interface AdminLayoutProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onGoHome?: () => void;
  pageTitle: string;
  children: React.ReactNode;
}

export function AdminLayout({
  activePage,
  onNavigate,
  onGoHome,
  pageTitle,
  children,
}: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-surface-page">
      <aside className="flex w-[220px] shrink-0 flex-col border-r border-line bg-surface-card">
        <button
          type="button"
          onClick={onGoHome}
          className="flex h-16 items-center gap-pad border-b border-line px-pad text-left"
        >
          <div className="h-7 w-7 rounded-btn bg-action-primary" />
          <span className="text-info-title text-ink-primary">AdminBSS</span>
        </button>

        <nav className="flex flex-col gap-1 p-3">
          {NAV_ITEMS.map(({ label, key }) => {
            const isActive = activePage === key;
            const isClickable = key === 'dashboard' || key === 'users';

            return (
              <button
                key={key}
                type="button"
                onClick={() => isClickable && onNavigate(key)}
                className={cn(
                  'flex w-full items-center gap-pad-sm rounded-btn px-pad py-pad-sm text-left text-body-md transition-colors',
                  isActive
                    ? 'bg-surface-primary text-ink-inverse'
                    : isClickable
                      ? 'text-ink-secondary hover:bg-surface-subtle hover:text-ink-primary'
                      : 'cursor-default text-ink-disabled',
                )}
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 shrink-0 rounded-full',
                    isActive ? 'bg-ink-inverse' : 'bg-ink-disabled',
                  )}
                />
                {label}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-line bg-surface-card px-sec">
          <span className="text-sec-title text-ink-primary">{pageTitle}</span>
          <div className="flex items-center gap-pad">
            <div className="flex h-9 w-[200px] items-center gap-pad-sm rounded-inp border border-line bg-surface-page px-pad-sm text-body-md text-ink-disabled">
              <span aria-hidden="true">&#128269;</span>
              검색...
            </div>
            <div className="h-9 w-9 shrink-0 rounded-full border border-line bg-surface-subtle" />
          </div>
        </header>

        <main className="flex-1 overflow-auto p-sec">{children}</main>
      </div>
    </div>
  );
}
