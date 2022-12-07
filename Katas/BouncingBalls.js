/*
Given a 2 points of height and a bounce ratio, how many times will the ball pass over the window observing the ball?
*/

const bouncingBall = (h, bounce, window) => {
  let timesPassed = -1;
  if (bounce > 0 && bounce < 1) while (h > window) timesPassed += 2, h *= bounce;
  return timesPassed;
};