const getImages = async (query, quantity) => {
  const results = await google.scrape(query, quantity);
  return results;
};

export { getImages };
