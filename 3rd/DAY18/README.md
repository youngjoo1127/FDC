# DAY 18

### 장치 별 사양 통계자료 확인

- [material.io/devices](https://material.io/devices/)
- [viewportsizes.com](http://viewportsizes.com/)
- [troy.labs.daum.net](http://troy.labs.daum.net/)

-

### 반응형 그리드 시스템 제작하기

```css
/*! rwd-grid.css © yamoo9.net, 2016 */

/*

 RWD = Responsive Web Design Layout
 Breakpoint ---------------------------------------------

 Mobile       : 0    - 767
 Tablet       : 768  - 1023
 Desktop      : 1024 - 1366
 Wide Screen  : 1367 - ...

 Keywords -----------------------------------------------
 Mobile       : xs | m
 Tablet       : md | t
 Desktop      : lg | d
 Wide Screen  : xl | w

*/
```

### 반응형 그리드 시스템(Responsive Grid System)

#### 워크프로세스

- __Mobile First__<br>
Mobile → Tablet → Desktop
- __Desktop First__<br>
Desktop → Tablet → Mobile

> Desktop First방식을 사용할 경우 문제점
> - CSS 를 불러올때 브라우저는 첫번재 줄부터 마지막 줄까지 순차적으로 코드를 읽는다.
> 이때 Desktop First 방식을 사용할경우 모바일사용자는 Desktop 코드를 모두 읽고난 후에야 Mobile 코드를 읽어 화면에 출력하게 된다. 이럴경우 데이터를 사용하는 모바일 사용자는 데이터를 낭비하게 된다.
> - hover기능은 마우스를 올렸을때 작동하는 기능인데 Mobile에서는 마우스를 올린다는 개념이 없기 때문에 hover의 효과를 어떻게 대처해야하는지를 다시한번 고려해야한다.

그렇기 때문에 Mobile First 방식을 권장한다.

-

### 유연한 그리드 시스템(Flexible Grid System)

#### 그리드 시스템 모듈

- `container`
- `row`(`grid`)
- `col`(`cell`)
- `gutters` | `gutter-before` | `gutter-after`

#### 컬럼 모듈

- `col-1of2`(`col--1-2`)
- `col-1of3`(`col--1-3`)
- `col-2of3`(`col--2-3`)
- `col-1of4`(`col--1-4`)
- `col-2of4`(`col--2-4`)
- `col-3of4`(`col--3-4`)

#### 유틸리티 모듈

- `offset`(`prefix`|`suffix`)
- `push`|`pull`
- `isolate`

## 반응형 그리드 시스템(Responsive Grid System)

#### 워크프로세스

- __Mobile First__<br>
Mobile → Tablet → Desktop
- __Desktop First__<br>
Desktop → Tablet → Mobile

#### 중단점 모듈 프리픽스

- `s` | `xs`(`mobile`)
- `s` | `sm`(`mobile`)
- `m` | `md`(`tablet`)
- `l` | `lg`(`desktop`)
- `l` | `xl`(`wide`)

#### 컬럼 모듈

- `{s}-1of2`(`{xs}--1-2`)
- `{m}-1of3`(`{sm}--1-3`)
- `{l}-2of3`(`{md}--2-3`)
- `{s}-1of4`(`{lg}--1-4`)
- `{m}-2of4`(`{xl}--2-4`)
- `{l}-3of4`(`{xs}--3-4`)

-

### 플렉스박스 모던 기술을 사용한 그리드 시스템(Flexbox Grid System)

지금까지의 CSS 레이아웃은 `float` 또는 `position` 등을 사용하여 제작했습니다. 그러나 이러한 기술들은 요구되는 레이아웃을 구현하기에는 각각 취약점을 가지고 있습니다.

`float`의 경우는 해제(clear)를 설정하지 않을 경우 다음에 위치한 요소에 영향을 미치는 문제가 있으며, 이 문제를 해결하기 위한 방법을 사용할 경우 `::before`, `::after`를 사용하기에 다른 용도로는 사용될 수 없는 문제 또한 가집니다.

`position`의 경우는 그리드 시스템보다는 각 객체 간 정밀한 위치 조정에 더 많이 사용되고 있습니다. 그리드 시스템에는 적합하지 않기 때문이죠.

Flexbox는 이러한 문제를 모두 해결하는 모던 레이아웃 CSS 모듈입니다. Flexbox를 사용한 그리드 시스템은 아래 나열된 요구사항을 모두 충족합니다.

#### 그리드 시스템 요구사항

- 기본적으로 행(`row`)의 각 그리드 셀(`cell`)은 같은 폭과 높이를 가짐.
- 더 세심한 조정을 위한 각각의 그리드 셀(`cell`) 크기 클래스 속성을 추가. 클래스 속성이 없으면 남은 공간을 자동 배분.
- 반응형 그리드(Responsive Grid)를 위한 미디어쿼리 프리픽스 클래스 속성을 그리드 셀에 적용 가능.
- 각 행의 콘텐츠를 수평 방향(`left` | `center` | `right`)으로, 각 그리드 셀은 수직 방향(`top` | `middle` | `bottom`)으로 정렬 가능.
- 모든 그리드 셀에 동일한 설정을 원한다면 행에 이를 제어하기 위한 클래스 속성을 추가하는 것으로 불 필요한 반복을 제거.
- 중첩된 그리드 레이아웃이 가능.

#### 플렉스박스 그리드시스템

- 유연한 그리드(Fluid grid)
- 반응형 그리드(Responsive grid)
- 스마트 컬럼(Smart columns)
- 거터 제거(Gutterless)
- 중첩 그리드 레이아웃(Subgrids)
- 순서 변경(Reverse order)
- 정렬(Alignment)
- 감춤(Hide)
