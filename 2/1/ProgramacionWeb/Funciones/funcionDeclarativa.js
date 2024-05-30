function calculoOperaciones(num1, num2, operacion) {
    switch(operacion) {
        case "+":
        return num1 + num2;
        break;
        case "-":
        return num1 - num2;
        break;
        case "*":
        return num1 * num2;
        break;
        case "/":
        return  num1 / num2;
        break;
        default:
        return "La operacion es invalida";
        break;
    }   
}
console.log(calculoOperaciones(5, 3, '+'));
console.log(calculoOperaciones(5, 3, '-'));
console.log(calculoOperaciones(5, 3, '*'));
console.log(calculoOperaciones(5, 3, '/'));
