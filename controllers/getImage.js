/**
 * Data that will exist in the Database
 */
const mockDatabaseData = [
  { imgId: 1, url: '/imgs/lobby1.jpg' },
  { imgId: 2, url: '/imgs/lobby2.jpg' },
  { imgId: 3, url: '/imgs/shop3.jpg' },
  { imgId: 4, url: '/imgs/john.jpg' },
  { imgId: 5, url: '/imgs/nick.jpg' },
  { imgId: 6, url: '/imgs/ilias.jpg' },
];

/**
 * Retrieves an image from the server and serves it to the client
 * @param {object} req - The request object
 * @returns {object} - The image data
 */
const getImage = req => {
  const host = req.headers.host;
  const protocol = req.protocol;
  const fullUrl = `${protocol}://${host}`;
  const { imgId } = req.query || {};

  /**
   * The action below will pass to SQL DB as SP
   */
  const { url, ...imgData } = mockDatabaseData.find(
    imageInDataBase => imageInDataBase?.imgId === parseFloat(imgId),
  );

  return { url: fullUrl + url, ...imgData };
};

export default getImage;
