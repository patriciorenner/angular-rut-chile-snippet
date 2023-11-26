const validationArray = [2, 3, 4, 5, 6, 7];
const validationArrayLength = validationArray.length;

export function obtenerDigitoVerificador(rut: string) {
  let suma = 0;
  const length = rut.length;
  for (let i = 0; i < length; i++) {
    suma +=
      Number(rut[length - 1 - i]) * validationArray[i % validationArrayLength];
  }
  const resto = suma % 11;
  const dv = 11 - resto;
  return { 10: "K", 11: "0" }[dv] || dv.toString();
}
