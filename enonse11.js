
// poko korek
let r =[1,23,4,5,3,2,9,0,9];
let min =r[0];
let max =r[0];
console.log(max , min);
for (let i =0; i<r.length; i++) {
    if (r[i]<min) 
        min=r[i] 
}
for (const i of r) {
    if (r[i]>max) 
        max=r[i]
    
}
console.log(r);
console.log(`min ${min}`);
console.log(`max ${max}`); 

