# Sanghwan UI System

React + TypeScript 기반의 관리자 UI 디자인 시스템 포트폴리오 프로젝트입니다.  
Tailwind CSS, semantic token, Storybook 문서화 흐름을 학습하고 실제 화면 조합까지 연결하는 것을 목표로 구성했습니다.

## Overview

이 프로젝트는 BSS(PC 관리자) 맥락을 기준으로 다음 범위를 다룹니다.

- Basic UI 컴포넌트 설계
- Semantic token을 CSS variable과 Tailwind utility로 매핑
- Storybook 기반 상태 문서화
- 관리자 샘플 페이지 조합

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Storybook
- Radix UI
- class-variance-authority

## Included Components

### Basic

- Button
- Input
- Textarea
- Select
- Checkbox
- RadioGroup
- Badge
- Card
- Heading

### Composite

- Dialog
- Tabs
- Table
- Pagination
- Alert
- Toast

## Token System

Figma에서 정의한 token을 아래 흐름으로 연결했습니다.

```txt
Figma token
-> CSS variable
-> tailwind.config.js mapping
-> component class
```

현재 프로젝트는 다음 semantic 축을 중심으로 구성되어 있습니다.

- `surface`
- `ink`
- `line`
- `action`
- `spacing`
- `radius`
- `typography`

## Pages

앱 안에는 아래 샘플 화면이 포함되어 있습니다.

- Home
- Dashboard
- User Management
- Token Showcase

`Dashboard`와 `User Management`는 관리자 화면 샘플 페이지이며,  
`Token Showcase`는 토큰과 컴포넌트 조합을 한 번에 확인하기 위한 데모 페이지입니다.

## Storybook

Storybook에서는 개별 컴포넌트의:

- 기본 상태
- 상호작용 상태
- 크기/variant
- 문서화된 예제

를 확인할 수 있도록 구성했습니다.

## Local Development

```bash
npm install
npm run dev
```

Storybook 실행:

```bash
npm run storybook
```

빌드:

```bash
npm run build
```

## Purpose

이 프로젝트는 단순 예제 저장소가 아니라, 아래 목적을 함께 갖고 있습니다.

- 포트폴리오 제출용 UI 시스템 정리
- Tailwind CSS와 token mapping 학습
- Storybook 기반 컴포넌트 문서화 경험 정리
- 관리자 화면 조합형 UI 설계 경험 정리
