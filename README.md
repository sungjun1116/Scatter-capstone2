# Scatter-backend
이 프로젝트는 졸업 프로젝트로, 다중이용시설의 예상 혼잡도를 제공해주는 핵심기능을 가진 서비스입니다. 


## Members
* [황성준](https://github.com/sungjun1116) : 백엔드, 지도서비스 개발
* [이형주](https://github.com/gudwnsepdy) : 클라이언트(안드로이드) 개발

> 이 프로젝트는 [Node.js-express 프레임워크](http://expressjs.com/)로 만들어졌습니다.

## Development Configuration
본인의 작업 환경에 만약 node.js가 설치되지 않았다면 node.js를 먼저 설치해 줍니다. [node.js 다운로드 페이지](https://nodejs.org/en/)  
Repository를 다운 받은 후, 다음 명령어를 입력해 줍니다. 

```
$ npm install
or
$ npm i
```

package.json 파일에 작성되어있는 module들이 일괄적으로 설치가 되게 되며 ***node_modules***라는 폴더와 ***package-lock.json***이라는 파일이 경로에 생성된다면 정상적으로 app이 install된 것입니다.  
그런 다음 app을 실행하기 위해 다음 명령어를 입력해 줍니다. 
```
$ node ./bin/www
or
$ npm start
```
App이 `http://localhost:3000`에서 실행됩니다.

- cafe map(http://localhost:3000/)
- restaurant map(http://localhost:3000/restaurant)
- gym map(http://localhost:3000/gym)
- news(http://localhost:3000/news)


## Feature
![image](https://user-images.githubusercontent.com/59200428/101356776-eec7d900-38db-11eb-8801-7c0df600aca7.png)

이 프로젝트는 다중이용시설 예상 혼잡도 제공과 함께 코로나 19와 관련된 정보를 제공하는 기능을 가지고 있습니다.   
> 실제로는  웹페이지로 만들어진 지도서비스가 안드로이드 앱에 웹뷰 형태로 삽입되는 구조로, 디렉토리를 다운받아 실행되는 웹페이지 화면과 안드로이드 앱 화면을 캡쳐한 상기 이미지는 다소 차이가 있을 수 있습니다. 
* MAP(등록된 카페, 헬스장, 식당의 예상 이용객 수와 좌석 점유도 확인)
* Admin(로그인 후 손님의 QR코드를 스캔)
* 코로나 일일 확진자 수 표시
* News(웹 크롤링 기술을 통한 코로나와 관련된 뉴스 제공)

### Main Menu
<img width="600" alt="main" src="https://user-images.githubusercontent.com/59200428/101358711-95ad7480-38de-11eb-9fb6-4fce5e9b4e8a.PNG">

### MAP(Cafe, restaurant, gym)
<img width="600" alt="map" src="https://user-images.githubusercontent.com/59200428/101358719-96dea180-38de-11eb-8093-48794430ea1d.PNG">

### Admin
<img width="600" alt="admin" src="https://user-images.githubusercontent.com/59200428/101358714-96460b00-38de-11eb-94a1-d2bb83b19dd8.PNG">

### News
<img width="400" alt="news" src="https://user-images.githubusercontent.com/59200428/101358709-9514de00-38de-11eb-82da-fc34e86f707b.PNG">

**[시연 영상](https://youtu.be/cZTpfFr4Uck)**


## License
MIT License




