let teks = prompt("Antre yon teks: ")
// while (typeof(teks)!==toString()) {
//     teks = prompt("Antre yon chen karakte svp: ")
// }
voyel = "aeiouyAEIOUY"
for (i in teks) {
    if (voyel.includes(teks[i])) {
        teks = teks.replace(teks[i - 1], "*")
    }
}
console.log(teks)