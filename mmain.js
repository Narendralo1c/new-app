let button = document.querySelector("button")
let input = document.querySelector("input")
let ol = document.querySelector("ol")
let form = document.querySelector("form")

const getdata = (e) => {
    e.preventDefault();
    let li = document.createElement("li")
    li.innerText = input.value
    ol.appendChild(li)
    let span = document.createElement("span")
    span.className = "ol li span"
    span.innerText = "\u00d7"
    li.appendChild(span)
    form.reset();
   

}

button.addEventListener("click", getdata)

const dlt  = (e)  =>{
  if(e.target.className.includes("ol li span")) {
    e.target.parentElement.remove()   
  }
  
}

ol.addEventListener("click",dlt)






