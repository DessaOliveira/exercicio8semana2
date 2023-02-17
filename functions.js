let valor = prompt('Digite o valor do produto');
let total = 0;

console.log(`Valor do Produto: R$ ${valor}`)

while (valor != 0) {
   let proxValor = prompt('Digite o próximo valor ou 0 para parar');
   let price = parseFloat(proxValor);
   
   if (price === 0) {
    break;
   } total += price;
   console.log(`Valor do Produto: R$ ${price}`);
}

alert("Total: R$ " + total.toFixed(2));
console.log(`Total: R$ ${total.toFixed(2)}`);


while (true) {
  let proxValor = prompt("Dinheiro fornecido:");
  let paid = parseFloat(proxValor);

  if (isNaN(paid)) {
    alert("Valor inválido. Tente novamente.");
    console.log(`O valor recebido foi: R$ ${paid}`)
    continue;
  }

  if (paid < total) {
    alert("O dinheiro fornecido é insuficiente.");
    continue;
  }

  let change = paid - total;
  alert("Troco: R$ " + change.toFixed(2));
  console.log(`O valor recebido foi: R$ ${paid.toFixed(2)}`)
  console.log(`Troco: R$ ${change.toFixed(2)}`)
  break;
};
 


