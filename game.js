var list = ["red", "blue", "green", "yellow"];
var pattern = [];
var i = 0;
var level = 1;
var highest = 0;
function nextlevel(pattern, level) {
   for (let index = 0; index < level; index++) {
      var random = Math.floor(Math.random() * 4);
      pattern[index] = list[random];

   }

}
function animation(id) {
   var audio = new Audio("sounds/" + id + ".mp3");
   audio.play();
   $("." + id).addClass("pressed");
   setTimeout(function () {
      $("." + id).removeClass("pressed");
   }, 100);

}


function showlevel(pattern, v) {
   if (v < pattern.length) {
      animation(pattern[v]);
      setTimeout(function () {
         showlevel(pattern, v + 1)
      }, 400);
   }

}

$(".btn").click(function () {
   
   $("h1").text("level " + level);
   if (pattern.length === 0) {
      $("h2").text("");
      nextlevel(pattern,level);
      setTimeout(function(){
         showlevel(pattern,0);
      },1000);
   } else {
      if (this.id === pattern[i]) {
         i++
         animation(this.id);

         if (i === pattern.length) {
            level++;
            nextlevel(pattern, level);
            console.log(pattern);
            i = 0;
            $("h1").text("level " + level);
            setTimeout(function () { showlevel(pattern, 0); }, 1000);
         }
      } else {
         var audio = new Audio("sounds/wrong.mp3");
         audio.play();
         if (level > highest) {
            highest =level;
            
         }
         $("h1").text("wrong pattern please press a key to restart");
         $("h2").text("your highest score is : " + highest);
         $("body").addClass("game-over");
         setTimeout (function (){
            $("body").removeClass("game-over");
         },200)
         pattern = [];
         i = 0;
         level = 1;
      }


   }
}

)





