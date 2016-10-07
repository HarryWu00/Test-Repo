//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocat(n,a){

  this.name = n
  this.arms = a
  this.slap = function(){

    for(var i=0;i<this.arms;i++){
      conosle.log("SLAP");
    }
  }
}



//Write your 3 new octocat objects below here.
var myoctocat = new Octocat("Aden",563)
var hisoctocat = new Octocat("joe",1616)
var heroctocat = new Octocat("123",6565)

console.log(myoctocat,"arms")
