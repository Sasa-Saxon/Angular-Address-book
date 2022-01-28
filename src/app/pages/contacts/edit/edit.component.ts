import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/shared/services/contact/contact.model';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  contact: Contact = {};

  editForm = new FormGroup({
    nameCtrl: new FormControl(null, [Validators.required]),
    emailCtrl: new FormControl(null, [
      Validators.required,
      Validators.pattern('[A-Za-z0-9_=]+([-+.\'][A-Za-z0-9_=]+)*@[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*')
    ]),
    phoneCtrl: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    const pathId = this.route.snapshot.paramMap.get('id');
    if (pathId) {
      this.id = Number(pathId);
      this.setFields();
    }
    this.header = this.id ? 'Edit contact' : 'Add contact';
  }

  save() {
    let contact: Contact = {
      id: this.id || this.contactService.contacts.length + 1,
      name: this.editForm.get('nameCtrl').value,
      email: this.editForm.get('emailCtrl').value,
      phone: this.editForm.get('phoneCtrl').value,
    }
    if (this.id) {
      this.contactService.editContact(contact);
    } else {
      this.contactService.addContact(contact);
    }
    this.router.navigate(['']);
  }

  private setFields() {
    if (this.id) {
      const contact = this.contactService.getById(this.id);
      this.editForm.get('nameCtrl').setValue(contact.name);
      this.editForm.get('emailCtrl').setValue(contact.email);
      this.editForm.get('phoneCtrl').setValue(contact.phone);
    }
  }
}

