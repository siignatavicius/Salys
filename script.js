"use strict"

var salys = [
    {salis: "Lietuva", plotas: 65300, gyvsk: 2795680},
    {salis: "Latvija", plotas: 64594, gyvsk: 1902000},
    {salis: "Estija", plotas: 45338, gyvsk: 1331000},
    {salis: "Lenkija", plotas: 312679, gyvsk: 37950000},
    {salis: "Vokietija", plotas: 357588, gyvsk: 83240000}
]

for(var x of salys){
    var plotasgyv = (x.plotas/x.gyvsk*1000000).toFixed(2)
    var gyvmln = (x.gyvsk/1000000).toFixed(2)

    console.log(`Šalis: ${x.salis}, joje gyvena ${gyvmln} mln.gyventojų.`)
    console.log(`Valstybės plotas: ${x.plotas} km², plotas tenkantis vienam gyventojui: ${plotasgyv} m².`)
    console.log("********************************************************")
}

function area(salis, plotas, gyvsk){
    var plotasgyv = (plotas/gyvsk*1000000).toFixed(2)
    var gyvmln = (gyvsk/1000000).toFixed(2)

    console.log(`Šalis: ${salis}, joje gyvena ${gyvmln} mln.gyventojų.`)
    console.log(`Valstybės plotas: ${plotas} km², plotas tenkantis vienam gyventojui: ${plotasgyv} m².`)
    console.log("/////////////////////////////////////////////////////////")
}
console.log("")
console.log("")

console.log("                       FUNCTION")
console.log("")
console.log("")


for(var x of salys){
    area(x.salis, x.plotas, x.gyvsk)
}

