let modeBtn= document.querySelector("#mode");
let currMode="light";
let body = document.querySelector("body"); 
modeBtn.addEventListener("click", ()=>{
    if(currMode=="light"){
        currMode="dark";
        body.classList.remove("white");
        body.classList.add("dark");
    }
    else{
        currMode="light";
        body.classList.remove("dark");
        body.classList.add("white");
    }
    console.log(currMode);
})

//Alternative Method without using the CSS Styling

// let modeBtn= document.querySelector("#mode");
// let currMode="light";
// modeBtn.addEventListener("click", ()=>{
//     if(currMode=="light"){
//         currMode="dark";
//          document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// })