const Story = require('../models/story.model.js');
const fetch = require("node-fetch");

const RetreiveNews = () => {
  fetch("https://hn.algolia.com/api/v1/search_by_date?query=nodejs", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()).then((resp) => {
    resp.hits.forEach((news) => {
      let title = news.story_title === null ? news.title : news.story_title;
      let url = news.story_url === null ? news.url : news.story_url;
      if (title) {
        const story = new Story({
          title,
          author: news.author,
          date: news.created_at,
          url: url
        });
        story.save()
        .then(data => {
          return data;
        }).catch(err => {
          return;
        });
      }
    })
    return resp;
  }).catch((error) => {
    console.log(error)
  });
};

module.exports = RetreiveNews;
