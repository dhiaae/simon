var list = ["red", "blue", "green", "yellow"];
var pattern = [];
var i = 0;
var level = 1;
function nextlevel(pattern) {
   var random = Math.floor(Math.random() * 4);
   pattern.push(list[random]);

}
function animation(id) {
   var audio = new Audio("sounds/" + id + ".mp3");
   audio.play();
   $("." + id).addClass("pressed");
   setTimeout(function () {
      $("." + id).removeClass("pressed");
   }, 100);

}


function showlevel(pattern,v) {
   if (v < pattern.length) {
      $("#" + pattern[v]).fadeIn(100).fadeOut(100).fadeIn(100);
      setTimeout(showlevel(pattern,v+1),300);
   }

}

$(".btn").click(function () {
   $("h1").text("level " + level);
   if (pattern.length === 0) {
      pattern.push(this.id);
      console.log(pattern);
      animation(this.id);

   } else {
      console.log(this.id, pattern[i]);

      if (this.id === pattern[i]) {
         i++
         animation(this.id);

         if (i === pattern.length) {

            nextlevel(pattern);
            console.log(pattern);
            level++;
            i = 0;
            $("h1").text("level " + level);
            showlevel(pattern,0);
         }
      } else {
         var audio = new Audio("sounds/wrong.mp3");
         audio.play();
         $("h1").text("wrong pattern please press a key to restart");
         pattern = [];
         i = 0;
         level = 1;
      }


   }
}

)





