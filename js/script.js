

    // var btn=0;
    // function changed(fer){
    //   var element = document.getElementById(fer);
    //   var lab = document.getElementById("l"+ fer);
     
    //   lab.setAttribute("class", "demo");
      
    //   if(btn!=0){
    //     var prev = document.getElementById(btn);
    //     var prev_lab = document.getElementById("l" + btn);
    //     prev_lab.classList.remove("demo");
    //   }
    //   btn = fer;
    // }

    // function change_page(){
    //   if(btn != 0){
    //     var main = document.getElementById("main_2");
    //     main.style.display="block";
    // }
    //   else
    //   alert("Please select a rating");
    // }


const btns = document.querySelectorAll("label");
const submit = document.querySelector("input[type='button']");
const main_1 = document.getElementById("main-1");
const main_2 = document.getElementById("main-2");

btns.forEach(element => {
  element.addEventListener("click", function(e) {
    btns.forEach(btn => {
      if(btn !== element)
        btn.classList.remove("demo");
        element.classList.toggle("demo");
    });
  }
  )
});

submit.addEventListener("click", () =>{
    var check = document.querySelectorAll(".demo");
    alert(check.length);
    if(check.length === 0){
      alert("A rating must be checked");
    }
    else{ 
      main_1.classList.remove("show");
      main_2.classList.add("show");
      const rating = main_2.querySelector(".rating-value");
      rating.innerHTML = check[0].textContent;
    }
    
})

