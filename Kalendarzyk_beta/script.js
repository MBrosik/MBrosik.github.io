var full= new Date;

var year = full.getFullYear();

var monthtxt;
var iloscdni;

switch(full.getMonth()){
    case 0:
        monthtxt = "Styczeń";
        iloscdni=31;
        lastdays=31;
        break;
    case 1:
        monthtxt = "Luty";
        if (year%4==0){
            iloscdni=29;
        }
        else{
            iloscdni=28;
        }
        lastdays=31;
        break;
    case 2:
        monthtxt = "Marzec";
        iloscdni=31;
        if (year%4==0){
            lastdays=29;
        }
        else{
            lastdays=28;
        }
        break;
    case 3:
        monthtxt = "Kwiecień";
        iloscdni=30;
        lastdays=31;
        break;
    case 4:
        monthtxt = "Maj";
        iloscdni=31;
        lastdays=30;
        break;
    case 5:
        monthtxt = "Czerwiec";
        iloscdni=30;
        lastdays=31;
        break;
    case 6:
        monthtxt = "Lipiec";
        iloscdni=31;
        lastdays=30;
        break;
    case 7:
        monthtxt = "Sierpień";
        iloscdni=31;
        lastdays=31;
        break;
    case 8:
        monthtxt = "Wrzesień";
        iloscdni=30;
        lastdays=31;
        break;
    case 9:
        monthtxt = "Październik";
        iloscdni=31;
        lastdays=30;
        break;
    case 10:
        monthtxt = "Listopad";
        iloscdni=30;
        lastdays=31;
        break;
    case 11:
        monthtxt = "Grudzień";
        iloscdni=31;
        lastdays=30;
        break;

}







function calendar()
{
    document.getElementById("rok").innerHTML=year;
    document.getElementById("miesiac").innerHTML=monthtxt;
    

    var days=" ";

    var nazwa_tygodnia=['pn','wt','śr','czw','pt','sb','nd'];

    for (f=0;f<=6;f++)
    {
        if(f%7==0){days +='<div style="margin-left: 4.268vh;" class="nazwy_tygodnia">'+nazwa_tygodnia[f]+'</div>'}
        else {days +='<div class="nazwy_tygodnia">'+nazwa_tygodnia[f]+'</div>'}
        if(f%7==6){days+= '<div style="clear: both;"></div>'}
    }

    for (f=1; f<=42; f++)
    {
        if(f%7==1){days +='<div class="dzien" style="margin-left:4.268vh" id="dzien'+ f + '"></div>'}
        else {days +='<div class="dzien" id="dzien'+ f + '"></div>'}
        if(f%7==0){days+= '<div style="clear: both;"></div>'}
    }
    document.getElementById("dni").innerHTML=days;
    // '+dzientygodnia+'
    oblicz();
   
}
window.onload=calendar;

var dzientygodnia = full.getDay();
var dzien = full.getDate();
var ilosctygodni=parseInt(dzien/7);
var niedziela= (dzien-(7*ilosctygodni))-dzientygodnia;
var dzienostatni=7-niedziela;
if(dzienostatni>7){dzienostatni-=7}


function oblicz(){
    var dzienostatniv2 = (lastdays - dzienostatni)+1 ;
    for(f=1; f<=dzienostatni;f++){
        document.getElementById("dzien"+f).innerHTML="<div class='ktory_dzien'>"+dzienostatniv2+"</div>";
        document.getElementById("dzien"+f).style.borderColor="grey";
        dzienostatniv2++;
    }
    var w=1;
    for(f=dzienostatni+1;f<=dzienostatni+iloscdni;f++){
        document.getElementById("dzien"+f).innerHTML="<div class='ktory_dzien'>"+ w +"</div>";
        w++;
    }
    document.getElementById("dzien"+(dzienostatni+dzien)).style.borderColor="green";
    var w=1;
    for(f=dzienostatni+iloscdni+1;f<=42;f++){
        document.getElementById("dzien"+f).innerHTML="<div class='ktory_dzien'>"+w+"</div>";
        document.getElementById("dzien"+f).style.borderColor="grey";
        w++;
    }
}



