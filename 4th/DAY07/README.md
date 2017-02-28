###### DAY07

## 진행 내용

### 레이아웃 디자인: 화면 표시(Display)

각 표시 방법의 특성을 정리.

- block
- inline
- inline-block

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta charset="UTF-8">
  <title>Block VS Inline</title>
  <link rel="stylesheet" href="css/layout-tech.css">
</head>
<body>

  <div class="wrapper">

    <h2>Dummy Image (Wireframe)</h2>

    <img class="album-image" src="http://placehold.it/150x150?text=♥︎" alt="" width="150" height="150">
    <img class="album-image" src="http://placehold.it/150x150?text=♥︎" alt="" width="150" height="150">
    <img class="album-image" src="http://placehold.it/150x150?text=♥︎" alt="" width="150" height="150">
    <img class="album-image" src="http://placehold.it/150x150?text=♥︎" alt="" width="150" height="150">
    <img class="album-image" src="http://placehold.it/150x150?text=♥︎" alt="" width="150" height="150">
    <img class="album-image" src="http://placehold.it/150x150?text=♥︎" alt="" width="150" height="150">


    <p>야무 한글 로렘입숨 로렘입숨이란? 디자인을 위한 더미 텍스트!. 너야말로 꽃처럼 사명으로 고동소리, 만들 청춘아! 심장 세상을 씩씩하게 쿵쿵대는 그대 소리. 너 설레게 티셔츠 흐르는 꽃처럼 내일의 아름다운, 피어나는 않고 장엄한 어디에나 세상을, 찬란한 하루를!</p>

    <hr>

    <h2>Block Element</h2>
    <!-- html, body, div, ul, p, dl, section, article, aside, nav, ... -->
    <div class="block-box">Division Element - block</div>

    <!-- horizontal rule -->
    <hr>

    <h2>Inline Element</h2>
    <!-- a, span, strong, em, var, .... -->
    <p><span class="inline-box">Span Element - inline</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt quas voluptas vel suscipit eum accusantium quos. Deleniti, iusto placeat atque sint eligendi, quibusdam debitis porro facilis animi, quia aspernatur.</p>

    <hr>

    <h2>Inline Block Element</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex commodi <span class="inline-block-box">
      Inline Block Element - inline-block
    </span> cum maxime mollitia quam id atque voluptates blanditiis totam eius perferendis, exercitationem alias, quo consectetur expedita ipsa ducimus assumenda corrupti!</p>

    <hr>

    <h2>Ghost Button(Link) Style</h2>

    <a class="ghost-style-link" href="http://fastcampus.co.kr/" target="_blank">fast campus</a>

    <hr>

  </div>

</body>
</html>
```

```css
body {
  margin: 0;
}

hr {
  margin: 20px 0;
  border: 0;
  border-bottom: 1px solid #c2d6d1;
}

.wrapper {
  width: 660px;
  margin: 9rem auto;
}

.block-box,
.inline-box {
  /* width, height 속성은 inline 요소에는 적용되지 않는다. */
  width: 200px;
  height: 100px;
  /* margin-top, margin-bottom 은 inline 요소에는 적용되지 않습니다. (간격이 벌어지지 않는다) */
  margin: 10px;
  /* border-top, border-bottom 은 inline 요소에는 적용되지 않습니다. (간격이 벌어지지 않는다) */
  border: 10px solid hsla(45, 75%, 64%, 0.3);
  /* padding-top, padding-bottom 은 inline 요소에는 적용되지 않습니다. (간격이 벌어지지 않는다) */
  padding: 25px;
  background: hsla(21, 55%, 52%, 0.3);
  color: #fff;
}

.inline-block-box {
  /* 화면 표시 방법: inline-block 변경 */
  /*
    기본적으로는 inline 처럼 보이지만,
    block 처럼 레이아웃 설정이 가능하다.
    상/하 공간 설정 가능.
    width/height 설정 가능.
  */
  display: inline-block;
  background: #25a04d;
  color: #ffd219;
}


.ghost-style-link {
  display: inline-block;
  margin: 20px;
  border: 3px solid currentColor;
  padding: 0.9375em 1.25em 0.625em;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.03em;
  text-decoration: none;
  text-transform: uppercase;
  color: #3fb5c8;
  transition: all 0.4s ease;
}

.ghost-style-link:hover {
  border-color: #3fb5c8;
  background: #3fb5c8;
  color: #fff;
}

.album-image {
  /*width: 100%;
  height: auto;*/
  margin: 5px;
  border: 8px solid #474cc5;
  padding: 20px;
  background: #fff;
}
```
