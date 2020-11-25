//Emissionswerte zuweisen

//Europe
var europe08:number=4965.7
var europe18:number=4209.3

//Northamerica
var northamerica08:number=6600.4
var northamerica18:number=6036.6

//Southamerica
var southamerica08:number=1132.6
var southamerica18:number=1261.5

//Africa
var africa08:number=1028
var africa18:number=1235.5

//Asia
var asia08:number=12954.7
var asia18:number=16274.1

//Australia
var australia08:number=1993
var australia18:number=2100.5

//Gesamtemission
var gesamtemission: number=europe18 + northamerica18 + southamerica18 + africa18 + asia18 + australia18

//Function
function changeContinentValue(continent: string, newValue: number, oldValue: number) {
    document.querySelector("#titleRegion").innerHTML = "Carbon Dioxide Emission in " + continent;
    document.querySelector("#h1").innerHTML = newValue.toString();
    document.querySelector("#p1").innerHTML = "Emission absolute of " + continent + " in 2018";
    document.querySelector("#relativeEmission").innerHTML = (Math.round((newValue / gesamtemission) * 100)) + "%";
    document.querySelector("#growEmission").innerHTML = (Math.round(((newValue / oldValue) - 1) * 100)) + "%";
    document.querySelector("#AbsoluteGrowthEmission").innerHTML = (Math.round(newValue - oldValue)) + "kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height' + ((newValue / gesamtemission) * 100) + "%");
}

//EventListener
document.querySelector(".europe").addEventListener('click', function () {
    changeContinentValue("Europe", europe18, europe08);
})

document.querySelector(".northamerica").addEventListener('click', function () {
    changeContinentValue("Northamerica", northamerica18, northamerica08);
})

document.querySelector(".southamerica").addEventListener('click', function () {
    changeContinentValue("Southamerica", southamerica18, southamerica08);
})

document.querySelector(".africa").addEventListener('click', function () {
    changeContinentValue("Africa", africa18, africa08);
})

document.querySelector(".asia").addEventListener('click', function () {
    changeContinentValue("Asia", asia18, asia08);
})

document.querySelector(".australia").addEventListener('click', function () {
    changeContinentValue("Australia", australia18, australia08);
})


