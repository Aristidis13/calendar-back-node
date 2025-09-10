import postReservationModel from '../models/postReservation.js';

/**
 * Controller for posting reservation to the database
 * @param {Object} req - The request
 * @returns {{reservationIsSaved: boolean}} - flag to show if everything went smooth while saving the reservation
 */
function postReservation(req) {
  const dbResponse = postReservationModel(req);

  return dbResponse;
}

export default postReservation;
