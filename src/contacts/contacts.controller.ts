import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  HttpCode,
  Delete,
} from '@nestjs/common';
import { Contacts, ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contacts.dto';
import { ParseIntPipe } from '@nestjs/common';

import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateContactDto } from './dto/update-contacts.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }

  @Get()
  getAllContacts() {
    return this.contactsService.getAllContacts();
  }

  @Get(':id')
  getContactById(@Param('id', ParseIntPipe) id: number) {
    const contactFounded = this.contactsService.getContactById(id);
    if (!contactFounded) {
      throw new NotFoundException('...');
    }

    return contactFounded;
  }
  @Put(':id')
  updateContactById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateContactDto,
  ) {
    const updated = this.contactsService.updateContactById(id, updateData);
    console.log('Atualizado:', updated);
    return updated;
  }

  @Delete(':id')
  deleteContactById(@Param('id', ParseIntPipe) id: number) {
    const deleteContact = this.contactsService.deleteContactById(id);
    return {
      message: 'Contato deletado com sucesso!',
    };
  }
}
