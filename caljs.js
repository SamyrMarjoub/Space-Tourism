let num = 3
let num2 = 3
let total = 0
let escolha = 2

if (escolha === 1) {
    total = num + num2
}else if (escolha === 2) {
    total = num - num2
}else if (escolha === 3) {
    total = num * num2
}else if (escolha === 4) {
    total = num / num2
}
console.log(`Resultado é ${total}`)