export function callApiLike(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(Math.random() * 10 < 5) {
        resolve();
      }else{
        reject('callApiLike fail')
      }
    }, 1000)
  });
}