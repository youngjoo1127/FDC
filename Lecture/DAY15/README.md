###### Front-End Design CAMP

## 모바일 최적화

- `handheldfriendly`, `mobileoptimized` 속성 값은 오래된 모바일 기기 화면에 최적활 할 때 사용. (스마트 폰 환경에서는 불 필요)
- `viewport` 속성 값은 스마트 폰 화면에 최적화할 때 사용.
    - `width=device-width` 설정은 기기(Device)의 화면 가로 폭에 최적화된 뷰를 제공.
    - `initial-scale=1` 설정은 기본 화면 비율 크기를 배율 x1로 설정.

```html
<meta name="handheldfriendly" content="true">
<meta name="mobileoptimized" content="240">
<meta name="viewport" content="width=device-width,initial-scale=1">
```

> ※ 최신 iOS 버전의 사파리에서는 화면에 맞게 수축(Shrink)하는 설정 여부가 추가됨.<br> &nbsp;&nbsp;
`shrink-to-fit=no` 설정은 화면 크기에 맞게 화면 요소들이 축소되는 것을 방지함.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

-

### [참고: CSS Device Adapt](https://drafts.csswg.org/css-device-adapt/#translate-meta-to-at-viewport)

`@viewport` 규칙은 `<meta name="viewport">` 코드(비표준)를 대체하는 표준이 될 코드이지만, 모든 웹 브라우저가 지원하는 것은 아님.

```css
@-webkit-viewport { width: device-width; zoom: 1; }
@-moz-viewport    { width: device-width; zoom: 1; }
@-ms-viewport     { width: device-width; zoom: 1; }
@-o-viewport      { width: device-width; zoom: 1; }
@viewport         { width: device-width; zoom: 1; }
```

위 `@viewport` 규칙은 아래 `<meta name="viewport">` 코드와 동일한 역할을 수행.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

-

### 기타 설정

- `box-sizing: border-box;` 설정은 `width`, `height` 영역을 `border`영역까지 확대시켜 디자인을 용이하게 설정.
- `text-size-adjust: 100%;` 작은 화면(모바일)에 웹 사이트를 최적화하하는 과정에서 텍스트 크기를 임의로 변경(팽창)하지 않도록 설정.

```css
html {
    /* 박스 크기 설정 */
    box-sizing: border-box;
    /* 텍스트 크기 조정 설정 */
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

*, *::before, *::after {
    /* 박스 크기 설정 상속 */
    box-sizing: inherit;
}
```

-

### 브라우저 일반화

웹 브라우저마다 기본 스타일 설정이 달라 이를 일반화(Normalization)할 필요가 있음.

[Normalize.css](http://necolas.github.io/normalize.css/)

---

## [CSS 공통 모듈 생성기](http://url.yamoo9.net/common)

프로젝트에 사용될 공통 스타일 모듈을 손쉽게 생성할 수 있는 도구(using Sass)

---

## 플렉시블 그리드

### 로우(row), 컬럼(Column)

```html
<div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
</div>
```

```css
.row::after {
    content: '';
    display: block;
    clear: both;
}
.col {
    float: left;
    width: 33.3333%
}
```

-

### 거터(Gutter)

```html
<div class="col gutter"></div>
```

```css
.gutter {
    padding-left: 1rem;
    padding-right: 1rem;
}
```

-

### 컬럼 가로 폭(width)

```html
<div class="col-1-2"></div>
```

```css
.col-1-2 {
    width: 50%;
}
.col-1-3 {
    width: 33.3333%;
}
.col-2-3 {
    width: 66.6667%;
}
.col-1-4 {
    width: 25%;
}
.col-3-4 {
    width: 75%;
}
```

-

## 반응형 그리드

```html
<div class="row">
    <div class="col-s-1 col-m-1 col-l-1-3"></div>
    <div class="col-s-1 col-m-1-2 col-l-1-3"></div>
    <div class="col-s-1 col-m-1-2 col-l-1-3"></div>
</div>
```

```css
.row::after {
    content: '';
    display: block;
    clear: both;
}
[class*="col-"] {
    float: left;
}
.col-s-1 { width: 100%; }

@media screen and (min-width: 600px) {
    .col-m-1 { width: 100%; }
    .col-m-1-2 { width: 50%; }
}

@media screen and (min-width: 960px) {
    .col-l-1-3 { width: 33.3333%; }
}
```
