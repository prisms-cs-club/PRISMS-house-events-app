import { verticalScale } from "./responsiveSize";

const MAX_BAR_HEIGHT = 270;
const MIN_BAR_HEIGHT = 150;

/**
 * Get the height (in pixels) of the ith bar in the house leaderboard.
 * @param {number} place The place of the house in the list
 * @param {number} totalPlaces Total number of places.
 *                             Default is 4. If many houses have the same score, `totalPlaces` is less than 4.
 * @returns 
 */
export function getBarHeight(place, totalPlaces = 4) {
  if(totalPlaces == 1) {
    return (MAX_BAR_HEIGHT + MIN_BAR_HEIGHT) / 2;
  }
  return MIN_BAR_HEIGHT + (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) * (place - 1) / (totalPlaces - 1);
}
