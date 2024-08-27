/*
    == ----- igual ----- a==b ----- verdadeiro se a for igula ao b
    
    === ---- identico -- a === b -- verdadeiro se a for identico ao b
    
    != ----- diferente - a != b --- verdadeiro se o a for diferente de b
    
    !== ---- não identico - a !== b - verdadeiro se o a não for identico ao b

    < ------ menor que - a < b ---- verdadeiro quando a for menor que b
    
    <= ----- menor ou igual que - a <= b---- verdeiro quando a for menor ou igual que b
    
    > ------ maior que - a > b ---- verdadeiro quando a for maior que b
    > ------ maior ou igual que - a >= b ---- verdadeiro quando a for maior ou igual que b

*/

const a = 10
const b = 3

console.log(a >= b)

const a = 2
const b = 2

console.log(a === b && a <= b)
// V e V = V

console.log(a === b && a < b)
// V e F = F

console.log(a > b && a === b)
// F e V = F

console.log(a > b && a < b)
// F e F = F

/*
    OR  ||
*/

console.log(a === b || a <= b)
// V ou V = V

console.log(a === b || a < b)
// V ou F = V

console.log(a > b || a === b)
// F ou V = V

console.log(a > b || a < b)
// F ou F = F

/*
    NOT
*/

console.log(!(a === b))

console.log(a < b)