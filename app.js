const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const img = document.querySelector("img")
let count = 0;
const counts = document.querySelector(".counts")
const length = document.querySelector(".length")

const imgArr = ["1.gif", "2.jpg", "3.jpg"]


length.innerHTML = imgArr.length;
setInterval(()=>{
   
        count++;
        if(count> imgArr.length - 1) count=0
        img.setAttribute("src", `New folder/${imgArr[count]}`)
        counts.innerHTML = count+1 ;
    
},2000)





next.addEventListener("click", () => {
    count++;
    if(count> imgArr.length - 1) count=0
    img.setAttribute("src", `New folder/${imgArr[count]}`)
    counts.innerHTML = count+1 ;
})

prev.addEventListener("click", () => {
    count--;
    if (count < 0) count = imgArr.length - 1;
    img.setAttribute("src", `New folder/${imgArr[count]}`)
    counts.innerHTML = count+1 ;
})