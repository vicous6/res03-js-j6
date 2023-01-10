let timeoutId = setTimeout(function(){
    console.log("hello world")
}, 4200); // dans une seconde





// let timeoutId2 = setInterval(function(){
//     let date = new Date();

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let secondes = date.getSeconds();
    
// console.log(hours, minutes, secondes)
// }, 4200); // dans une seconde


let times = [1, 2, 3];


function truc(param1) {
    for (let i = 0; i < param1.length; i++) {


        let timeoutId = setTimeout(function() {
             console.log(param1[i]+ "seconde de delais")
        }, param1[i]*1000);
      
    }
}

truc(times)



    let numbers = [32, 43, 56, 24, 78, 42];


function display(param1) {
    
    let count = 1
    
    for (let i = 0; i < param1.length; i++) {


        let timeoutId = setTimeout(function() {
             console.log(param1[i])
        },count *1000);
      count++
    }
}
display(numbers)


