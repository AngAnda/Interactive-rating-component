

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
    //     var section = document.getElementById("section_2");
    //     section.style.display="block";
    // }
    //   else
    //   alert("Please select a rating");
    // }


const btns = document.querySelectorAll("label");
const submit = document.querySelector("input[type='button']");
const section_1 = document.getElementById("section-1");
const section_2 = document.getElementById("section-2");

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
    if(check.length === 0){
      alert("A rating must be checked");
    }
    else{ 
      section_1.classList.remove("show");
      section_2.classList.add("show");
      const rating = section_2.querySelector(".rating-value");
      rating.innerHTML = check[0].textContent;
    }
    
})

