var total = {
  heads:0,
  tails:0
};
 
 var flip = function () {
   random = Math.floor(Math.random() * 2);
   if (random === 1) {
     return "Heads";
   } else {
     return "Tails";
   }
 };

  var flipMany = function (a) {
    for (var i = 0; i < a; i ++) {
      flip();
      if (flip() === "Heads") {
        total.heads += 1;
      } else {
        total.tails += 1;
      }
    }
  };




 $(document).ready(function() {


  $(".oneT").on('click', function(e) {
    e.preventDefault();
    flipMany(1);
    console.log(total);
    $('.ms-headsNum').html(total.heads);
    $('.ms-tailsNum').html(total.tails);
    console.log("Its working!");
  });

  $(".tenT").on('click', function(e) {
    e.preventDefault();
    flipMany(10);
    console.log(total);
    $('.ms-headsNum').html(total.heads);
    $('.ms-tailsNum').html(total.tails);
    console.log("Its working!");
  });

  $(".billT").on('click', function(e) {
    e.preventDefault();
    flipMany(100);
    console.log(total);
    $('.ms-headsNum').html(total.heads);
    $('.ms-tailsNum').html(total.tails);
    console.log("Its working!");
  });

  $(".reset").on('click', function(e) {
    e.preventDefault();
    $('.ms-headsNum').html('0');
    $('.ms-tailsNum').html('0');
    total.heads = 0;
    total.tails = 0;
    console.log("Its working!");
  });

});