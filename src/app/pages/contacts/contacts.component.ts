import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/services/contact/contact.model';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];
  constructor(private ContactService: ContactService) { }
  
  displayedColumns= ["id","name","email","phone","action1","action2"];

  ngOnInit(): void {
    this.contacts = this.ContactService.getAll();
  }
  onDelete(id: number) {
  this.ContactService.deleteContact(id);
  }
  
 

}
