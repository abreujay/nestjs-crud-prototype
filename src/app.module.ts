import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ContactsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
