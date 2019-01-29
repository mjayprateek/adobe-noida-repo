module.exports = function asyncDivision (dividend, divisor, cb) { 
    return new Promise((resolve, reject) => {               // [1] 
   
      process.nextTick(() => { 
        const result = dividend / divisor; 
        if (isNaN(result) || !Number.isFinite(result)) { 
          const error = new Error('Invalid operands'); 
          if (cb) { cb(error); }                            // [2] 
          return reject(error); 
        } 
   
        if (cb) { cb(null, result); }                       // [3] 
        resolve(result); 
      }); 
   
    }); 
  }; 
  
  //1.First, were return a new promise created using the Promise constructor. We define the whole logic inside the function passed as argument to the constructor
  //2.In the case of an error, we reject the promise, but if the callback was passed at call time, we also execute the callback to propagate the error.
  //3.After we calculate the result we resolve the promise, but again, if there's a callback, we propagate the result to the callback as well


