import * as React from 'react';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Checkbox } from './checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { HelperText, PageTitle, SectionSubtitle, SectionTitle } from './heading';
import { Input } from './input';
import { Pagination, PaginationItem, PaginationList } from './pagination';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Table, TableBody, TableCell, TableHeader, TableRow } from './table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Textarea } from './textarea';
import { Toast, ToastDescription, ToastTitle } from './toast';
import { cn } from '../../lib/cn';

type SwatchItem = { label: string; value: string; className: string };

function SwatchRow({ items }: { items: SwatchItem[] }) {
  return (
    <div className="flex flex-wrap gap-comp-gap">
      {items.map(({ label, value, className }) => (
        <div key={label} className="flex flex-col items-start gap-2">
          <div className={cn('h-12 w-36 rounded-crd border border-line', className)} />
          <p className="text-list-ttl text-ink-primary">{label}</p>
          <p className="font-mono text-list-body text-ink-secondary">{value}</p>
        </div>
      ))}
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-comp-gap">
      <div className="flex flex-col gap-2">
        <SectionTitle className="border-b border-line pb-2 text-ink-primary">{title}</SectionTitle>
        {description ? <p className="text-body-md text-ink-secondary">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function StatCard({
  label,
  value,
  delta,
  badge,
}: {
  label: string;
  value: string;
  delta: string;
  badge: string;
}) {
  return (
    <Card className="min-w-[220px] bg-surface-card">
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between gap-4">
          <CardDescription className="text-info-title text-ink-secondary">{label}</CardDescription>
          <Badge variant="outline">{badge}</Badge>
        </div>
        <CardTitle className="text-page-title text-ink-primary">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body-md text-ink-secondary">{delta}</p>
      </CardContent>
    </Card>
  );
}

export function TokenShowcase() {
  return (
    <div className="min-h-screen bg-surface-page p-lay">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-lay">
        <header className="flex flex-col gap-comp-gap">
          <HelperText className="tracking-[0.18em] uppercase text-ink-secondary">
            BSS Admin Design System
          </HelperText>
          <PageTitle>Figma Tokens to CSS Variables to Tailwind Utilities</PageTitle>
          <p className="max-w-3xl text-body-md text-ink-secondary">
            피그마에서 정의한 semantic token을 CSS variable과 Tailwind utility로 연결한 관리자 UI
            샘플입니다. 아래에서 색상, 타이포그래피, 입력 컴포넌트, 피드백 컴포넌트, 데이터
            컴포넌트가 실제로 어떻게 조합되는지 확인할 수 있습니다.
          </p>
        </header>

        <Section
          title="01. Surface and Status Colors"
          description="페이지, 카드, 상태 배경에 사용하는 semantic color token 예시입니다."
        >
          <SwatchRow
            items={[
              {
                label: 'surface-page',
                value: 'var(--color-bg-page)',
                className: 'bg-surface-page',
              },
              {
                label: 'surface-card',
                value: 'var(--color-bg-surface)',
                className: 'bg-surface-card',
              },
              {
                label: 'surface-subtle',
                value: 'var(--color-bg-subtle)',
                className: 'bg-surface-subtle',
              },
              {
                label: 'surface-primary',
                value: 'var(--color-bg-primary)',
                className: 'bg-surface-primary',
              },
              {
                label: 'surface-success',
                value: 'var(--color-bg-success)',
                className: 'bg-surface-success',
              },
              {
                label: 'surface-warning',
                value: 'var(--color-bg-warning)',
                className: 'bg-surface-warning',
              },
              {
                label: 'surface-error',
                value: 'var(--color-bg-error)',
                className: 'bg-surface-error',
              },
              {
                label: 'surface-info',
                value: 'var(--color-bg-info)',
                className: 'bg-surface-info',
              },
            ]}
          />
        </Section>

        <Section
          title="02. Typography and Summary Cards"
          description="페이지 타이틀, 섹션 타이틀, 정보 타이틀과 카드 조합 예시입니다."
        >
          <Card className="bg-surface-card">
            <CardContent className="pt-sec flex flex-col gap-comp-gap">
              <PageTitle>페이지 타이틀 — Dashboard Overview</PageTitle>
              <SectionTitle>섹션 타이틀 — User Management</SectionTitle>
              <SectionSubtitle>정보 타이틀 — 총 사용자 수</SectionSubtitle>
              <p className="text-body-md text-ink-primary">
                본문 텍스트 — 상세 설명 및 데이터 정보를 표시합니다.
              </p>
              <HelperText>보조 텍스트 — 2024.01.15 · updated 3 mins ago</HelperText>
            </CardContent>
          </Card>

          <div className="grid gap-comp-gap md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="총 사용자 수" value="1,234" delta="전월 대비 +12.5%" badge="Active" />
            <StatCard label="신규 가입" value="89" delta="지난주 대비 +5.2%" badge="Weekly" />
            <StatCard label="활성 세션" value="342" delta="현재 접속 중" badge="Live" />
            <StatCard label="오류 발생" value="7" delta="최근 24시간 기준" badge="QA" />
          </div>
        </Section>

        <Section
          title="03. Form Controls"
          description="실제 관리자 화면에서 자주 같이 사용하는 입력 조합입니다."
        >
          <Card className="bg-surface-card">
            <CardHeader>
              <CardTitle>Token Group Editor</CardTitle>
              <CardDescription>
                새 토큰 그룹을 만들고 카테고리, 설명, 공개 여부를 한 번에 설정합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-sec md:grid-cols-2">
              <div className="flex flex-col gap-comp-gap">
                <div className="flex flex-col gap-2">
                  <label className="text-list-ttl text-ink-primary">Group name</label>
                  <Input placeholder="e.g. foundation.colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-list-ttl text-ink-primary">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="color">Color</SelectItem>
                      <SelectItem value="spacing">Spacing</SelectItem>
                      <SelectItem value="radius">Radius</SelectItem>
                      <SelectItem value="typography">Typography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-list-ttl text-ink-primary">Visibility</label>
                  <RadioGroup defaultValue="shared" className="gap-comp-gap">
                    <label className="flex cursor-pointer items-center gap-pad-sm text-body-md text-ink-primary">
                      <RadioGroupItem value="shared" />
                      <span className="cursor-pointer">Shared</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-pad-sm text-body-md text-ink-primary">
                      <RadioGroupItem value="private" />
                      <span className="cursor-pointer">Private</span>
                    </label>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex flex-col gap-comp-gap">
                <div className="flex flex-col gap-2">
                  <label className="text-list-ttl text-ink-primary">Description</label>
                  <Textarea placeholder="토큰 사용 맥락과 적용 범위를 입력합니다." />
                </div>
                <label className="flex cursor-pointer items-center gap-pad-sm text-body-md text-ink-primary">
                  <Checkbox aria-label="Publish in next release" />
                  <span className="cursor-pointer">다음 릴리스에 포함</span>
                </label>
                <div className="flex flex-wrap items-center gap-comp-gap">
                  <Button>저장</Button>
                  <Button variant="outline">임시 저장</Button>
                  <Button variant="ghost">취소</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section
          title="04. Dialog"
          description="입력 액션을 위한 모달 예시입니다. 버튼을 눌러 열림 상태를 확인할 수 있습니다."
        >
          <Card className="max-w-[560px] bg-surface-card">
            <CardHeader>
              <CardTitle>Create Token Group</CardTitle>
              <CardDescription>
                관리자 화면에서는 추가, 수정, 확인 작업을 모달로 분리하는 경우가 많습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-comp-gap">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>모달 열기</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>새 토큰 그룹 추가</DialogTitle>
                    <DialogDescription>
                      토큰 그룹 이름과 카테고리를 먼저 등록하고, 이후 토큰을 추가로 연결할 수
                      있습니다.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-comp-gap grid gap-comp-gap">
                    <Input placeholder="Group name" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="카테고리 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="color">Color</SelectItem>
                        <SelectItem value="spacing">Spacing</SelectItem>
                        <SelectItem value="radius">Radius</SelectItem>
                        <SelectItem value="typography">Typography</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="ghost">닫기</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button>추가</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant="outline">보조 액션</Button>
            </CardContent>
          </Card>
        </Section>

        <Section title="05. Tabs" description="그룹화된 내용을 빠르게 전환하는 탭 예시입니다.">
          <Tabs defaultValue="overview" className="w-full max-w-[720px]">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="qa">QA</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              현재 디자인 시스템은 관리자 화면 기준의 기본 컴포넌트를 중심으로 구성되어 있습니다.
            </TabsContent>
            <TabsContent value="tokens">
              semantic color, spacing, radius, typography token이 globals.css와 Tailwind theme를
              통해 연결됩니다.
            </TabsContent>
            <TabsContent value="qa">
              스토리북과 샘플 화면에서 disabled 상태, hover 색상, 텍스트 대비를 마지막에 점검합니다.
            </TabsContent>
          </Tabs>
        </Section>

        <Section
          title="06. Table"
          description="Badge와 함께 데이터 유형의 관리자 리스트를 표현하는 예시입니다."
        >
          <Table>
            <TableHeader>
              <TableCell>Token</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">color.bg.page</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>
                  <Badge>Active</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">spacing.component.gap</TableCell>
                <TableCell>Spacing</TableCell>
                <TableCell>
                  <Badge variant="outline">Draft</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">radius.modal</TableCell>
                <TableCell>Radius</TableCell>
                <TableCell>
                  <Badge variant="muted">Synced</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        <Section
          title="07. Pagination"
          description="목록형 화면 아래에 배치하는 기본 페이지네이션 예시입니다."
        >
          <Pagination className="justify-start">
            <PaginationList>
              <PaginationItem aria-label="Previous page">{'<'}</PaginationItem>
              <PaginationItem isActive>1</PaginationItem>
              <PaginationItem>2</PaginationItem>
              <PaginationItem>3</PaginationItem>
              <PaginationItem aria-label="Next page">{'>'}</PaginationItem>
            </PaginationList>
          </Pagination>
        </Section>

        <Section title="08. Alert and Toast" description="상태 피드백과 비침투성 알림 예시입니다.">
          <div className="grid gap-sec lg:grid-cols-2">
            <Alert className="bg-surface-card">
              <AlertTitle>Publish blocked</AlertTitle>
              <AlertDescription>
                semantic alias 한 개가 비어 있어서 Storybook build 전에 먼저 수정이 필요합니다.
              </AlertDescription>
            </Alert>

            <Toast>
              <ToastTitle>Saved successfully</ToastTitle>
              <ToastDescription>
                Token aliases were updated and synced to the preview.
              </ToastDescription>
            </Toast>
          </div>

          <div className="flex flex-wrap items-center gap-comp-gap">
            <Badge>Active</Badge>
            <Badge variant="outline">Draft</Badge>
            <Badge variant="muted">Synced</Badge>
            <Badge variant="destructive">Blocked</Badge>
          </div>
        </Section>
      </div>
    </div>
  );
}
