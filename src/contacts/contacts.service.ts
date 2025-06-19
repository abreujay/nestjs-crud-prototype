import { Injectable } from '@nestjs/common';
import { retry } from 'rxjs';
import { UpdateContactDto } from './dto/update-contacts.dto';
import { NotFoundException } from '@nestjs/common';

export interface Contacts {
  id?: number;
  name: string;
  phoneNumber: string;
}

@Injectable()
export class ContactsService {
  private contacts: Contacts[] = [];
  private idCounter: number = 1;

  createContact(contact: Contacts) {
    const newContact = {
      id: this.idCounter++,
      ...contact,
    };

    this.contacts.push(newContact);
    return newContact;
  }

  getAllContacts() {
    console.log(this.contacts);
    return this.contacts;
  }

  getContactById(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }

  updateContactById(id: number, updateData: UpdateContactDto) {
    const contact = this.contacts.find((contact) => contact.id === id);

    if (!contact) {
      throw new NotFoundException('...');
    }

    if (updateData.name !== undefined) {
      contact.name = updateData.name;
      return contact
    }

    if (updateData.phoneNumber !== undefined) {
      contact.phoneNumber = updateData.phoneNumber;
      return contact
    }

    return contact;
  }

  deleteContactById(id: Number) {

    const index = this.contacts.findIndex(contact => contact.id === id)
    if (index === -1) {

        throw new NotFoundException('Contato Não Encontrado...')

    }

    return this.contacts.splice(index, 1)

  }
}
