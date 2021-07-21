var Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

const getImages = async (query, quantity) => {
  const results = await google.scrape(query, quantity);
  return results;
};

module.exports = getImages;
