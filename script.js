//Answer1-flags
var TODORequest=new XMLHttpRequest();
TODORequest.open("Get","https://restcountries.com/v3.1/all");
 TODORequest.addEventListener('load', function (){
  console.log(this.response)
    iterate(JSON.parse(this.response))
    });
TODORequest.send()
console.log(TODORequest)
 function iterate(data = []) {
  for (var x = 0; x < data.length; x++) {
    console.log(data[x].flags)
  }}

  
 // Question2- Compare two JSON with same properties with different order?
//Answer-
//let obj1={name:"Person1",age:5};
//let obj2={age:5,name:"Person1};
let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var assumption=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            assumption=false;
            break;
        }
    }
}
else {
    assumption=false;
}
console.log(assumption);
//output:
//true
//its mean that both the object is same or equal 
//using this method we compare  the object with same properties but different order.. 

//Answer3-
var TODORequest=new XMLHttpRequest();
TODORequest.open("Get","https://restcountries.com/v3.1/all");
 TODORequest.addEventListener('load', function (){
  console.log(this.response)
    iterate(JSON.parse(this.response))
    });
TODORequest.send()
console.log(TODORequest)
 function iterate(data = []) {
  for (var x = 0; x < data.length; x++) {
    console.log(data[x].countriesnames)
    console.log(data[x].regions)
    console.log(data[x].sub_regions)
    console.log(data[x].population)
  }}