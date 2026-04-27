import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const STAT_CARDS = [
  { label: '총 사용자', value: '12,483', change: '+12.5%', up: true },
  { label: '월간 매출', value: '₩284.9M', change: '-3.2%', up: false },
  { label: '신규 가입', value: '1,284', change: '+8.1%', up: true },
  { label: '활성 세션', value: '3,421', change: '+2.4%', up: true },
];

const RECENT_SIGNUPS = [
  { name: '김민준', email: 'minjun@co.com', time: '방금 전' },
  { name: '이수진', email: 'soojin@co.com', time: '5분 전' },
  { name: '박지원', email: 'jiwon@co.com', time: '23분 전' },
  { name: '최현우', email: 'hyunwoo@co.com', time: '1시간 전' },
];

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-sec">
      {/* Breadcrumb */}
      <div className="flex items-center gap-pad-sm text-body-sm text-ink-secondary">
        <span>홈</span>
        <span>/</span>
        <span className="text-ink-primary">대시보드</span>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-comp-gap">
        {STAT_CARDS.map(({ label, value, change, up }) => (
          <Card key={label}>
            <CardHeader>
              <CardDescription>{label}</CardDescription>
              <CardTitle className="text-sec-title">{value}</CardTitle>
            </CardHeader>
            <CardContent>
              <span
                className={
                  up ? 'text-body-sm text-ink-success' : 'text-body-sm text-ink-error'
                }
              >
                {change} 전월 대비
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + Recent signups */}
      <div className="grid grid-cols-[1fr_320px] gap-comp-gap">
        {/* Chart placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>월간 사용자 추이</CardTitle>
            <CardDescription>최근 12개월</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-52 items-end gap-2">
              {[40, 55, 45, 60, 52, 70, 65, 80, 72, 88, 76, 95].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-sm bg-action-primary opacity-80 transition-all"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-body-sm text-ink-disabled">
              {['5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월', '3월', '4월'].map(
                (m) => (
                  <span key={m}>{m}</span>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent signups */}
        <Card>
          <CardHeader>
            <CardTitle>최근 가입</CardTitle>
            <CardDescription>오늘 신규 가입자</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col divide-y divide-line">
              {RECENT_SIGNUPS.map(({ name, email, time }) => (
                <li key={email} className="flex items-center justify-between py-pad-sm">
                  <div className="flex items-center gap-pad-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-primary text-body-sm text-ink-inverse">
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-body-md text-ink-primary">{name}</p>
                      <p className="text-body-sm text-ink-secondary">{email}</p>
                    </div>
                  </div>
                  <Badge variant="muted">{time}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
