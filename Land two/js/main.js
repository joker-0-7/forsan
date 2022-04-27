let nums = document.querySelectorAll(".number");
let section = document.querySelector(".section-stat");
let state = false
window.onscroll = function () {
  if (window.screenY <= section.offsetTop) {
    if (!state) {
      nums.forEach((num)=> count(num))
    }
    state = true
    
  }
}
function count(e) {
  let end = e.dataset.end;
  let setCount = setInterval(() => {
    e.textContent++;
    if (e.textContent == end) {
      clearInterval(setCount)
    }
  }, 2000 / end);
}



let mnue = document.querySelector(".mnue");
let links = document.querySelector(".header ul");
let link = document.querySelectorAll(".header li");
let dLink = document.querySelectorAll(".dropdown-menu a");
let exit = document.querySelector(".header span")
function widthe(x) {
    if (x.matches) {
    //   document.body.style.backgroundColor = "red";
    } else
    {
    //   document.body.style.backgroundColor = "green";
      mnue.onclick = function () {
        links.style.display="flex"
      }
      exit.onclick = function () {
        links.style.display="none"
        
      }
      link.forEach((e)=>{
        e.onclick = function () {
        links.style.display="none"
          
        }
      })
      dLink.forEach((el)=>{
        el.onclick = function () {
        links.style.display="none"
          
        }
      })
    }
  }
  
  let max = window.matchMedia( "(min-width: 767px)" )
  
  widthe(max)
  
  max.addListener(widthe)