
const users = [{
    id: 1,
    name: 'venu',
    schoolId: 101
  }, {
    id: 2,
    name: 'gopal',
    schoolId: 999
  }];

  const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
  }, {
    id: 2,
    schoolId: 999,
    grade: 100
  }, {
    id: 3,
    schoolId: 101,
    grade: 80
  }];

const getUser=(id)=>{
    return new Promise((resolve,reject)=>{
       let user= users.find(user=>user.id==id);
       if(user){
           resolve(user);
       }
       else{
           reject('Unable to find user with id of ${id}.');
       }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
      resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
  };



const getViaAsync = async (userId) => {
    return 'venu';
  };
  
  const getViaPromise=function(id){
      return new Promise((resolve,reject)=>{resolve("venu");});
  };


  getViaAsync(1).then((name)=>console.log(name));
  console.log(getViaAsync(1));
  getViaPromise(1).then((name)=>{console.log(name)});

  const getErrorViaAsync=async (userId)=>{
      throw new Error("Testing error");//reject
      return "venu";
      
  };

//   getErrorViaAsync().
//   then((name) => { console.log(name);})
//   .catch((e) => {
//     console.log(e.name);
//   });

  const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
  
    let average = 0;

  if (grades.length > 0) {
    average = grad
    es.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
  }

  return `${user.name} has a ${average}% in the class.`;
  };

  getStatusAlt(1).then((status)=>console.log(status));


  const getViaAsync = async (userId) => {
    return 'venu';
  };

  console.log(getViaAsync(10));