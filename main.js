function getRandom() {
    console.clear();
    var num = Math.floor(Math.random() * 100000000);
    var rand = num;
    console.log(rand, num);
    var flag = true;
    var check = 0;
    while (num > 0) {
        console.log(num % 10);
        if ((check & (1 << (num % 10))) > 0) {
            flag = false;
            break;
        } else {
            check = (check | (1 << (num % 10)));
        }
        num = Math.floor(num / 10);
    }
    if (flag === false || ('' + rand).length != 8)
        rand = getRandom();
    return rand;
}
var randNum = getRandom();
document.getElementById('randomId').innerHTML = randNum;