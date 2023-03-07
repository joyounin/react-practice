ex04: CSS Module 번들링 하기

1. 설치 패키지
[ex01]$ npm i -D webpack webpack-cil webpack-dev-server style-loader css-loader

2. CSS Loader 설정(webpack.config.js) 
    module:{
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }]
    }

3. 스크립팅
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

3. 빌드
[ex01]$ npm run build

4. 실행
[ex01]$ npm start
