import * as React from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableCell } from '../components/ui/table';
import { Pagination, PaginationList, PaginationItem } from '../components/ui/pagination';

type Role = '관리자' | '편집자' | '뷰어';
type Status = 'Active' | 'Inactive' | 'Pending';

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  status: Status;
  joinDate: string;
  lastLogin: string;
}

const USERS: User[] = [
  { id: 1, name: '김상환', email: 'sanghwan@co.com', role: '관리자', status: 'Active', joinDate: '2024-01-15', lastLogin: '방금 전' },
  { id: 2, name: '이지영', email: 'jiyeong@co.com', role: '편집자', status: 'Active', joinDate: '2024-03-22', lastLogin: '2시간 전' },
  { id: 3, name: '박민준', email: 'minjun@co.com', role: '뷰어', status: 'Inactive', joinDate: '2023-11-08', lastLogin: '30일 전' },
  { id: 4, name: '최수현', email: 'soohyun@co.com', role: '편집자', status: 'Pending', joinDate: '2024-04-25', lastLogin: '미로그인' },
  { id: 5, name: '정우진', email: 'woojin@co.com', role: '뷰어', status: 'Active', joinDate: '2024-02-10', lastLogin: '1일 전' },
];

const STATUS_VARIANT: Record<Status, 'primary' | 'muted' | 'destructive' | 'outline'> = {
  Active: 'primary',
  Inactive: 'muted',
  Pending: 'outline',
};

const STATUS_LABEL: Record<Status, string> = {
  Active: '활성',
  Inactive: '비활성',
  Pending: '대기',
};

export function UserManagementPage() {
  const [search, setSearch] = React.useState('');
  const [roleFilter, setRoleFilter] = React.useState('all');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [currentPage, setCurrentPage] = React.useState(1);

  const filtered = USERS.filter((u) => {
    const matchSearch =
      search === '' ||
      u.name.includes(search) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    const matchStatus = statusFilter === 'all' || u.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  function handleReset() {
    setSearch('');
    setRoleFilter('all');
    setStatusFilter('all');
  }

  return (
    <div className="flex flex-col gap-sec">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-sec-title text-ink-primary">사용자 관리</h1>
          <p className="mt-1 text-body-sm text-ink-secondary">총 12,483명의 사용자</p>
        </div>
        <Button variant="primary" size="md">
          + 사용자 초대
        </Button>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-pad">
        <Input
          className="w-[240px]"
          placeholder="이름 또는 이메일 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="역할" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체 역할</SelectItem>
            <SelectItem value="관리자">관리자</SelectItem>
            <SelectItem value="편집자">편집자</SelectItem>
            <SelectItem value="뷰어">뷰어</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="상태" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체 상태</SelectItem>
            <SelectItem value="Active">활성</SelectItem>
            <SelectItem value="Inactive">비활성</SelectItem>
            <SelectItem value="Pending">대기</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          초기화
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader
          className="grid-cols-[1.5fr_1.8fr_1fr_100px_120px_120px_80px]"
        >
          <TableCell>이름</TableCell>
          <TableCell>이메일</TableCell>
          <TableCell>역할</TableCell>
          <TableCell>상태</TableCell>
          <TableCell>가입일</TableCell>
          <TableCell>최근 로그인</TableCell>
          <TableCell />
        </TableHeader>
        <TableBody>
          {filtered.map((user) => (
            <TableRow
              key={user.id}
              className="grid-cols-[1.5fr_1.8fr_1fr_100px_120px_120px_80px]"
            >
              <TableCell>
                <div className="flex items-center gap-pad-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-primary text-body-sm text-ink-inverse">
                    {user.name[0]}
                  </div>
                  <span className="truncate">{user.name}</span>
                </div>
              </TableCell>
              <TableCell className="truncate text-ink-secondary">{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge variant={STATUS_VARIANT[user.status]}>
                  {STATUS_LABEL[user.status]}
                </Badge>
              </TableCell>
              <TableCell className="text-ink-secondary">{user.joinDate}</TableCell>
              <TableCell className="text-ink-secondary">{user.lastLogin}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="min-w-0 px-pad-sm">
                  편집
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-body-sm text-ink-secondary">
          총 12,483명 중 1–5 표시
        </p>
        <Pagination>
          <PaginationList>
            <PaginationItem onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
              ‹
            </PaginationItem>
            {[1, 2, 3].map((page) => (
              <PaginationItem
                key={page}
                isActive={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationItem>
            ))}
            <PaginationItem onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}>
              ›
            </PaginationItem>
          </PaginationList>
        </Pagination>
      </div>
    </div>
  );
}
