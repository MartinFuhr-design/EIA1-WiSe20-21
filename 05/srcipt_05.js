//Emissionswerte zuweisen
//Europe
var europe08 = 4965.7;
var europe18 = 4209.3;
//Northamerica
var northamerica08 = 6600.4;
var northamerica18 = 6036.6;
//Southamerica
var southamerica08 = 1132.6;
var southamerica18 = 1261.5;
//Africa
var africa08 = 1028;
var africa18 = 1235.5;
//Asia
var asia08 = 12954.7;
var asia18 = 16274.1;
//Australia
var australia08 = 1993;
var australia18 = 2100.5;
//Gesamtemission
var gesamtemission = europe18 + northamerica18 + southamerica18 + africa18 + asia18 + australia18;
//Rechnungen
//Europe
var europeprozent = ((europe18 / gesamtemission) * 100);
var europevergleich = ((europe18 / europe08) * 100);
var europevergleich2 = (europe18 - europe08);
//Northamerica
var northamericaprozent = ((northamerica18 / gesamtemission) * 100);
var northamericavergleich = ((northamerica18 / northamerica08) * 100);
var northamericavergleich2 = (northamerica18 - northamerica08);
//Southamerica
var southamericaprozent = ((southamerica18 / gesamtemission) * 100);
var southamericavergleich = ((southamerica18 / southamerica08) * 100);
var southamericavergleich2 = (southamerica18 - southamerica08);
//Africa
var africaprozent = ((africa18 / gesamtemission) * 100);
var africavergleich = ((africa18 / africa08) * 100);
var africavergleich2 = (africa18 - africa08);
//Asia
var asiaprozent = ((asia18 / gesamtemission) * 100);
var asiavergleich = ((asia18 / asia08) * 100);
var asiavergleich2 = (asia18 - asia08);
//Australia
var australiaprozent = ((australia18 / gesamtemission) * 100);
var australiavergleich = ((australia18 / australia08) * 100);
var australiavergleich2 = (australia18 - australia08);
//Konsolenausgabe
//Europe
console.log("Emission von Europa: " + europe18 + "kg CO2 ");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + europeprozent + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europevergleich + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + europevergleich2 + "kg CO2");
//Northamerica
console.log("Emissionswerte von Nordamerika: " + northamerica18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + northamericaprozent + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + northamericavergleich + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + northamericavergleich2 + "kg CO2");
//Southamerica
console.log("Die Emission von Südamerika: " + southamerica18 + "kg in CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + southamericaprozent + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + southamericavergleich + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + southamericavergleich2 + "kg CO2");
//Africa
console.log("Die Emission von Afrika: " + africa18 + "kg in CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + africaprozent + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + africavergleich + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + africavergleich2 + "kg CO2");
//Asia
console.log("Die Emission von Asien: " + asia18 + "kg in CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asiaprozent + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiavergleich + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + asiavergleich2 + "kg CO2");
//Australia
console.log("Die Emission von Australien: " + australia18 + "kg in CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + australiaprozent + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + australiavergleich + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + australiavergleich2 + "kg CO2");
//# sourceMappingURL=srcipt_05.js.map