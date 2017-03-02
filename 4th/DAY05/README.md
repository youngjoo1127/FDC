###### DAY05

## 진행 내용

### HTML 목록 디자인

- 순차 목록
- 비순차 목록
- 정의 목록

### 이미지, 하이퍼링크 디자인

- 이미지
- 하이퍼링크, 앵커


```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
    <meta charset="UTF-8">
    <title>HTML 이미지, 하이퍼링크, 리스트(순차목록, 비순차목록, 정의목록)</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Favicon: Favorite Icon -->
    <!--link:favicon-->
    <!--<link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">-->
</head>
<body>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error deserunt mollitia dolore ea ut nulla nisi voluptate quia, hic ullam, odit dolores. Optio nostrum rerum veniam dignissimos, eos repellendus itaque.</p>

    <h1 id="top">Anchor Point</h1>

    <!-- image -->
    <div>
        <img src="images/cat1.jpg" alt="깃발과 고양이 한마리">
    </div>
    <div>
        <img src="images/cat2.jpg" alt="고양이를 품에 안고 있는 소녀">
    </div>
    <!-- 하이퍼링크: hyperlink -->
    <!--<a href="http://fastcampus.co.kr/" target="_blank">패스트캠퍼스</a>-->
    <a href="#top">go to top</a>
    <!-- 앵커: anchor - 오늘날 사용하지 않는다. 권장 X -->
    <!-- lists -->

    <!-- 순차 목록 (Ordered List, ol) -->
    <ol>
        <!-- 목록 항목(list item, li) -->
        <li>물을 끓인다.</li>
        <li>라면 봉지 오픈</li>
    </ol>
    <!-- 비순차 목록 (Unordered List, ul) -->
    <ul>
        <li>라이터</li>
        <li>칼</li>
    </ul>
    <!-- 정의 목록 (Definition List, dl) -->
    <!-- 정의 용어 (Definition Term, dt) -->
    <!-- 정의 용어 기술 내용 (Definition Description, dd)-->
    <dl>
        <dt>미리내</dt>
        <dd>은하수의 옛말</dd>
        <dt>안해</dt>
        <dd>아내의 옛말</dd>
    </dl>

</body>
</html>
```

### 메디컬 뷰 디자인: 치아 건강 & 서울 아산병원 Step 1.

- 파비콘
- 모바일 최적화

[☆ 참고: \<head\> Cheat Sheet](http://gethead.info/)

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
    <meta charset="UTF-8">
    <title>치아건강 &lt; 서울아산병원</title>
    <!--파비콘-->
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
    <!--모바일 최적화-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="conatiner">
        <div class="header">
            <h5>건강백과</h5>
            <h1>치아 건강, 5가지 올바른 관리법</h1>
            <h6>Medical_01</h6>
            <img src="" alt="">
        </div>
        <div class="main"></div>
        <div class="footer"></div>
    </div>

</body>
</html>
```
