import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { TokenShowcase } from './components/ui/token-showcase';
import { AdminLayout } from './pages/AdminLayout';
import { DashboardPage } from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';
import { UserManagementPage } from './pages/UserManagementPage';

const PAGE_TITLES = {
  dashboard: '대시보드',
  users: '사용자 관리',
} as const;

function AdminAppLayout({
  activePage,
  children,
}: {
  activePage: keyof typeof PAGE_TITLES;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();

  return (
    <AdminLayout
      activePage={activePage}
      onNavigate={(key) => navigate(key === 'users' ? '/users' : '/dashboard')}
      onGoHome={() => navigate('/')}
      pageTitle={PAGE_TITLES[activePage]}
    >
      {children}
    </AdminLayout>
  );
}

function TokenShowcasePage() {
  return (
    <div className="min-h-screen bg-surface-page">
      <div className="flex h-14 items-center justify-between border-b border-line bg-surface-card px-sec">
        <Link
          to="/"
          className="text-body-sm text-ink-secondary transition-colors hover:text-ink-primary"
        >
          홈으로 돌아가기
        </Link>
        <span className="text-body-md text-ink-primary">토큰 쇼케이스</span>
      </div>
      <TokenShowcase />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={
          <AdminAppLayout activePage="dashboard">
            <DashboardPage />
          </AdminAppLayout>
        }
      />
      <Route
        path="/users"
        element={
          <AdminAppLayout activePage="users">
            <UserManagementPage />
          </AdminAppLayout>
        }
      />
      <Route path="/tokens" element={<TokenShowcasePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
