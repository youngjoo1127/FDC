###### Front-End Design CAMP

# DAY01

### Front-End Environment

#### 1. Sign in [GitHub.com](http://github.com/)

버전 관리도구: __github.com__에 가입

-

#### 2. Install [Sublime Text Editor](http://sublimetext.com/3)

텍스트 에디터: __sublimetext__ 설치 (각 운영체제에 맞춰 설치)

-

#### 3. Setting [GitHub Page](https://pages.github.com/)

GitHub 페이지(Page) 저장소 추가/파일생성/커밋/싱크

1. [`{username}.github.io`](https://github.com/yamoo9/yamoo9.github.io) 저장소 생성
1. [`github for {OS}`](https://desktop.github.com/) GUI 도구 설치
1. 온라인 저장소 복제(Clone Online GitHub Repository)
1. `README.md` 생성/수정
1. 변경사항 커밋(Commit)
1. 커밋 싱크(Sync)

##### README.md 파일 추가

`README.md` 문서는 GitHub 저장소를 소개하는 내용을 출력하는 [Markdown](https://daringfireball.net/projects/markdown/) 문서

```md
# yamoo9.github.io

yamoo9's Personal Website.

## TODO

### Make Directories & Files

- [x] `index.html`
- [x] `css/style.css`
- [x] `images/`
```

##### 수업 과정에서 작성한 파일

`index.html`

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <title>yamoo9.github.io &gt; yamoo9's Personal WebPage</title>
    <!-- Link CSS File -->
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>

    <!-- heading 1 -->
    <h1>Lecture for Web Design</h1>

  </body>
</html>
```

`css/style.css`

```css
body {
  margin: 0;
  height: 100vh;
  background: url("../images/photo-bg-1920.jpg") no-repeat center;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-weight: 100;
  letter-spacing: 0.23em;
}
```

##### 변경 사항 Commit > Push(Sync)

변경 사항이 발생할 때 마다, 내용을 요약(Summary) 정리하여 `commit` 메시지 추가.

`commit` 완료 후, `sync`하여 로컬 파일을 온라인 GitHub 저장소에 업데이트.

---

## Homework

__Comming Soon__ Page Design [ PSD | Sketch ]

![](https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/ticker-coming-soon-html-website-template.jpg)
