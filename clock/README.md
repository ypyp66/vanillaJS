### JAVASCRIPT 30 #2

#### clock

---

### 알게된 내용

#### - javascript

```javascript
<script>
      const second = document.querySelector(".second");
      const minutes = document.querySelector('.min');
      const hours = document.querySelector('.hour');

      const SECOND_DEGREE = 6; /*초당 6도*/
      const MIN_DEGREE = 6; /*분당 6도, 초당 0.5도*/
      const HOUR_DEGREE = 30; /*시간당 30도, 분당 0.5도*/

        function setDate() {
          const date = new Date();
          const currentSecond = date.getSeconds();
          const curretnMinutes = date.getMinutes();
          const curretnHour = date.getHours();

          const secondDegree = 90 + (currentSecond * SECOND_DEGREE);
          const minDegree = 90 + (curretnMinutes*MIN_DEGREE) + (0.1 * currentSecond);
          const hourDegree = 90 + (curretnHour * HOUR_DEGREE) + (0.5 * curretnMinutes);

          second.style.transform = `rotate(${secondDegree}deg)`;
          minutes.style.transform = `rotate(${minDegree}deg)`;
          hours.style.transform = `rotate(${hourDegree}deg)`;
        }

        setInterval(setDate, 1000);
    </script>

```

#### - css

```css
.hand {
    /*.clock-face 기준*/
    width: 50%;
    position: absolute;
    top: 50%;
    transform-origin: 100% 50%; /*회전축 정하기*/
    transform: rotate(90deg); /*초기 세팅*/
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0,1.2,1,1.55);
  }
  /*
    position: relaitve => 위치를 변경하고자 할 때 사용
    position: absolute => position: static 속성을 가지고 있지 않은 부모를 기준으로 움직임
    transform-origin: 100% 50% => 회전축 정하기 (오른쪽 끝, 밑 50%)
```
