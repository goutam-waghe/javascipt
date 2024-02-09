// switch case


let day = 'wednesday';

switch (day) {
    case 'monday':
        console.log("js learning");
        break;// break nhi lagene pr ssara code excute ho jayega 

    case 'tuesday':
    case 'wednesday':
        console.log("college");
        break;
    case 'tharsday':
        console.log("tuetion");
        break;
    case 'friday':
        console.log("web practies");
        break;
    case 'saturday':
    case 'sunday':
        console.log("WeekEnd");
    default:
        console.log("invailid day");
}

if (day === 'monday') {
    console.log("js learning");
} else if (day === 'tuesday' || day === 'wednesday') {
    console.log("college");
} else if (day === 'tharsday') {
    console.log("tuetion");
} else if (day === 'friday') {
    console.log("web practies");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("weekend");
} else
    console.log("invailid day");

    //SSSIGNMENT
//     LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D

let language  = 'hindi' ; 

switch ('hindi') {
    case 'english': console.log("english");
        
        break;
    case 'hindi': console.log("Hindi");
        
        break;
    case 'panjabi': console.log("panjabi");
        
        break;
    case 'urdu': console.log("urdu");
        
        break;
    case 'marathi': console.log("marathi");
        
        break;
    case 'gujrati': console.log("gujrati");
        
        break;

    default: console.log('not founded');
        break;
}

