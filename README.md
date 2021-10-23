# 🤺 chat-front
### 채팅 화면 구성 ###

해당 화면은 앞으로 채팅 화면으로 사용되며, 뒤에 백단만 Spring , Kotlin, Node.js 로 구성 될 예정입니다.
***
## 📜스팩

- Vue
- Webpack
- Router

***

## 📜 폴더구조 
```
chat-front
    ㄴ config : 전체적인 설정 필요시 사용
    ㄴ src : 화면에 사용되는 모든게 들어있는 폴더
        ㄴ components : Vue에 사용되는 커스텀 Component 위치 
        ㄴ image : CSS에 사용되는 이미지
        ㄴ router : Vue 라우터 설정
        ㄴ views : 각 화면
        App.vue : 최상위 Vue
        index.html : 최상위 Html
        main.js : 최상위 javaScript
```

***

## 📜문법

- 실행
```shell
npm run serve
```
- 빌드
```shell
npm run build
```
- 빌드 초기화
```shell
npm run clean
```
