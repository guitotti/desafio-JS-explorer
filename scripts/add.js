function getResult(a, b) {
  const result = a + b;  
  console.log(`O resultado da soma entre ${a} e ${b} é ${result}`);  
}

export function add(a, b) {
  return getResult(a, b);
}