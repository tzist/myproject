1. React + ReactStrap + scss 사용 
   + express + (DB)
   * 이외 jade, babel도 공부해보기.  

2. Code Review는 Gerrit으로 할 예정

3. Commit 형식 지정

* 새로운 폴더 생성 시 track에 올립시다.

설치 방법 :
1) 프로젝트 다운로드
2) package.json이 있는 폴더에서 npm install 또는 yarn install
3) npm 모듈 설치 : npm intall (-g)
4) npm 모듈 제거 : npm uninstall
5) yarn 모듈 설치 : yarn install
6) node 모듈 확인 : npm ls (-g)

:Title: ( Title )

:Detailed Notes: ( 설명 )

:Reference: ( 관련 기술 / 사이트 주소 )

=> commit.template을 사용하여 지정 : 커밋할 때 Git이 보여주는 커밋 메시지는 이 옵션에 설정한 템플릿 파일이다. 

(1) 임의의 파일에 commit 형식 지정

(2) git config --global commit.template (파일이름)

(3) 이후 git commit 시 지정한 commit 형식이 자동으로 나타난다.

(4) 지정 해제 :  git config --global --unset-all commit.template

(5) 확인 : git config --get commit.template


4. 참고
(1) git 명령어
- git init : 새로운 저장소 초기화하기
- git clone <저장소 url> : 저장소 복제하기
- git remote add <원격 저장소> <저장소 url> : 새로운 원격 저장소 추가하기
- git pull <원격 저장소> : 원격 저장소에서 변경 사항을 가져와 현재 브랜치에 합치기
- git pull : origin 저장소에서 변경 사항을 가져와 현재 브랜치에 합치기
- git push <원격 저장소> <지역 브랜치>:<원격 브랜치> : 지역 브랜치를 원격 브랜치에 푸싱하기
- git push <원격 저장소> <지역 브랜치> : 지역 브랜치를 동일한 이름의 원격 브랜치에 푸싱하기
- git push <원격 저장소> <지역 브랜치> : 새로운 로컬 브랜치를 원격 저장소에 푸싱하기
- git branch <branchname> : 새로운 지역 브랜치 만들기
- gerrit 코드 리뷰를 위한 push : git push origin HEAD:refs/for/master

2019-05-30
1) npm install, yarn install이 안 될 때는
> npm cache clean, yarn cache clean 고고

2) 스타일을 인라인으로 지정할 때, 화면을 표시하는 return 부분에 <style></style> 태그 넣기

3) react의 component 종류는 3가지가 있다.
    a) controlled (no internal state)
    b) uncontrolled (internal state)
    c) mixed (uncontrolled by default, unless some props are passed to make it controlled)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
