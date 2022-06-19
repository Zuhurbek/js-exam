var nums=[0,10,7,3,-4,-5,0]

function numbers(array){
var a = 0
for (var i = 0; i < array.length; i++) {
  if(array[i]>=0){
    a+=array[i]
  }
}
return a
}
console.log(numbers(nums));