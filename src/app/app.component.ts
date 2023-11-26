import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { formatRut } from "./helpers/format-rut";
import { rutValidator } from "./helpers/rut-custom-validator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "rut-validation";

  form = this.fb.group({
    rut: ["", [Validators.required, rutValidator()]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form.get("rut")?.valueChanges.subscribe((rut) => {
      this.form
        .get("rut")
        ?.setValue(formatRut(rut || ""), { emitEvent: false });
    });
  }
}
