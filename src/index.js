module.exports = function warmup(temperature) {
  if(typeof temperature == 'number') {
    return (temperature * (9/5)) + 32
  } else {
    console.log("temperature is not a 'nubmer'")
    return convetTemp 
  }
};
