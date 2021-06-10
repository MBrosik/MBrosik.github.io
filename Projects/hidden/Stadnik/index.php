<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>

<body>
   <form action="./Photo.php" method="GET" id="form-id">
      <p>Jaki lubisz dzień</p>

      <!-- <input type="radio" name="" id=""> -->
   </form>

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
   </script>
</body>

</html>