import postReservationModel from '../models/postReservation';

/**
 * Controller for posting reservation to the database
 * @param {Object} req - The request
 * @returns {{reservationIsSaved: boolean}} - flag to show if everything went smooth while saving the reservation
 */
function postReservation(req) {
  const dbResponse = postReservationModel(req);
}

export default postReservation;
