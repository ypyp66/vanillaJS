### 틱택토 만들기

- index.html엔 아무 내용도 없음
- `<body>` 안에 태그들을 추가하여 제작
- `<script>` 에 코드 작성

### 주요기능

> #
>
> - 사용자 클릭 함수
>
>   - 각 칸 클릭시 이벤트 함수를 호출해 빈 곳이 아니면 경고문을
>     띄움. 승부판단 함수, 무승부 판담 함수, 컴퓨터 턴 함수를 호출
>
> ######
>
> - 승부판단 함수
>
>   - 3x3배열을 검사한 후 결과 return
>
> ######
>
> - 무승부 판단 함수
>   - 3x3배열을 검사하는데, 이때, .flat() 와 .every() 를 >사용하여 한 칸이라도 비었다면 무승부가 아님을 return
>
> ######
>
> - 컴퓨터 턴 함수
>   - 사용자 턴이 끝나면 호출되어 사용자의 클릭을 막은 후 .flat().filter()를 이용해 비어있는 배열을 탐색하고 비어있는 배열의 >길이만큼 랜덤 숫자를 불러와 해당 칸에 사용자와 반대의 문자 기입
>
> #

#### 알게된 것

> .flat(), .every(), .some()
