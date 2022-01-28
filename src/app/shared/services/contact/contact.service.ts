import { Injectable, Query } from '@angular/core';
import { Store } from '@datorama/akita';
import { Contact } from './contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  constructor() { }
  getAll() {
    return this.contacts;
  }

  getById(id: number) {
    return this.contacts.find(c => c.id === id);
  }
  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
  editContact(contact: Contact) {
    const storedContact = this.contacts.find(c => c.id === contact.id);
    storedContact.name = contact.name;
    storedContact.email = contact.email;
    storedContact.phone = contact.phone;
  }
  deleteContact(id: number) {
    const index = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(index, 1);
    //this.contacts = this.contacts.filter(c => c.id !== id);
    
  }
  
}
export class CountersService {
  private stores = new Map();

  createState(name: string) {
    const store = new Store({ counter: 0 }, { name });
    
    const state = { store, };
    this.stores.set(name, state);

    return state
  } 

  getState(name: string) {
    return this.stores.get(name);
  } 
}