let orgPrice = 120;
let taxRate = 0.10;
let disRate = 0.15;

let subtotal = orgPrice + orgPrice * disRate
let total = subtotal + subtotal * taxRate
console.log(total)