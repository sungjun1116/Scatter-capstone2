'use strict';
const request = require('request')
const cheerio = require('cheerio')


// 도시정보, 시간정보, 뉴스정보 모두를 취합해서 구성한 HTML page 
exports.HTML = (news) => {
  return `
  <!doctype html>
  <html>
  <head>
    <title>Scatter News</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  <!-- open souce CDN -->
    <link rel="stylesheet" type="text/css" href="/stylesheets/country.css">
  </head>
    <body>
        <div style="padding-left:16px">
          ${news}
        </div>         
      <script>
        function myFunction() {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }
      </script>
        </body>
        </html>
    `;
}


// news url 에서 title, content, category를 따로 parsing하여 사용하는 기능
exports.getUrl = url => {
  return new Promise(resolve => {
    request(url, (err, res, body) => {
      const $ = cheerio.load(body);
      let category = $(".gnb_comm")[0].attribs['data-category'];
      let title = $(".tit_view")[0].children[0].data;
      let contentArr = $('#harmonyContainer p');
      let content = "";
      for (let i = 0; i < contentArr.length; i++) {
        content += contentArr[i].children[0].data + " ";
      }
      let makepage = new page(url, category, title, content);

      function page(url, category, title, content) {  // page Object 생성
        this.url = url;
        this.category = category;
        this.title = title
        this.content = content;
      }
      resolve(makepage);
    })
  })
}


// 뉴스 정보 제공
exports.news = urlParse => {
  let list = '<ul>';
  let i = 0;

  while (i < urlParse.length) {
    list = list + `<li>[Category: ${urlParse[i].category}]
    <a href="${urlParse[i].url}" target="blank">
    <p id="news_title">${urlParse[i].title}</p></a>
    <p class="content">${urlParse[i].content}</p></li>
    `;
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}
