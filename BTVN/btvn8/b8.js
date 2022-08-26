function tong(a, b){
    return a+b;
    }
    function hieu(a, b){
    return a-b;
    }
    function tich(a, b){
    return a*b;
    }
    function thuong(a, b){
    return a/b;
    }
    let a = parseFloat(prompt('nhap so a = '));
    let b = parseFloat(prompt('nhap so b = '));
    let c = prompt('nhap bieu thuc tinh toan: ');
    switch(c){
    case '+': {
    document.write('a + b = ' +tong(a, b));
    break;
    }
    case '-':{
    document.write('a - b = ' +hieu(a, b));
    break;
    }
    case '*':{
    document.write('a * b = ' +tich(a, b));
    break;
    }
    case '/':{
    document.write('a / b = ' +thuong(a, b));
    break;
    }
    }