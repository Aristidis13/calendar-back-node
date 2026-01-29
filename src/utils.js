import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HOUR_FORMAT = 'HH:mm:ss';

/**
 * Converts a dayjs time to string in a HH:mm format
 * @param {dayjs} time - The time to convert
 * @returns - the time in format 'HH:mm'
 */
const convertTimeToUIFormat = time => {
  if (!time) console.error('convertTimeToUIFormat: time (dayjs object) is missing');
  return typeof time === 'string'
    ? time.split(':').slice(0, -1).join(':')
    : typeof time === 'object'
      ? time.format(HOUR_FORMAT).split(':').slice(0, -1).join(':')
      : null;
};

export { __dirname as dirname, convertTimeToUIFormat };
