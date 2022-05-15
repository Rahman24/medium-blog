export const fetchDeets = async () => {
  var data = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ericadhawan");
  data = await data.json();
  for (let j in data.items) {
    var i = data.items[j];
    data.items[j].description = i.description.replace(`<div class="medium-feed-item">\n<p class="medium-feed-image"><a href="${i.link}"><img src="${i.thumbnail}" `, '').slice(53).split("<")[0]
  }
  data.feed.author = data.feed.description.slice(10, -10);
  return [data.feed, data.items]
}