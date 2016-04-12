###### Front-End Design CAMP

### 고정 그리드 시스템 설계

```css
/**
 *
 * 1280-grid-16-80-7-1.css
 * ------------------------------------
 * 데스크탑 사용자의 화면 폭의 평균치 : 1366px
 * ------------------------------------
 * 총 컬럼 개수: 16
 * 유닛(컬럼)+거터: 80px
 * 유닛:거터: 7:1
 * 거터의 방향: 오른쪽(after) [before, after, split]
 * 총 페이지 가로 폭: 80*16 ≒ (1280-10=1270)
 *
 */

/**
 * --------------------------------
 * container
 */
.container {
  width: 1270px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  /*background-image: url("../images/v-gap-10.png");*/
}
.container:hover {
  background-image: url("../images/v-gap-10.png");
}

/**
 * --------------------------------
 * row
 * Clearfix
 */
.container .row::after {
  content: '';
  display: block;
  clear: both;
}

/**
 * --------------------------------
 * col
 */
 /*.container .col {*/
.container [class*="col-"] {
 float: left;
 margin-right: 10px;
}
.container .col-1  { width: 70px;   }
.container .col-2  { width: 150px;  }
.container .col-3  { width: 230px;  }
.container .col-4  { width: 310px;  }
.container .col-5  { width: 390px;  }
.container .col-6  { width: 470px;  }
.container .col-7  { width: 550px;  }
.container .col-8  { width: 630px;  }
.container .col-9  { width: 710px;  }
.container .col-10 { width: 790px;  }
.container .col-11 { width: 870px;  }
.container .col-12 { width: 950px;  }
.container .col-13 { width: 1030px; }
.container .col-14 { width: 1110px; }
.container .col-15 { width: 1190px; }
.container .col-16 { width: 1270px; }

/**
 * --------------------------------
 * push, pull
 */
.container [class*="push-"],
.container [class*="pull-"] {
  position: relative;
}
.container .push-1  { left: 80px;   }
.container .push-2  { left: 160px;  }
.container .push-3  { left: 240px;  }
.container .push-4  { left: 320px;  }
.container .push-5  { left: 400px;  }
.container .push-6  { left: 480px;  }
.container .push-7  { left: 560px;  }
.container .push-8  { left: 640px;  }
.container .push-9  { left: 720px;  }
.container .push-10 { left: 800px;  }
.container .push-11 { left: 880px;  }
.container .push-12 { left: 960px;  }
.container .push-13 { left: 1040px; }
.container .push-14 { left: 1120px; }
.container .push-15 { left: 1200px; }
.container .push-16 { left: 1280px; }

.container .pull-1  { left: -80px;   }
.container .pull-2  { left: -160px;  }
.container .pull-3  { left: -240px;  }
.container .pull-4  { left: -320px;  }
.container .pull-5  { left: -400px;  }
.container .pull-6  { left: -480px;  }
.container .pull-7  { left: -560px;  }
.container .pull-8  { left: -640px;  }
.container .pull-9  { left: -720px;  }
.container .pull-10 { left: -800px;  }
.container .pull-11 { left: -880px;  }
.container .pull-12 { left: -960px;  }
.container .pull-13 { left: -1040px; }
.container .pull-14 { left: -1120px; }
.container .pull-15 { left: -1200px; }
.container .pull-16 { left: -1280px; }

/**
 * --------------------------------
 * prefix, suffix
 */
.container .prefix-1  { padding-left: 80px;   }
.container .prefix-2  { padding-left: 160px;  }
.container .prefix-3  { padding-left: 240px;  }
.container .prefix-4  { padding-left: 320px;  }
.container .prefix-5  { padding-left: 400px;  }
.container .prefix-6  { padding-left: 480px;  }
.container .prefix-7  { padding-left: 560px;  }
.container .prefix-8  { padding-left: 640px;  }
.container .prefix-9  { padding-left: 720px;  }
.container .prefix-10 { padding-left: 800px;  }
.container .prefix-11 { padding-left: 880px;  }
.container .prefix-12 { padding-left: 960px;  }
.container .prefix-13 { padding-left: 1040px; }
.container .prefix-14 { padding-left: 1120px; }
.container .prefix-15 { padding-left: 1200px; }
.container .prefix-16 { padding-left: 1280px; }

.container .suffix-1  { padding-right: 80px;   }
.container .suffix-2  { padding-right: 160px;  }
.container .suffix-3  { padding-right: 240px;  }
.container .suffix-4  { padding-right: 320px;  }
.container .suffix-5  { padding-right: 400px;  }
.container .suffix-6  { padding-right: 480px;  }
.container .suffix-7  { padding-right: 560px;  }
.container .suffix-8  { padding-right: 640px;  }
.container .suffix-9  { padding-right: 720px;  }
.container .suffix-10 { padding-right: 800px;  }
.container .suffix-11 { padding-right: 880px;  }
.container .suffix-12 { padding-right: 960px;  }
.container .suffix-13 { padding-right: 1040px; }
.container .suffix-14 { padding-right: 1120px; }
.container .suffix-15 { padding-right: 1200px; }
.container .suffix-16 { padding-right: 1280px; }

/**
 * --------------------------------
 * first, last
 */
.container .first,
.container .alpha {
  margin-left: 0;
}

.container .last,
.container .omega {
  margin-right: 0;
}
```

