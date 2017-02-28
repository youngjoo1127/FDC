###### DAY06

## 진행 내용

### 메디컬 뷰 디자인: 치아 건강 & 서울 아산병원 Step 2.

- 타이포그래피 디자인
- 레이아웃 디자인(버티컬 리듬: Vertical Rhythm)

```html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8">
    <title>치아건강 &lt; 서울아산병원</title>
    <!--Spoqa Han Sans 웹폰트 로드-->
    <link
      href="http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" rel="stylesheet">
    <!--스타일 문서 호출-->
    <link rel="stylesheet" href="css/style.css">
    <!--모바일 최적화-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--파비콘-->
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
  </head>
  <body>

    <div class="conatiner">
      <div class="header">
        <h5>건강백과</h5>
        <h1>치아 건강, 5가지 올바른 관리법</h1>
        <h6>Medaical_01</h6>
        <img src="images/header-photo.jpg" alt="치아모형으로 시범을 보이고 있는 치과 선생님">
      </div>
      <div class="main">
        <h3>치아관리의 중요성</h3>
        <p>치아는 음식물로부터 영양분을 섭취하기 위한 저작 기능을 담당하는 중요한 기관이다. 뿐만 아니라 건강한 치아와 바른 치열은 아름다운 미소와 안모의 필수적 요소이고, 발음을 명확하게 하는 기능을 담당한다. 충치나 잇몸 질환으로 치아가 손상되거나 상실되면 견디기 어려울 만큼의 통증이 발생할 수 있고, 음식물을 섭취하는 것도 어려워지게 된다.</p>
        <p>이로 인해 전신 건강이 악화될 수 있고, 외모에 대한 자신감을 잃을 수도 있다. 치아가 심하게 손상되거나 상실된 이후 치과 치료는 비용적인 측면에서도 많은 부담이 될 수 있으므로 평상시에 올바른 치아 관리와 정기적인 검진을 통해 건강한 치아를 유지하는 것이 중요하다.</p>

        <ul>
          <li>
            <h5>1. 올바른 잇솔질</h5>
            <p>충치를 예방하기 위해서는 올바른 잇솔질을 해주는 것이 중요하다. 겨울을 지나온 피부는 낮은 수치의 자외선에 익숙해져 있기 때문에 봄 자외선에 노출되면, 멜라닌색소를 만들어 내는데 이는 피부색을 짙게 하고 기미와 잡티, 검버섯을 악화시킨다. 또한 햇빛 알레르기 등의 알러지성 피부병변은 물론이고 멜라노사이트 자극에 의한 색소질환 및 피부세포 손상에 의한 피부노화 등이 발생할 수도 있다. 자외선은 피부의 수분을 빼앗는다. 자외선으로부터 피부를 보호하기 위해 외출 전 자외선 차단제를 꼼꼼히 바르거나 양산, 모자 등을 착용하자.</p>
          </li>
          <li>
            <h5>2. 치실 사용을 습관화</h5>
            <p>잇솔질만 해서는 치아 사이의 음식물이나 치태를 충분히 제거할 수 없으므로 치실 사용을 습관화하는 것이 좋다.  만약 치실이 헐거울 정도로 치아 사이 간격이 크다면 적당한 크기의 치간 칫솔을 사용해야 한다. 치간 칫솔은 무리한 힘을 주지 않고 자연스럽게 치아 사이에 들어갈 정도의 크기를 선택한다.</p>
          </li>
          <li>
            <h5>3. 구강건강 검진</h5>
            <p>잇솔질이나 치실 사용을 잘하더라도 치아에 치석이 생기는 경우가 많다. 따라서 6개월마다 한번씩 구강건강 검진을 받도록 하고, 6개월에서 1년마다 한번씩 스케일링을 받을 것을 권장한다. 현재는 1년에 한번 국민건강보험에서 스케일링에 대한 보험 적용을 받을 수 있다.</p>
          </li>
          <li>
            <h5>4. 치아 건강에 도움이 되는 음식물 섭취</h5>
            <p>과자나 사탕 등 단 음식을 피하고, 섬유소가 많이 포함된 야채나 과일, 견과류를 섭취한다. 이때 견과류를 껍질 채 부숴먹거나 야채나 과일을 적당한 크기로 썰어먹지 않을 경우 오히려 치아나 턱 관절에 무리가 갈 수 있으므로 주의하도록 한다. 단단한 마른 오징어나 질긴 음식도 턱 관절에 무리를 주므로 되도록이면 먹지 않는 것이 좋다.</p>
          </li>
          <li>
            <h5>5. 금연</h5>
            <p>흡연은 치아나 잇몸 착색, 구취, 구강암을 발생시키므로 금연하는 것은 치아와 구강건강을 위해서도 필수적이다.</p>
          </li>
        </ul>

        <div class="QnA">
          <h3>치아 상식 Q &amp; A</h3>
          <dl>
            <dt>Q. 스케일링을 받으면 이가 깎여 나가서 시리거나 치아 사이가 벌어지는 경우가 있다?</dt>
            <dd>
              <p>A. 스케일링은 치아에 붙어 있는 치태 및 치석을 제거하는 치료로써 치아에는 거의 손상을 주지 않는다. 스케일링을 한 후에 이가 시린 것은 두껍게 붙어 있던 치석을 다 떼어내면 치석 때문에 존재했던 잇몸 염증이 가라앉으면서 부어 있던 잇몸이 수축된다. 이때 치아뿌리가 노출되기 때문에 찬물에 시리게 되는 것이며, 대부분 시일이 지나면서 시린 증상이 완화된다.</p>
              <p>또 치석을 떼어내면 치석이 있던 자리가 공간으로 남게 되며, 치석으로 인해 부어 있던 잇몸이 가라 앉으면서 치아 사이가 벌어진 것처럼 느껴지게 되는 것이다. 큰 치석이 다량 끼어있는 경우일수록 이런 느낌이 들 수 있다. 만약 이런 치석을 그냥 두게 되면 치아가 한번에 빠질 수 있다.</p>
            </dd>
            <dt>Q. 잇몸 질환이 있는 경우에 인사O, 이가O 같은 잇몸약으로 치료할 수 있나?</dt>
            <dd>A. 잇몸 질환은 치태나 치석 같은 물질이 잇몸에 자극을 주어 질병이 일어나고 진행된다. 약을 먹어서 이러한 물질(치태, 치석)이 없어진다면 효과가 있지만, 그렇지 못하므로 효과가 전혀 없다고 할 수 있다. 잇몸 질환은 치태나 치석을 스케일링 등을 통해 외과적으로 제거해주는 것이 필수적이다. 이미 이 약들이 개발된 프랑스에서는 판매가 금지되어 있다.</dd>
            <dt>Q. 구강청정제나 방향성 치약으로 구취(입냄새)를 없앨 수 있나?</dt>
            <dd>A.입냄새의 원인은 잇몸 질환부터 소화기의 문제까지 매우 다양하다. 구강청정제 등의 사용은 일시적으로 입냄새를 없앨 수는 있으나 약제 효과가 떨어지면 입냄새가 재발된다. 전문적 검사를 통해 원인을 파악해 충치나 치주 질환의 적절한 치료를 시행해 주는 것이 좋다.</dd>
          </dl>
        </div>
      </div>
      <div class="footer">
        <a href="#">↑ Go to Top</a>
        <h5>서울아산병원</h5>
      </div>
    </div>

  </body>
</html>
```

```css
@charset "UTF-8";
/*! style.css @ yamoo9.net, 2017 */

html {
  /*height: 100%;*/
  /*background-color: #fff;*/
  font-size: 10px; /* rem 단위의 기준 값 */
}

/* body 요소에 배경이미지(leading 21px 패턴) 설정 */
body {
  /*height: 100%;*/
  min-height: 100vh;
  margin: 0;
  /*본문 디자인(상속)*/
  /* font: [두께] [기울기] [응용] 크기[/행간] 글꼴; */
  font: 1.4rem/1.5 "Spoqa Han Sans";
  /*font-family: "Spoqa Han Sans";*/
  /*font-size: 1.4rem;*/
  /*line-height: 1.5;*/ /* CSS는 상속이라는 매커니즘을 사용하다 보니 단위를 붙이면 버그가 발생 */
  letter-spacing: -0.02em;
  color: #333741;
}

body:hover {
  background: url("../images/leading-21.png");
}

/* 제목/단락 공통 디자인 */
h1,h2,h3,h4,h5,h6,p {
  margin-top: 0;
  /*margin-bottom: 1.5em;*/
  margin-bottom: 2.1rem;
}

/* 제목 공통 디자인 */
h1,h2,h3,h4,h5,h6 {
  letter-spacing: -0.05em;
}
h1,h2,h3,h4 {
  font-weight: 300;
}
h5, h6 {
  font-weight: normal;
  line-height: 2.1rem;
}

/* 제목 개별 디자인 */
h1 {
  font-size: 5.463rem;
  line-height: 6.3rem;
}
/*h2 {}*/
h3 {
  font-size: 3.169rem;
  line-height: 4.2rem;
}
/*h4 {}*/
h5 {
  font-size: 1.838rem;
  color: #787f94;
}
h6 {
  font-size: 1.563rem;
  color: #47494e;
}

/* 목록 공통 디자인 */
ul, ol {
  /* 웹 브라우저 기본 스타일(User Agent Style) 제거 */
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}

/* 목록 개별 디자인 */
/*ul {}*/
/*ol {}*/

/* 목록 항목(아이템) 디자인 */
li {
  margin-bottom: 4.2rem;
}

/* 정의 목록 디자인 */
dl {
  margin-top: 0;
  margin-bottom: 0;
}
dt {
  margin-top: 2.1rem;
  margin-bottom: 2.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #2b2c2f;
}
dd {
  margin-left: 0;
  letter-spacing: -0.02em;
  color: #333741;
}

/* 하이퍼링크 디자인 */
a[href] {
  color: #3292a7;
  text-decoration: none;
}
/* 상태 디자인
   기본 상태 (Normal State, :link)
   방문한 상태 (Visited State, :visited)
   마우스가 올라간 상태 (Hover State, :hover)
   클릭한(활성) 상태 (Active State, :active)
   포커스 상태 (Focus State, :focus)
   비활성 상태 (Deactive State)
*/
a[href]:hover {
  color: #227e92;
  text-decoration: underline;
}

/* 블록 요소 내, 이미지 하단 공간 제거 */
img {
  vertical-align: bottom;
}

/* ------------------------------------------------- */

/* 페이지 컨테이너 */
.conatiner {
  width: 82rem;
  margin-left: auto;
  margin-right: auto;
}

.header {
  margin-top: 8.4rem;
  text-align: center;
}

.main {
  margin-top: 4.2rem;
}

.QnA {
  margin-top: 6.3rem;
}

.footer {
  margin-top: 6.3rem;
  margin-bottom: 6.3rem;
}

.footer h5 {
  margin-top: 2.1rem;
  text-align: right;
}
```
