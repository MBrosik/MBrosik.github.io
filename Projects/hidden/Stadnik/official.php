<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>

<body>
   <form method="GET" id="form-id">
      <p>Jaki lubisz dzień</p>
   </form>

   <img src="" alt="" id="image">

   <script>
      let table = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
      let form = document.getElementById("form-id");

      table.forEach(el => {
         let input = document.createElement("input");
         input.type = "radio";
         input.name = "Day";
         input.value = el;
         input.id = el;

         form.appendChild(input);

         let label = document.createElement("label");
         label.innerText = el;
         label.id = el;

         form.appendChild(label);
      })

      form.innerHTML += '<br><button type="submit"> Potwierdź </button>'

      let src = `<?php

                  $conn = mysqli_connect("localhost", "root", "", "day_counter");


                  // -----------------
                  // set to database
                  // -----------------

                  if (isset($_GET["Day"])) {
                     // echo $_GET["Day"];

                     $aa = $_GET["Day"];

                     $res = mysqli_query($conn, "SELECT * FROM counter WHERE Day= '$aa'");
                     $arr = mysqli_fetch_all($res, MYSQLI_ASSOC);

                     $row = $arr[0];

                     $counter = $row["Counter"] + 1;

                     mysqli_query($conn, "UPDATE counter SET Counter=$counter WHERE Day= '$aa'");
                  };


                  $res = mysqli_query($conn, "SELECT * FROM counter");
                  $arr = mysqli_fetch_all($res, MYSQLI_ASSOC);





                  // -----------------
                  // create image
                  // -----------------

                  $image = imagecreatetruecolor(1000, 1000);


                  // ---------------------
                  // calculate max value
                  // ---------------------

                  $max = 0;

                  foreach ($arr as $key => $value) {
                     $max += $value["Counter"];
                  }

                  $text_color = imagecolorallocate($image, 255, 255, 255);





                  // ---------------------
                  // draw circle
                  // ---------------------
                  $last_angle = 0;

                  foreach ($arr as $key => $value) {
                     if ($value["Counter"] == 0) continue;

                     $angle = $last_angle + ($value["Counter"] / $max) * 360;

                     $color = imagecolorallocate($image, $key * 20, $key * 20, $key * 20,);
                     imagefilledarc($image, 500, 500, 500, 500, $last_angle, $angle, $color, IMG_ARC_PIE);


                     $last_angle1 = ($last_angle / 360) * 2 * pi();
                     $angle1 = ($angle / 360) * 2 * pi();

                     $avg_angle = ($last_angle1 + $angle1) / 2;

                     $x = 500 + cos($avg_angle) * 200;
                     $y = 500 + sin($avg_angle) * 200;

                     imagestring($image, 10, $x, $y, $value["Counter"], $text_color);
                     imagestring($image, 10, $x - 40, $y - 20, $value["Day"], $text_color);



                     $last_angle = $angle;
                  }


                  // header("Content-type: image/png");
                  imagepng($image);

                  ?>`

      let img_tag = document.getElementById("image");

      const reader = new FileReader();

      reader.addEventListener("load", function() {
         console.log(reader.result)
         img_tag.src = reader.result;
      }, false);

      reader.readAsDataURL(src); // tutaj reader zaczyna czytać plik, powyższy event load to koniec tego czytania

      //
   </script>
</body>

</html>