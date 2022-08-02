
    var btn=0;
    function changed(fer){
      var element = document.getElementById(fer);
      var lab = document.getElementById("l"+ fer);
     
      lab.setAttribute("class", "demo");
      
      if(btn!=0){
        var prev = document.getElementById(btn);
        var prev_lab = document.getElementById("l" + btn);
        prev_lab.classList.remove("demo");
      }
      btn = fer;
    }

    function change_page(){
      if(btn != 0){
        var main = document.getElementById("main_2");
        main.style.display="block";
    }
      else
      alert("Please select a rating");
    }
