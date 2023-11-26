import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { obtenerDigitoVerificador } from "./digito-verificador";

const rutRegex = /^[1-9][\d]{5,7}[\dK]$/;

/** A hero's name can't match the given regular expression */
export function rutValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let rut = control.value as string;

    // Reemplaza k por K y elimina puntos y guiones
    rut = rut.replace(/[.-]/g, "");

    // Condición 1: Valida que el rut siga el patrón
    if (!rutRegex.test(rut)) {
      const message = "No sigue el formato (XX.XXX.XXX-X).";
      return { message };
    }

    // Condición 2: Valida el dígito verificador
    const dv = rut.slice(-1);
    const rutSinDv = rut.slice(0, -1);
    const dvCalculado = obtenerDigitoVerificador(rutSinDv);

    if (dv !== dvCalculado) return { message: "Digito verificador inválido." };

    return null;
  };
}
