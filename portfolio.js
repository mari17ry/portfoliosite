


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


// _____________________________________accordion__________________________________



  function myFunction(divid) {
        var expand = document.getElementById(divid);

        if (expand.style.display === "block") {
          expand.style.display = "none";
        } else {
          expand.style.display = "block";
        }
      }
      


// let btn = document.querySelector('button');
// let div1 = document.querySelector('.portfolio_expand')
// let div2 = document.querySelector('.portfolio_expand2')

// btn.addEventListener('click', () =>{
//     if(div1.style.display === 'none'){
//         div1.style.display = 'block';
//     }else{
//         div1.style.display = 'none'
//     }
// } )

// btn.addEventListener('click', () =>{
//     if(div2.style.display === 'none'){
//         div2.style.display = 'block';
//     }else{
//         div2.style.display = 'none'
//     }
// } )