# ui-example

UI 예제 테스트

1. package.json 생성후 초기화

```
  npm init
```

2. 필요한 라이브러리 설치

- react: 리액트 라이브러리
- react-dom: 브라우저를 위한 DOM 메소드 제공
- react-router-dom: 브라우저를 위한 라우팅 기능 제공
- @babel/core: 바벨을 사용하기 위한 필수 라이브러리
- @babel/preset-react: jsx문법을 javascript로 컴파일
- @babel/preset-env: 최신 자바스크립트 기능을 ES5로 트랜스파일 해주는 라이브러리
- babel-loader: 바벨과 웹팩을 이용해 자바스크립트 파일을 트랜스파일링 해줌
- html-webpack-plugin: 웹팩 번들에 html파일을 제공
- css-loader: css 파일을 import OR require 할 수 있게 해주는 라이브러리
- style-loader: 읽은 css 파일을 style 태그로 만들어 head 태그 안에 삽입
- webpack: 웹팩을 사용하기 위한 필수 라이브러리
- webpack-cli: 웹팩 커맨드라인 인터페이스
- webpack-dev-server: 웹팩 개발서버 라이브러리

```
  npm react react-dom
  npm install --save-dev @babel/core babel-loader @babel/preset-react @babel/preset-env
  npm install --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin
```
