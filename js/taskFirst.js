var nums=[0,1,0,7,4,0,5,0]

function zeroEnd(array){
var a=''
var b=''
for (var i = 0; i < array.length; i++) {
  if(array[i]!=0){
    a+=array[i]
  }else{
    b+=array[i]
  }
}
return a+b
}
console.log(zeroEnd(nums));