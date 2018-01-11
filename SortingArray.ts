export class ArraySort {
  ArraySort(){
  var inputArray = [5];
  var n;
  n= prompt("Enter the no of Elements");
  prompt("Enter the "+n + "digits");
  for(var i=0;i<n;i++){
      var num;
      num = prompt("enter element");
   inputArray[i] = parseInt(num);
  }
  console.log("Sorted Array"+this.sortArray(inputArray));
  }
   sortArray = function(input :number[]){
   for (var i=0; i<input.length; i++){
       for(var j=0; j<input.length; j++){
           if(input[i] > input[j]){
               var max = input[i];
               input[i] = input[j];
               input[j] = max;
           }
       }
   }
   return input; 
  }
}