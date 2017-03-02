###### DAY04

## 진행 내용

### 타이포그래피 디자인

- 본문/단락(Paragraph)
- 제목(Headings)
- 하이퍼링크(Hyperlink)
- 목록(Lists)

<img src="../../Assets/Typography/anatomy.jpg" alt="타이포그래피 디자인">

-

__실습 콘텐츠__

[<img src="../../Assets/Typography/sketch-view.png" alt="Sketch View">](https://brunch.co.kr/@12m17d/46)

```
설레면 사랑 두려우면 여행

긴 여행이 끝난 후

그리고 다시 이 곳,

─

여행을 떠남으로써 왜인지 우리는 새로운 삶에 대한 막연한 기대를 갖는다. 낯선 땅 위에 그 어색한 공기가 코 끝을 스칠 때 내가 그랬고 주변이들이 그랬다. 어쩌면 그렇게 믿어야만 떠날 명분이 생길 것 같았고 흔히들 말하는 ‘청춘’ 다운 여행이라 생각했는지도 모르겠다. 그러나 길고 짧은 여행을 마치고 집으로 돌아올 때마다 잔인하게도 달라진 건 없었다. 오히려 달라질 줄 알았던 삶과 그렇지 않다는 사실 사이의 괴리감에 공허함만 짙어졌다. 몇 번이고 다시 떠나고 돌아오길 반복했지만 내 삶은 그리 특별해지지 않았다.

> content-01.jpg [Copyright 2015. 동경(insta@id1992) all rights reserved. [미국/뉴욕]]

나는 여전히 졸린 눈으로 지하철에 몸을 실었고 피곤한 몸으로 퇴근을 했으며 덕분에 온전히 나에게 들일 수 있는 시간마저 확연히 줄어들었다. 여유라는 마음을 배워온 듯했으나 내가 살아가야 할 곳의 사람들은 여전히 바쁘게 움직였고 내가 그곳에서 느꼈던 감정들은 현실성 없이 겉도는 것쯤으로 정의 내려지는 듯했다

비슷한 시기에 한국으로 돌아온 친구 S는 말했다. "여행 중에 했던 인터뷰의 마지막 질문이 한국으로 돌아갈 때 가장 두려운 게 무엇이냐는 거였는데, 나는 그때 '지금 이 느낌을 잊고 사는 거요'라고 답했거든, 근데 내가 벌써 그러고 있더라". 후배 K 역시 비슷한 이유로 탄식했다.

대부분의 여행자들이 긴 여행을 마치고 돌아왔을 때 가장 두려워하는 것은 예상컨대 돌아올 자리가 없는 것도 아니고, 남들보다 뒤처지는 것도 아니고 그저 내가 보고 듣고 느꼈던 것들이 점차 사회가 만든 ‘현실’이라는 벽에 부딪쳐 사라지는 것일지도 모른다. 아, 어쩌면 여행 후에 달라진 것이 없다며 홀로 괴로워하는 것 역시 '현실'이 내뱉는 추긍에 지나온 시간들을 합리화할 수 없을지 모른다는 불안함에서 오는 두려움은 아니었을까.

> content-02.jpg [Copyright 2015. 동경(insta@id1992) all rights reserved. [미국/뉴욕]]

현실. 그러고 보면 여행지에서 만난 대부분의 사람들은 ‘현실’이라는 말을 쓰지 않았다. 그러나 그들은 어딘가에서 ‘현실’에서 벗어난 사람들로 인식되고 있는 듯했다. 먹고 싶은 거 먹고 쉬고 싶은 만큼 쉬는 것. 살아 숨 쉬는 내가 값을 주고 행하는 모든 것이 어찌 비현실이 될 수 있는지. 혹시 그 누군가 이 모든 걸 비현실로 정의 내렸기 때문에 현실과의 이해관계에서 숱한 장애물이 생겨나 결국 잊어가야만 살아가기 편하게끔 만들어 버린 건 아닐는지.

왜인지 나는 이제 그간 어땠느냐는 안부에 그저 지난 공백에 비례하는 무언가를 바라는 벽 앞에 무너지지 않으려 노력하고 있다는 대답 밖에는 할 말이 없을 것 같다.
```

-

__UI 디자인의 핵심__은 __타이포그래피 디자인__<i>!</i>

<img src="../../Assets/Typography/typography-en.jpg" alt="">

디자인 시안에 사용된 글꼴: [Dosis](https://fonts.google.com/specimen/Dosis)

```html
<!--
  글자 두께 200 ~ 800
  ==================
  200  extra-light
  300  light
  400  regular
  500  medium
  600  semi-bold
  700  bold
  800  extra-bold
-->
<link href="https://fonts.googleapis.com/css?family=Dosis:200,400,600" rel="stylesheet">
```

```css
body {
  font-family: Dosis, Sans-Serif;
}
```

-

### 타이포그래피 시스템 (Typography System)

디자인 원칙에 따른 타이포그래피를 설계(Design)함을 말한다.

#### 모듈러 스케일(Modular Scale)

모듈러 스케일이란? 관계된 객체 간에 개별적으로 일정한 배율(Ratio)이 반영된 수의 나열이다.

![Modular Scale](../../Assets/base-design/modular-scale.png)

##### 타입 스케일 배율(Type Scale Ratio)

- `1.067` — Minor Second
- `1.125` — Major Second
- `1.200` — Minor Third
- `1.250` — Major Third
- `1.333` — Perfect Fourth
- `1.414` — Augmented Fourth
- `1.500` — Perfect Fifth
- `1.600` — Minor Sixth
- `1.618` — Golden Ratio (황금 비율)
- `1.667` — Major Sixth
- `1.778` — Minor Seventh
- `1.875` — Major Seventh
- `2.000` — Octave
- `2.500` — Major Tenth

-

#### 베이스라인(Baseline)

베이스라인이란? 행(Row) 사이 간격으로 글자 크기(Font Size)를 포함하는 높이를 말한다.

![baseline](../../Assets/base-design/baseline.png)

-

#### 버터컬 리듬(Vertical Rhythm)

버티컬 리듬이란? 각 요소(Elements) 간의 수직적인 공간 배열 관계를 말한다.

![vertical-rhythm](../../Assets/base-design/vertical-rhythm.png)

-

#### 타이포그래피 시스템이 반영된 디자인

왼쪽 vs 오른쪽 결과물 중, 디자인 관점에서 우수한 것은 무엇일까?

![design-harmony](../../Assets/base-design/design-harmony.png)

---

### CSS 타이포그래피 시스템 & 모듈러 스케일

**모듈러 스케일** & **베이스라인** & **버티컬 리듬**이 반영된 타이포그래피 시스템 아름답지 아니한가?

![type-system-with-modular-scale](../../Assets/base-design/gridlover-free-type-system-with-modular-scale.jpg)

수업 과정에서 만들어 본 Typography System 결과물

![typography-system](../../Assets/vertical-rhythm.gif)

-

##### 모듈러 스케일을 반영한 단락, 제목 글자 크기 설정

> 폰트크기(font-size): 이전 폰트크기(previous-font-size) × 타입배율(type-scale)

```css
h5 {
  font-size: 1.125rem; /* (1 × 1.125) */
}

h6 {
  font-size: 1rem; /* 1rem = 16px */
}
```

-

##### 재사용 가능한 클래스 속성 설정

```css
h1,
.exa {
  font-size: 1.8020rem;
}

⋮

h6,
.kilo {
  font-size: 1rem;
}
```

-

##### 크기 범주를 넓히는 클래스 속성 설정

[미터법 접두사(Metric Prefix)](https://en.wikipedia.org/wiki/Metric_prefix)

```css
.yotta {
  font-size: 2.2807rem;
}

.zetta {
  font-size: 2.0273rem;
}

⋮

small, .milli {
  font-size: 0.8889rem;
}

.micro {
  font-size: 0.7901rem;
}
```

---

### 버티컬 리듬

```css
h1, h2, h3, h4, h5, h6,
p, ul, ol, dl, dd, figure,
blockquote, details, hr,
fieldset, pre, table {
  margin: 0 0 1.5rem;
}
```

-

##### 행간 설정 공식

> 행간(line-height): ceil( 폰트크기(font-size) ÷ 기본행간(base-line-height) ) × ( 기본행간(base-line-height) ÷ 폰트크기(font-size) )

```css
h1, .exa {
  /* line-height: ceil(1.802 ÷ 1.5) × (1.5 ÷ 1.802) */
  font-size: 1.8020rem;
  line-height: 1.6648;
}
```

-

##### 재사용 가능한 행간 클래스 속성 설정

```css
/* 공간 x1 */
.push {
  margin-bottom: 1.5rem;
}

/* 공간 제거 */
.push-none {
  margin-bottom: 0;
}

/* 공간 x2 */
.push-double {
  margin-bottom: 3rem;
}

/* 공간 1/2x */
.push-half {
  margin-bottom: 0.75rem;
}
```

-

##### 수업 시간에 작성한 CSS 코드 (행간, 마진 구하는 공식 정리)

```css
/* Baseline(Leading 24px) 가이드 추가 */
body {
  /*스타일 선언문*/
  /* 속성: 값; */
  /* 배경 이미지(background-image) 추가 */
  background-image: url("../images/Leading-24px.png");
}

/**
 * 본문 디자인(설계)
 * ---------------------------------------------
 * 글자 모양(Font Family): Spoqa Han Sans (Like Noto Sans)
 * 글자 색상(Color): #373737
 * 글자 크기(Font Size): 16px
 * 행간 비율(Line Height): 1.5 (16 x 1.5 = 24px)
 * 자간 설정(Letter Spacing): -25
 */
p {
  margin-bottom:  1.5em;
  font-family:    "Spoqa Han Sans";
  color:          #373737;
  font-size:      16px;
  line-height:    1.5;
  letter-spacing: -0.025em; /* Equal M */
}

/**
 * --------------------------------
 * 제목 디자인
 * h1~6
 *
 * Type Scale: x1.24
 * Base Font Size: 16px = 1em
 * ----------------------------- */
h6 {
  font-size: 1.24em;
  /*
  [ line-height을 구하는 공식 ]
  1) ceil( 글자 크기 비율(1.24) ÷ 행간 비율(1.5) ) = 글자 크기가 차지하는 행의 개수
     1.24/1.5 = .826666667 => 1개
  2) 행간 비율(1.5) ÷ 글자 크기 비율(1.24) × 행의 개수
     1.5/1.24 = 1.209677419 * 1
  */
  line-height: 1.2096;
  line-height: 1.21; /* ※ 행간을 소수점 3번째 자리까지 쓰되 올림 (다소 어긋난 높이 조정) */
  /*
  [ margin-bottom을 구하는 공식 ]
  행간 비율(1.5) ÷ 글자 크기 비율(1.24)
  1.5/1.24 = 1.209677419
  */
  margin-bottom: 1.2096em;
}
h5 {
  font-size: 1.5376em;
  line-height: 1.951; /* 행의 개수(2) × 0.9755  */
  line-height: 1.96;
  margin-bottom: 0.9755em; /* 1.5/1.5376 = 0.9755 */
}
h4 {
  font-size: 1.9066em;
  line-height: 1.5734; /* 행의 개수(2) × 0.7867 = 1.5734  */
  line-height: 1.58;
  margin-bottom: 0.7867em; /* 1.5/1.9066 = 0.7867 */
}
h3 {
  font-size: 2.3642em;
  line-height: 1.2688; /* 행의 개수(2) × 0.6344 = 1.2688 */
  line-height: 1.27;
  margin-bottom: 0.6344em; /* 1.5/2.3642 = 0.6344 */
}
h2 {
  font-size: 2.9316em;
  line-height: 1.5348; /* 행의 개수(3) × 0.5116 = 1.5348 */
  line-height: 1.54;
  margin-bottom: 0.5116em; /* 1.5/2.9316 = 0.5116 */
}
h1 {
  font-size: 3.6352em;
  line-height: 1.2378; /* 행의 개수(3) × 0.4126 = 1.2378 */
  line-height: 1.24;
  margin-bottom: 0.4126em; /* 1.5/3.6352 = 0.4126 */
}
```

---

### 모듈러 타이포그래피 도구

- [Typografier](http://typografier.web-dev.tools/)
- [type-scale](http://type-scale.com/)
- [modularscale](http://www.modularscale.com/)
- [gridlover](http://www.gridlover.net/)

### 읽어볼 참고 자료

- [A More Modern Scale for Web Typography](http://typecast.com/blog/a-more-modern-scale-for-web-typography)
- [How To Use Size, Scale, And Proportion In Web Design](http://vanseodesign.com/web-design/size-scale-proportion/)

### Sketch 강좌

- https://www.sketchapp.com/learn/
- http://blog.bluehack.net/category/ux_and_ui/
- https://sketch3doko.wordpress.com/table-of-contents/
- https://www.youtube.com/playlist?list=PLLnpHn493BHE6UIsdKYlS5zu-ZYvx22CS