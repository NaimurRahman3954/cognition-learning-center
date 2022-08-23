// Problem:1  radianToDegree
function radianToDegree(radian){
   if(typeof(radian)!="number"){
      return "Provide a valid parameter type (e.g. number)";
   }
   else{
      let degree =  radian*180/3.1416;
      return degree.toFixed(2);
   }
}
// let answer = radianToDegree(true);
// console.log(answer);


// Problem:2  isJavaScriptFile
function isJavaScriptFile(fileName){
   if(typeof(fileName)!="string"){
      return "Provide a valid parameter type (e.g. string)";      
   }
   else{
      let fileExtension = fileName.slice(-3);   //extracting last 3 characters from the filename
      if (fileExtension.toLowerCase() == ".js"){
         return true;
      }
      else{
         return false;
      }
   }
}
// let answer = isJavaScriptFile("app.js");
// console.log(answer);


// Problem:3  oilPrice
function oilPrice(diesel, petrol, octane){
   if(typeof(diesel) != "number" || typeof(petrol) != "number" || typeof(octane) != "number"){
      return "Provide a valid parameter type (e.g. non-negative number)";
   }
   else if(diesel < 0 || petrol < 0 || octane < 0){
      return "The amount cannot be a negative number"
   }
   else{
      return (diesel*114 + petrol*130 + octane*135);
   }
}
// let answer = oilPrice(1,"hello",-2);
// console.log(answer);


// Problem:4  publicBusFare
function publicBusFare(noOfPeople){
   if(typeof(noOfPeople) != "number"){
      return "Provide a valid parameter type (e.g. non-negative number)";
   }
   else if(noOfPeople < 0){
      return "The number of people cannot be a negative number"
   }
   return ((noOfPeople%50)%11)*250; //calculating the number of people taking the public bus using the concept of remainder
}
// let answer = publicBusFare("twelve");
// console.log(answer);


// Problem:5  isBestFriend
function isBestFriend(person1, person2){
   if(typeof(person1) != "object" || typeof(person2) != "object"){
      return "Provide a valid parameter type (e.g. object)";
   }
   else{
      if (compString){
         console.log(person1.name);
         console.log(person2.friend);
         return true;
      }
      else{
         return false;
      }
   }
}
let answer = isBestFriend({ name: "abul", friend: "kabul" }, { name: "kabul", friend: "sabul" });
console.log(answer);