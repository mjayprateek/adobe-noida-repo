// function async (generator) {
//     return function () {
//     var iterator = generator.apply(this, arguments);//invoke Generator function
//   //  console.log(iterator.next());
//     function handle(result) {
//             if (result.done) 
//             {
                    
//                 return Promise.resolve(result.value);
//             }

//             return Promise.resolve(result.value).then(function (res) {
//     return handle(iterator.next(res));
//     },
    
//     function (err) {
//     return handle(iterator.throw(err));
//     });
//     }

//     try {
//     return handle(iterator.next());
//     } catch (ex) {
//     return Promise.reject(ex);
//     }
// };
// }

// as
// ync(function *() {
//     try {
//     var result = yield Promise.resolve("hello");
//     console.log(result);
//     } catch (err) {
//     console.log('caught in async routine');
//     console.log(err);
//     }
//   })();

  
// //   function * testIterator(){
// //     var result=  yield Promise.resolve("hello"); //{done:false,value:instance of promise}
// //     console.log(result)
// //       return;
// //   }


// //   var iterator=testIterator.apply(null,null);
// //   console.log(iterator.next());
// //   console.log(iterator.next());



function * Test(){
    yield 0;
    yield 1;
    yield 2;
}


var iterator=Test();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());