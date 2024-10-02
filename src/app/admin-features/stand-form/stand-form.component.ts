import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Stand } from '../../core/api/stands/stand';

@Component({
  selector: 'oms-stand-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './stand-form.component.html',
  styleUrl: './stand-form.component.scss'
})
export class StandFormComponent implements OnChanges {
  @Input() stand?: Partial<Stand>;
  @Output() formSubmit = new EventEmitter<Partial<Stand>>();

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.form = this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['stand'].currentValue && this.stand) {
      this.updateForm(this.stand);
    }
  }

  onSubmitForm(): void {
    this.formSubmit.emit(this.form.value);
  }

  private initForm(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
    })
  }

  private updateForm(stand: Partial<Stand>): void {
    this.form.patchValue(stand);
  }
}
