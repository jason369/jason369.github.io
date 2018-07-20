var bikeServices = new XMLHttpRequest();
bikeServices.open('GET', 'scripts/service_json.json', true)
bikeServices.send();

bikeServices.onload = function () {
    var bikeS = JSON.parse(bikeServices.responseText);
    console.log(bikeS);

    document.getElementById("n1").innerHTML = bikeS.Services["0"].title;

    document.getElementById("n2").innerHTML = bikeS.Services["1"].title;

    document.getElementById("n3").innerHTML = bikeS.Services["2"].title;

    document.getElementById("n4").innerHTML = bikeS.Services["3"].title;

    //////////////////////////////

    document.getElementById("sn1").innerHTML = bikeS.Services["0"].servicename1

    document.getElementById("sp1").innerHTML = "$" + bikeS.Services["0"].price1


    document.getElementById("sn2").innerHTML = bikeS.Services["0"].servicename2

    document.getElementById("sp2").innerHTML = "$" + bikeS.Services["0"].price2


    document.getElementById("sn3").innerHTML = bikeS.Services["0"].servicename3

    document.getElementById("sp3").innerHTML = "$" + bikeS.Services["0"].price3


    document.getElementById("sn4").innerHTML = bikeS.Services["0"].servicename4

    document.getElementById("sp4").innerHTML = "$" + bikeS.Services["0"].price4

    //////////////////////////////brakes

    document.getElementById("sn5").innerHTML = bikeS.Services["1"].servicename5

    document.getElementById("sp5").innerHTML = "$" + bikeS.Services["1"].price5


    document.getElementById("sn6").innerHTML = bikeS.Services["1"].servicename6

    document.getElementById("sp6").innerHTML = "$" + bikeS.Services["1"].price6


    document.getElementById("sn7").innerHTML = bikeS.Services["1"].servicename7

    document.getElementById("sp7").innerHTML = "$" + bikeS.Services["1"].price7


    document.getElementById("sn8").innerHTML = bikeS.Services["1"].servicename8

    document.getElementById("sp8").innerHTML = "$" + bikeS.Services["1"].price8

    //////////////////////////////Shifter/Derailleur

    document.getElementById("sn9").innerHTML = bikeS.Services["2"].servicename9

    document.getElementById("sp9").innerHTML = "$" + bikeS.Services["2"].price9


    document.getElementById("sn10").innerHTML = bikeS.Services["2"].servicename10

    document.getElementById("sp10").innerHTML = "$" + bikeS.Services["2"].price10


    document.getElementById("sn11").innerHTML = bikeS.Services["2"].servicename11

    document.getElementById("sp11").innerHTML = "$" + bikeS.Services["2"].price11


    document.getElementById("sn12").innerHTML = bikeS.Services["2"].servicename12

    document.getElementById("sp12").innerHTML = "$" + bikeS.Services["2"].price12

    //////////////////////////////Installs

    document.getElementById("sn13").innerHTML = bikeS.Services["3"].servicename13

    document.getElementById("sp13").innerHTML = "$" + bikeS.Services["3"].price13


    document.getElementById("sn14").innerHTML = bikeS.Services["3"].servicename14

    document.getElementById("sp14").innerHTML = "$" + bikeS.Services["3"].price14


    document.getElementById("sn15").innerHTML = bikeS.Services["3"].servicename15

    document.getElementById("sp15").innerHTML = "$" + bikeS.Services["3"].price15


    document.getElementById("sn16").innerHTML = bikeS.Services["3"].servicename16

    document.getElementById("sp16").innerHTML = "$" + bikeS.Services["3"].price16
}
