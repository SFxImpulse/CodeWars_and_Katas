// Given a function that takes three integers, return zero or a higher integer based on the three integers:

const enough = (cap, on, wait) => {
  if (on + wait <= cap) {
    return 0;
  } else {
    return (on + wait) - cap;
  }
}

// Refactored:

const enoughV2 = (cap, on, wait) => on + wait <= cap ? 0 : (on + wait) - cap;

// Using Math:

const enoughV3 = (cap, on, wait) => Math.max(wait + on - cap, 0);