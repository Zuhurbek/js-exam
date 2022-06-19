var nums=[true,false,true,false,true,false]

function countTrue(array){
var a = 0
for (var i = 0; i < array.length; i++) {
  if(array[i]){
    a++
  }
}
return a
}
console.log(countTrue(nums));