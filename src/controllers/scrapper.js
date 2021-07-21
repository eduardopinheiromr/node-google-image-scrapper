var Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});

const getImages = async (query, quantity) => {
  const results = await google.scrape(query, quantity);
  return results;
};

const getImagesHandler = async (req, res) => {
  const query = req.params.query;
  const quantity = req.params.quantity ?? 1;

  const results = await getImages(query, quantity);

  const response = {
    query,
    quantity,
    results,
  };
  res.send(response);
};

module.exports = getImagesHandler;
