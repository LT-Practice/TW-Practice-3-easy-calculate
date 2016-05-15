function calculate_median(arr) {
  //请勿改动函数名
var sum=0;
var n=1;
var arr2 = new Array();


var i;
//ji shu

if(arr.length%2==1){
  for (var i = 1; i < arr.length; i=i+2,n++) {
    sum+=arr[i];
     zws = sum/n;
  }
}

//ou shu
else if(arr.length%2==0){
  for (var i = 1; i < arr.length; i=i+2,n++) {
    arr2[n]=arr[i];
    zws = arr2[ ((arr.length/2)+1)/2 ];
  }

}

 return zws;
}

module.exports = calculate_median;
