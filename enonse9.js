let n = 20
let konte = 0
let a='';
for (let i = 0; i <= n; i++) {
    // console.log(i)
    if (i % 2 == 0) {
        a +=','+i;
        konte++
    }

}
console.log(`Nonb ki pe yo se ${a.slice(1)} total la bay: ${konte}`)