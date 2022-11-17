// First
let r =[0,1,2,3,4]
function reverseArrray(r) {
    let a;
let b1=[],c1=[],d1=[];
// First
a = r.reverse();
console.log(a);
// Second
b1=a.slice(0,4).reverse();
b1.push(a.at(-1))
console.log(b1);
// Third
c1=b1.slice(0,3).reverse()
c1.push(b1.at(-2),b1.at(-1));
console.log(c1);
//fourth
d2=c1.slice(0,2)
d1=c1.slice(2)
let c3 =d2.concat(d1)
// c1.push(b1.at(-2),b1.at(-1));
console.log(c3); 
}
let t =[2,5,6,7,8]
reverseArrray(r)
console.log('--------------------------');
reverseArrray(t)