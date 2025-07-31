// map

// var numbers = ["0","1","2","3","4","5"];
// var num = numbers.map(function(element){
//     return element*2;
// })
// console.log(num)


// var arr = ["12","66","50","77","21"];
// var num = arr.map(function(ele){
//     return ele*3;
// })
// console.log(num);

// var str = ["karthi","John","priya","naga","sathiskumer"];
// var name = str.map(function(ele){
//     return ele[2];
// })
// console.log(name);


//filer

// var age=["35","25","44","52","67","82"];
// var adult=age.filter(function(element){
//      return element>=30;
// })
// console.log(adult);

// var age=["35","25","44","52","67","82"];
// var adult = age.filter(checkage);
// function checkage(element){
//      return element>=18 && element <=60;
// }
// console.log(adult);

// var str = ["karthi","John","priya","naga","sathiskumer"];
// var name = str.filter(function(ele){
//     return ele;
// })
// console.log(name);


// var fruits =['apple','banana','rotten orange','mango','rotten apple','grape'];
// const freshfruits = fruits.filter(x => !x.includes('rotten')); 
// console.log(freshfruits);


// var fruits =['apple','banana','rotten orange','mango','rotten apple','grape'];
// const freshfruits = fruits.filter(isfresh); 
// console.log(freshfruits);

// function isfresh(fruit){
//       return !fruit.includes("rotten");
// }

//objeect

var people = [
      {firstname:"Jimmy",lastname:"Brown"},
      {firstname:"Cindy",lastname:"Malcom"},
      {firstname:"Timoty",lastname:"Stumps"}
];
function listnames(element,index){
      var fullnames = [index + ":" + element.firstname, element.lastname].join(" ");
      return fullnames;
}
console.log(people.map(listnames));