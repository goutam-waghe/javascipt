const keys = document.querySelectorAll('.key');
keys.forEach((val , index) => {
    const url = `pianokeys/key${index+1}.mp3`
    val.addEventListener('click' ,() => playsong(url))
})
function playsong(url) {
    console.log(url);

  new Audio(url).play() ;
}