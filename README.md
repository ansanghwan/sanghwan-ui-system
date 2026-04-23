# Design System Practice

React + TypeScript + Tailwind CSS를 직접 세팅하면서 디자인 토큰과 컴포넌트 라이브러리 구조를 학습하는 연습 프로젝트입니다.

## Semantic Token Agreement

디자인 토큰 작업은 색상값을 코드에 옮기기 전에, 팀에서 먼저 역할 기반 이름을 합의하는 과정이 중요합니다. 이 프로젝트에서는 아래 의미로 토큰 이름을 사용합니다.

| Token                | Meaning                     | Usage                          |
| -------------------- | --------------------------- | ------------------------------ |
| `primary`            | 가장 중요한 사용자 액션     | 저장, 생성, 적용 버튼          |
| `primary-foreground` | primary 위의 텍스트         | primary button text            |
| `accent`             | 보조 강조 또는 선택 상태    | active tab, selected item      |
| `point`              | 제한적으로 쓰는 포인트 강조 | new badge, promotion highlight |
| `destructive`        | 위험/삭제/오류 액션         | delete button, error state     |
| `background`         | 기본 화면 배경              | page background                |
| `foreground`         | 기본 텍스트                 | heading, body text             |
| `muted`              | 낮은 위계의 보조 배경       | helper area, inactive surface  |
| `muted-foreground`   | 낮은 위계의 보조 텍스트     | description, hint text         |
| `border`             | 기본 경계선                 | card, input, table border      |

## Token Flow

Figma에서 확인한 raw value를 바로 컴포넌트에 넣지 않고, UI 역할에 맞는 semantic token으로 번역한 뒤 CSS Variable과 Tailwind theme에 연결합니다.

```txt
Figma Inspect value
  -> raw token
  -> semantic token
  -> CSS variable
  -> tailwind.config.js
  -> component class
```

예시:

| Figma Value | Raw Token   | Semantic Token       | CSS Variable                 | Tailwind                  |
| ----------- | ----------- | -------------------- | ---------------------------- | ------------------------- |
| `#003cff`   | `blue-500`  | `primary`            | `--color-primary`            | `bg-primary`              |
| `#ffffff`   | `white`     | `primary-foreground` | `--color-primary-foreground` | `text-primary-foreground` |
| `#111827`   | `gray-900`  | `foreground`         | `--color-foreground`         | `text-foreground`         |
| `#e5e7eb`   | `gray-200`  | `border`             | `--color-border`             | `border-border`           |
| `16px`      | `space-4`   | `content-padding`    | `--space-4`                  | `p-token-4`               |
| `8px`       | `radius-md` | `control-radius`     | `--radius-md`                | `rounded-md`              |

## Current Tailwind Mapping

`src/index.css`에서 CSS Variables를 정의하고, `tailwind.config.js`에서 Tailwind class로 연결합니다.

```css
:root {
  --color-primary: 226 100% 50%;
  --color-foreground: 222 47% 11%;
  --color-border: 214 32% 88%;
}
```

```js
colors: {
  primary: "hsl(var(--color-primary))",
  foreground: "hsl(var(--color-foreground))",
  border: "hsl(var(--color-border))",
}
```

컴포넌트에서는 실제 색상값 대신 semantic class를 사용합니다.

```tsx
<button className="rounded-md bg-primary px-token-4 py-token-2 text-primary-foreground">
  Save
</button>
```

## Global CSS Structure

이 프로젝트에서는 전역 CSS의 역할을 아래처럼 나눕니다.

```txt
:root
= token declaration layer

html / body
= global style application layer
```

`:root`는 CSS 변수 전용 문법은 아니고 문서의 최상위 요소 선택자입니다. 그래서 일반 CSS 속성도 넣을 수 있지만, 학습 단계에서는 역할을 명확히 하기 위해 `:root`에는 디자인 토큰 변수만 둡니다.

```css
:root {
  --color-primary: 226 100% 50%;
  --color-background: 0 0% 100%;
  --radius-md: 0.5rem;
}
```

실제 화면에 배경색, 글자색, 폰트, 기본 여백을 적용하는 코드는 `html`과 `body`에 둡니다.

```css
html {
  color-scheme: light;
  font: 18px/145% var(--font-sans);
}

body {
  margin: 0;
  background: hsl(var(--color-background));
  color: hsl(var(--color-foreground));
}
```

다크모드는 아직 자동 적용하지 않습니다. `@media (prefers-color-scheme: dark)`를 쓰면 OS 다크모드 설정에 따라 Storybook과 앱 배경이 자동으로 어두워질 수 있기 때문입니다. 나중에 필요하면 `[data-theme="dark"]` 방식으로 명시적으로 추가합니다.

## Scripts

PowerShell에서는 `npm` 대신 `npm.cmd` 사용을 권장합니다.

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
```
