### JAVASCRIPT 30 #3

#### css_variables

### 1. root속성 정의

**`:root` 란 문서의 최상위 요소를 가리킴. 가상선택자로서 html보다도 우선순위가 높다**

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 0px;
  --text: 30px;
}

/*var( )로 적용할 수 있다.*/
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
.h1 {
  color: var(--base);
}
.text {
  font-size: var(--text);
  filter: blur(var(--blur));
}
```

### 2. main.js 작성

```javascript
const inputs = document.querySelectorAll(".controls input");
```

먼저 .controls 내의 input태그를 모두 갖고 온다.
이때 반환형태는 배열이 아닌 NodeList 이다. 배열은 아니지만 forEach()를 사용하여 반복할 수 있다.

#

```javascript
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
```

`mousemove`와 `update`가 있는데 각각 마우스가 움직일때, 값이 업데이트 되었을 때 동작한다. 실시간으로 반영하기위해 **mousemove**를 사용함.
inputs의 값 하나하나가 업데이트 될 때 마다 `handleUpdate`가 실행된다.

#

```javascript
function handleUpdate() {
  const px = this.dataset.sizing || "";

  document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
}
```

`document.documentElement.style.setProperty("{스타일 이름}", "{스타일 내용}")`으로 `:root`의 변수값을 업데이트 해준다. 여기서 `this.name`과 `this.value`는 input의 name과 value이다.

`const px = this.dataset.sizing || ""; ` 는 color의 경우 뒤에붙는 단위가 없기 때문에 undefined일 때 처리하기 위함이다.
