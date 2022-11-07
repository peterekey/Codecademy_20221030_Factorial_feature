const Calculate = {
  factorial(num) {
    let result
    if (num != 0) {
        result = num;
        for(let i = num - 1; i > 0; i--) {
            result *= i;
         }

    } else {
        result = 1;
    } 
    return result;
  }
}

module.exports = Calculate;


