pytania = new Array(19);
pytania[0]='1. Która z tych rakietnic była wyposażona w system "wystrzel i zapomnij"?';
pytania[1]="2. Armata gładkolufowa GROM ma kaliber:";
pytania[2]="3. Która z tych strzelb nie jest samopowtarzalna?";
pytania[3]="4. Samuel Colt stworzył pierwszy prototyp rewolweru w roku:";
pytania[4]="5. Zwalniacz zamka nie został zastosowany w:";
pytania[5]="6. Jaki jest kaliber pistoletu P-83?";
pytania[6]="7. Cywilnym odpowiednikiem amunicji 7.62 NATO jest nabój:";
pytania[7]="8. Karabinek wz. 88 Tantal powstał na bazie konstrukcji:";
pytania[8]="9. Ile ważył nabój ciężki do moździerza wz 1931 kal. 81mm?";
pytania[9]="10. Karabinek H&k G36 jest produkcji?";
pytania[10]="11. Nabój pośredni NATO to?";
pytania[11]="12. Która broń nie jest zabroniona przez konwencje genewską?";
pytania[12]="13. AK strzela pociskami typu:";
pytania[13]="14. Ręczny karabinek maszynowy RPD wz. 44 wymagał obsługi:";
pytania[14]="15. Najliczniejsza broń wsparcia piechoty występująca w WP to:";
pytania[15]="16. Automat Kałasznikowa w 2013 roku był na wyposażeniu:";
pytania[16]="17. Nunczako zostało stworzone z:";
pytania[17]="18. Flambard to rodzaj ostrza o jakim kształcie?";
pytania[18]="19. Jaka jest amunicja do pistoletu P-83?";
pytania[19]="20. W jakim kraju ma siedzibę firma MIWO Military?";

odpowiedzi = new Array(19);
odpowiedzi[0]={a:"Igła 2",b:"Igła",c:"RPG",d:"Stinger"};
odpowiedzi[1]={a:"60 mm",b:"73 mm",c:"63 mm",d:"70 mm"};
odpowiedzi[2]={a:"Brownig Auto-5",b:"Franchi SPAS-12",c:"MKA 1919",d:"RMB-93"};
odpowiedzi[3]={a:"1831",b:"1833",c:"1829",d:"1830"};
odpowiedzi[4]={a:"Colcie Canada C7",b:"AK 107",c:"M416",d:"M4"};
odpowiedzi[5]={a:"8.5 mm",b:"9 mm",c:"9.5 mm",d:"8 mm"};
odpowiedzi[6]={a:".357 Magnum",b:"7.62x39mm",c:".308 WIN",d:".223 REM"};
odpowiedzi[7]={a:"SKS",b:"PPSz",c:"AKMS",d:"M4"};
odpowiedzi[8]={a:"7 kg",b:"6,5 kg",c:"6 kg",d:"5,5 kg"};
odpowiedzi[9]={a:"Niemieckiej",b:"Amerykańskiej",c:"Chińskiej",d:"Austriackiej"};
odpowiedzi[10]={a:"7.92 x 50",b:"7.62 x 39",c:"5.45 x 39 ",d:"5.56 x 45"};
odpowiedzi[11]={a:"Miny",b:"Broń zapalająca",c:"Gaz bojowy",d:"Granaty odłamkowe"};
odpowiedzi[12]={a:"7,62 x 39 mm",b:"7,62 x 51 mm",c:"5,56 x 45 mm",d:"4,85 x 49 mm"};
odpowiedzi[13]={a:"Przez 4 osoby",b:"Przez 2 osoby",c:"Przez 1 osobę",d:"Przez 3 osoby"};
odpowiedzi[14]={a:"UKM 2000",b:"MG 3",c:"CZ 75",d:"PKM"};
odpowiedzi[15]={a:"54 krajów",b:"31 krajów",c:"153 krajów",d:"106 krajów"};
odpowiedzi[16]={a:"Mocowania trzymającego konie",b:"Przekształcenia cepa bojowego",c:"Przekształcenia karabinu AK44",d:"Rolniczego cepa"};
odpowiedzi[17]={a:"Posiadające hakowate wycięcie",b:"O profilu geometrycznym",c:"W kształcie półksiężyca ",d:"O falistym kształcie"};
odpowiedzi[18]={a:"9 x 18 Makarov",b:"8 x 16 Makarov",c:"9 x 16 Makarov",d:"8 x 18 Makarov"};
odpowiedzi[19]={a:"W Belgii",b:"W USA",c:"W Wielkiej Brytanii",d:"W Polsce"};

poprawne = new Array();
poprawne[0]="d";
poprawne[1]="b";
poprawne[2]="d";
poprawne[3]="d";
poprawne[4]="b";
poprawne[5]="b";
poprawne[6]="c";
poprawne[7]="c";
poprawne[8]="b";
poprawne[9]="a";
poprawne[10]="d";
poprawne[11]="d";
poprawne[12]="a";
poprawne[13]="b";
poprawne[14]="a";
poprawne[15]="d";
poprawne[16]="a";
poprawne[17]="d";
poprawne[18]="a";
poprawne[19]="d";


var wynik=0;
var pytanie=0;
var postęp=0;


window.onload=initLocalClocks;

function poczatek(){

    document.getElementById("pytanie").innerHTML= pytania[pytanie];
    document.getElementById("odp_a").innerHTML= odpowiedzi[pytanie].a;
    document.getElementById("odp_b").innerHTML= odpowiedzi[pytanie].b;
    document.getElementById("odp_c").innerHTML= odpowiedzi[pytanie].c;
    document.getElementById("odp_d").innerHTML= odpowiedzi[pytanie].d;
    
}

function odp_a(){

    if("a"==poprawne[pytanie]){
        wynik++;
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        setTimeout( function()
            {
            document.getElementById("odp_a").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            },1000);
    }
    else{
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        document.getElementById("odp_a").style.backgroundColor="red";
        setTimeout(function()
            {
            document.getElementById("odp_"+poprawne[pytanie-1]).style.backgroundColor="#007BFF"; 
            document.getElementById("odp_a").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            }, 1000);
    }


    pytanie++;
    postęp=postęp + 5;
    var postęp1= postęp+ "%";

    document.getElementById("progress_bar_v2").style.width=postęp1 
    
    
}

function odp_b(){
    if("b"==poprawne[pytanie]){
        wynik++;
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        setTimeout( function()
            {
            document.getElementById("odp_b").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            },1000);
    }
    else{
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        document.getElementById("odp_b").style.backgroundColor="red";
        setTimeout(function()
            {
            document.getElementById("odp_"+poprawne[pytanie-1]).style.backgroundColor="#007BFF"; 
            document.getElementById("odp_b").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            }, 1000);
    }


    pytanie++;
    postęp=postęp + 5;
    var postęp1= postęp+ "%";

    document.getElementById("progress_bar_v2").style.width=postęp1 
    
}

function odp_c(){

    if("c"==poprawne[pytanie]){
        wynik++;
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        setTimeout( function()
            {
            document.getElementById("odp_c").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            },1000);
    }
    else{
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        document.getElementById("odp_c").style.backgroundColor="red";
        setTimeout(function()
            {
            document.getElementById("odp_"+poprawne[pytanie-1]).style.backgroundColor="#007BFF"; 
            document.getElementById("odp_c").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            }, 1000);
    }


    pytanie++;
    postęp=postęp + 5;
    var postęp1= postęp+ "%";

    document.getElementById("progress_bar_v2").style.width=postęp1 
    
}

function odp_d(){

    if("d"==poprawne[pytanie]){
        wynik++;
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        setTimeout( function()
            {
            document.getElementById("odp_d").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            },1000);
    }
    else{
        document.getElementById("odp_"+poprawne[pytanie]).style.backgroundColor="#27c53f";
        document.getElementById("odp_d").style.backgroundColor="red";
        setTimeout(function()
            {
            document.getElementById("odp_"+poprawne[pytanie-1]).style.backgroundColor="#007BFF"; 
            document.getElementById("odp_d").style.backgroundColor="#007BFF";
            if(pytanie==20){
                koniec(); 
             }
            else{ poczatek()};
            }, 1000);
    }


    pytanie++;
    postęp=postęp + 5;
    var postęp1= postęp+ "%";

    document.getElementById("progress_bar_v2").style.width=postęp1 
    
}

function koniec(){
    var temp='<div id="koniec" class="col-sm-11" style="left: 4.16%">';
    temp = temp + 'wynik = ' + wynik + '/20';  
    temp = temp+ '</div>';
    document.getElementById("pytania").innerHTML=temp;
}


// zegar


function initLocalClocks() { 
    
    var date = new Date; 
    var seconds = date.getSeconds(); 
    var minutes = date.getMinutes(); 
    var hours = date.getHours();
    var hands = [ { hand: 'hours', angle: (hours * 30) + (minutes / 2) }, { hand: 'minutes', angle: (minutes * 6) }, { hand: 'seconds', angle: (seconds * 6) } ];
     for (var j = 0; j < hands.length; j++) { 
       var elements = document.querySelectorAll('.' + hands[j].hand); 
       for (var k = 0; k < elements.length; k++) { 
         elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)'; 
         elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';  
        if (hands[j].hand === 'minutes')
         { elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle); } } } 
        
         poczatek()
        }
 
