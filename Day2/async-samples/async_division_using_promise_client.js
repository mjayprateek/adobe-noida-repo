var asyncDivision=require('./async_division_using_promise')

// callback oriented usage 
asyncDivision(10, 2, (error, result) => { 
    if (error) { 
      return console.error(error); 
    } 
    console.log(result); 
  }); 
   
  // promise oriented usage 
//   asyncDivision(22, 0) 
//     .then(result => console.log(result)) 
//     .catch(error => console.error(error)); 