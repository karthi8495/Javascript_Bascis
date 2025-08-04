
//callback
// var data = document.getElementById("data");

// const fetchUser = function(username){
//     return new Promise(function (resolve,reject){
//          setTimeout(function(){
//             console.log("Fetching user from the API...");
//             resolve(username);
//     },2000);
//     });  
// };

// console.log(fetchUser("John"));

// const fetchUserPhotos = function(username,callback){
//     setTimeout(function(){
//       console.log("Fetching photos for",username);
//       callback(['Photo 1','photo 2']);
//     },2000);
// };

// fetchUser("John",function (user){
//     console.log("Your name is:",user);
//     fetchUserPhotos(user,function(photos){
//      console.log("Your Photos are:",photos)
//     });
// });


//Syntrax of Promise object

//sample code
let promiseobj = new Promise(function(resolve,reject){
    console.log("Getting name from DB...");
    setTimeout(function(){
        resolve("John");
//      reject("Error occured");
    },2000);
});


// defining the consumer
promiseobj
.then(function(name){
   console.log("Name received from DB:", name)
})
.catch(function(error){
   console.log("Error Occured:", error)
});