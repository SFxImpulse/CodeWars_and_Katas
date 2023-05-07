// Given an array of strings, return the number of smiley faces that are in that array:

const countSmileys = arr => {

  const smileys = [":)", ";)", ":-)", ";-)", ":~)", ";~)", ":D", ";D", ":-D", ";-D", ":~D", ";~D"];
  let result = 0;
  
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < smileys.length; j++){
      if (arr[i] === smileys[j]) {
        result++;
      }
    }
  }

  return result;

};

// Refactored:

const countSmileysV2 = arr => arr.filter(element => /^[:;][-~][)D]/.test(element)).length;