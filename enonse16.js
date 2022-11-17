//a = string.ascii_uppercase
function dekode(entre){
    entre=entre.toUpperCase();
    a='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase()
    //  entre = '<5X >2G >2R >0E <5R <0A >5K'
    entre = entre.split(' ');
    mot = '';
    let idx;
    for (i of entre){
        for (t of i){
            if (i[0]=='<') 
                idx = a.indexOf(i[2]) -parseInt(i[1])
            else
                idx = a.indexOf(i[2]) + parseInt(i[1])
        }
        mot +=a[idx]
    }
    return mot
}
d = prompt('Input the sentence you want to decryted: ')
console.log(dekode(d))