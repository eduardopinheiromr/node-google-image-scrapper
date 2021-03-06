const { getImages } = require("../utils");

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
