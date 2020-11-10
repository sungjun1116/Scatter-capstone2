'use strict';
const request = require('request')
const express = require('express')
const router = express.Router()
const cheerio = require('cheerio')  // Crawlling 관련 module
const template = require('../lib/template')

/* GET home page. */
router.get('/', function (req, res, next) {
  const crawllingByNewsHome = () => {
    request('https://news.daum.net/', async function (error, response, body) {
      const $ = cheerio.load(body);
      let aArr = [];
      aArr = $("a");

      let newsArr = [];
      for (let i = 0; i < aArr.length; i++) {
        if (aArr[i].attribs.href.includes("news.v.daum.net") && ((aArr[i].attribs.class.includes('link_txt'))))
          newsArr.push(aArr[i].attribs.href);
      }

      let urlParse = [];
      for (let url of newsArr) {
        urlParse.push(await template.getUrl(url));
      }

      let newspage = [];
      for (let i of urlParse) {
        if (i.title.includes("코로나") || i.title.includes("백신")) {
          newspage.push(i);
        }
      }


      const news = template.news(newspage);
      const html = template.HTML(news);

      res.send(html);
    })
  }
  crawllingByNewsHome();
});

module.exports = router;