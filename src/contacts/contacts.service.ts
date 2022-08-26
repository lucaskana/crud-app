import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,){}

  async create(createContactDto: CreateContactDto) {
    return await this.contactRepository.save(createContactDto);
  }

  async findAll() {
    return await this.contactRepository.find();
  }

  async findOne(id: number) {
    return await this.contactRepository.findOneBy({id: id});
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    return await this.contactRepository.update(id,updateContactDto)
  }

  async remove(id: number) {
    return await this.contactRepository.delete(id)
  }
}
