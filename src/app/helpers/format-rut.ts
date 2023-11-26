const partialRutRegex = /^[1-9][\d]*[\dK]?$/;

export function formatRut(rut: string) {
  let rutFormateado = rut;

  // Reemplaza k por K y elimina puntos y guiones
  rutFormateado = rutFormateado.replace("k", "K").replace(/[.-]/g, "");

  // Elimina el último caracter si no es válido
  if (!partialRutRegex.test(rutFormateado)) {
    rutFormateado = rutFormateado.slice(0, -1);
  }

  // Elimina el último caracter si tiene más de 9 caracteres
  if (rutFormateado.length > 9) {
    rutFormateado = rutFormateado.slice(0, -1);
  }

  // Agrega puntos y guiones
  const length = rutFormateado.length;

  if (length >= 2 && length <= 4) {
    rutFormateado = rutFormateado.slice(0, -1) + "-" + rutFormateado.slice(-1);
  } else if (length >= 5 && length <= 7) {
    rutFormateado =
      rutFormateado.slice(0, -4) +
      "." +
      rutFormateado.slice(-4, -1) +
      "-" +
      rutFormateado.slice(-1);
  } else if (length >= 8) {
    rutFormateado =
      rutFormateado.slice(0, -7) +
      "." +
      rutFormateado.slice(-7, -4) +
      "." +
      rutFormateado.slice(-4, -1) +
      "-" +
      rutFormateado.slice(-1);
  }

  // Retorna el rutFormateado formateado
  return rutFormateado;
}
