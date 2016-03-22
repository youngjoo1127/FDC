###### Front-End Design CAMP

### 타이포그래피 시스템 (Typography System)

- 모듈러 스케일 (Modular Scale)
- 베이스라인 (Baseline)
- 버티컬 리듬 (Vertical Rhythm)

![typejunkie](typography/holli-typejunkie.jpg)

##### 참고자료
- [EXTREME TYPE TERMINOLOGY](http://ilovetypography.com/2008/03/21/extreme-type-terminology/)
- [type.method.ac](http://type.method.ac/)

-

### Google 웹폰트

- [Google Fonts](https://www.google.com/fonts)
- [Quicksand](https://www.google.com/fonts#QuickUsePlace:quickUse)

-

### Noto Sans

구글은 웹과 인터넷에서 한글을 보다 아름답고 다양하게 표현할 수 있도록 많은 노력을 기울여 왔습니다.
그 일환으로 국내 글꼴 제작사가 만든 여러 종류의 한국어 글꼴을 구글 웹 폰트 서비스에 더해 왔습니다.
이제 Noto Sans KR을 11번째 한국어 웹 글꼴로 내놓습니다.

웹 디자이너 여러분, 어떤 플랫폼이나 화면 배율에서도 미려하고, 웹 접근성도 우수하며
검색 엔진 친화적인 웹 사이트 디자인을 원하신다면 웹 글꼴을 적용해 보세요.

[Noto Sans DEMO](http://jungshik.github.io/gwf/noto_sans_korean_demo2.html)

```css
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
@import url(http://fonts.googleapis.com/earlyaccess/notosanssc.css);

/*  한국어 */
:lang(ko) {
  font-family: 'Noto Sans KR', sans-serif;
}

/* 일본어 */
:lang(ja) {
  font-family: 'Noto Sans JP', sans-serif;
}

/* 중국어 (간체) */
:lang(zh-Hans) {
  font-family: 'Noto Sans SC', sans-serif;
}
```

-

### HTML 요소

```html
<!-- /////////////////////////////////////////////////////////////////////////////////////
제목: Headings 1-6
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements
-->
<h1>제목 1</h1>
<h2>제목 2</h2>
<h3>제목 3</h3>
<h4>제목 4</h4>
<h5>제목 5</h5>
<h6>제목 6</h6>

<!-- /////////////////////////////////////////////////////////////////////////////////////
단락: Paragraph
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/p
-->
<p>단락: 글의 묶음(덩어리)</p>

<!-- /////////////////////////////////////////////////////////////////////////////////////
하이퍼링크: HyperLink
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/a
-->
<a href="https://github.com/yamoo9/fastcampus-front-end-design">패스트캠퍼스 프론트엔드 디자인 CAMP</a>

<!-- /////////////////////////////////////////////////////////////////////////////////////
강조: Emphasize, Strong
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/em
https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong
-->
<em>일반 글보다 강조</em>
<strong>'<em>'보다 강한 강조</strong>

<!-- /////////////////////////////////////////////////////////////////////////////////////
축약: Abbreviation
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/abbr
-->

<!-- /////////////////////////////////////////////////////////////////////////////////////
이미지: Images
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/img
-->
<img src="http://placehold.it/350x150" alt="이미지를 대체할 텍스트(설명)">
<img src="http://placehold.it/350x150.png/09f/ff0" alt="이미지를 대체할 텍스트(설명)">
<img src="http://placehold.it/350x150.png/09f/ff0?text=placeholder" alt="이미지를 대체할 텍스트(설명)">

<!-- /////////////////////////////////////////////////////////////////////////////////////
피규어: 주석이 요구되는 이미지, 일러스트레이션, 사진, 코드 등등을 그룹
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure
-->
<figure>
    <img src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png" alt="">
    <figcaption>Fig1. MDN Logo</figcaption>
</figure>

<!-- /////////////////////////////////////////////////////////////////////////////////////
비/순차 목록: (Un)Ordered List
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/ul
https://developer.mozilla.org/ko/docs/Web/HTML/Element/ol
https://developer.mozilla.org/ko/docs/Web/HTML/Element/li
-->
<ul>
    <li>비순차 목록(Unordered List)</li>
    <li>목록 항목(List Item)</li>
</ul>

<ol>
    <li>순차 목록(Ordered List)</li>
    <li>목록 항목(List Item)</li>
</ol>

<!-- /////////////////////////////////////////////////////////////////////////////////////
정의 목록: Definition List
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/dl
https://developer.mozilla.org/ko/docs/Web/HTML/Element/dt
https://developer.mozilla.org/ko/docs/Web/HTML/Element/dd
-->
<dl>
    <dt>정의 용어(Definition Term) 1</dt>
        <dd>정의 용어 1 기술(Definition Description)</dd>
    <dt>정의 용어(Definition Term) 2</dt>
        <dd>정의 용어 2 기술(Definition Description)</dd>
        <dd>필요하다면 기술 내용('<dd>')을 개별적으로 추가 가능</dd>
</dl>

<!-- /////////////////////////////////////////////////////////////////////////////////////
인용: Block Quotation
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote
https://developer.mozilla.org/ko/docs/Web/HTML/Element/q
-->
<p>HTML Quote 요소는 <q>둘러싼 텍스트가 짧은 인라인 인용문</q>이라는것을 나타냅니다.
이 요소는 단락 구분이 필요없는 짧은 인용문을 위해 사용되며, 긴 인용문에는 '<blockquote>' 요소를 사용하세요.</p>

<blockquote cite="http://developer.mozilla.org">
  <p>HTML '<blockquote>' 요소는 감싸진 텍스트가 긴 인용문임을 가리킵니다.</p>
  <p>일반적으로 이것은 들여쓰기로 렌더링 됩니다.</p>
</blockquote>

<!-- /////////////////////////////////////////////////////////////////////////////////////
미디어: Media [ Video | Audio ]
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/video
https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio
https://developer.mozilla.org/ko/docs/Web/HTML/Element/source
-->
<video src="videoFile.mp4" poster="posterImage.jpg">
  <track kind="subtitles" src="videoFile.ko.vtt" srclang="ko" label="Korean">
  <track kind="subtitles" src="videoFile.en.vtt" srclang="en" label="English">
  안타깝게도 현재 사용중인 웹 브라우저는 비디오를 재생할 수 없습니다만,
  <a href="videoFile.mp4">videoFile.mp4</a> 파일을 다운로드 받아
  운영체제의 비디오 플레이어에서 재생할 수 있습니다.
</video>

<audio controls="controls">
  <source src="audioFile.mp3" type="audio/mp3">
  <track kind="subtitles" src="videoFile.ko.vtt" srclang="ko" label="Korean">
  안타깝게도 현재 사용중인 웹 브라우저는 오디오를 재생할 수 없습니다만,
  <a href="audioFile.mp3">audioFile.mp3</a> 파일을 다운로드 받아
  운영체제의 오디오 플레이어에서 재생할 수 있습니다.
</audio>

<!-- /////////////////////////////////////////////////////////////////////////////////////
제목: 의미가 없는 구역 요소 [ Division, Span ]
참고 URL:
https://developer.mozilla.org/ko/docs/Web/HTML/Element/div
https://developer.mozilla.org/ko/docs/Web/HTML/Element/span
-->
<div>
    <h1>구역을 나누는 요소 디비전</h1>
    <p>디비전(Division) 요소는 <span>구역을 나누는(Divide) 요소</span>입니다.</p>
</div>
```

---

##### 참고 자료

- [Anatomy of a Modular Typographic Grid](http://vanseodesign.com/web-design/grid-anatomy/)
- [GRAPHIC DESIGN 2 (PART 1) TASK 1: WHAT IS THE GRID SYSTEM](http://vanseodesign.com/web-design/grid-anatomy/)
- [Grid | layout / Constructing the Grid | The Ministry of Type — Designspiration](https://kr.pinterest.com/pin/142285669448706660/)
- [100+ Best Grid Systems & Tools For Responsive Design](http://www.cssauthor.com/grid-systems/)
