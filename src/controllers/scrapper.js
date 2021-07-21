var Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

const getImages = async (query, quantity) => {
  const results = await google.scrape(query, quantity);
  return results;
};

const getImagesHandler = async (req, res) => {
  const query = req.params.food;
  const quantity = 1;

  const results = await getImages(query, quantity);
  res.send(results);
};

module.exports = getImagesHandler;
