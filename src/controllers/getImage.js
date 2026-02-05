import models from '../models/index.js';

/**
 * Retrieves an image from the database and serves it to the client
 * @param {object} req - The request object
 * @returns {object} - The image data with full URL
 */
const getImage = async req => {
  const host = req.headers.host;
  const protocol = req.protocol;
  const fullUrl = `${protocol}://${host}`;
  const { imgId } = req.query || {};

  if (!imgId) {
    throw new Error('imgId query parameter is required');
  }

  const parsedId = parseInt(imgId, 10);
  if (isNaN(parsedId)) {
    throw new Error(`imgId must be a valid number, got: ${imgId}`);
  }

  const image = await models.Image.findByPk(parsedId, {
    attributes: ['id', 'path', 'name'],
  });

  if (!image) {
    throw new Error(`Image with id ${parsedId} not found`);
  }

  return { id: image.id, url: fullUrl + image.path, name: image.name };
};

export default getImage;
