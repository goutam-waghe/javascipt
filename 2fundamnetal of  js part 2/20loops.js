for(let rep = 1 ; rep <= 10 ; rep++){
    console.log(`rep ${rep} 🤸`);
}
john = ['name' , 23 , 'sharan' , true ];
type =[];

for(let i = 0 ; i <john.length  ; i++){
    // console.log(john[i]);


    //filling an array
    // type[i] = typeof john[i];

    type.push(typeof john[i]);


    

}

console.log(type);

//continue
//break 


for(let i = john.length - 1; i >=0 ; i--){
    console.log(john[i]);

}