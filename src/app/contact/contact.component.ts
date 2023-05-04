import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgZone } from '@angular/core';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ContactForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.ContactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      issue: ['']

    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.ContactForm.valid) {
      this.crudService.AddBook(this.ContactForm.value).subscribe(
        () => {
          console.log('Data added successfully!');
          this.ngZone.run(() => this.router.navigateByUrl('/'));
          alert('Thank you for cooperating!');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert('Please fill the form.');
    }
  }
}
