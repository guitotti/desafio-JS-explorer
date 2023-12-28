function getResult(a, b) {
  const result = a - b;
  console.log(`O resultado da subtração entre ${a} e ${b} é ${result}`);
}

export function sub(a, b) {
  return getResult(a, b);
}
