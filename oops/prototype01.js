// let myName = "goutam      " ;
// let myLove = "nandini     "
// console.log(myName.truelength);



const myHeros = ['thor' , 'spiderMan'] ;
const heroPower = {
   thor : 'hamar' ,
   spiderMan:'bijli' , 
   getPower: function(){
    console.log(`spidy power of ${this.spiderMan}`);
   }
}

Object.prototype.nandini = function(){
    console.log("i am waiting for you");
}

heroPower.nandini();

myHeros.nandini();

Array.prototype.goutam = function(){
    console.log("goutam is here");
}

// heroPower.goutam();
myHeros.goutam();

//inheritance 
const teacher = {
    makeVideo : true
}
const teachingSupport ={
    isAvailable:false 
}
const taSupport  = {
    fullTime : true ,
    makeAss : 'js'

}