const indhold1 = document.getElementById("indhold1");

animate(indhold1);

function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;
  
    setInterval(() => {
        element.style.marginLeft = --flag + "px";
  
        if (elementWidth == -flag) {
            flag = parentWidth;
        }
    }, 5);
}