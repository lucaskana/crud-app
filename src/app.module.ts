import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/entities/contact.entity';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/service/auth/auth.service';
import { AuthController } from './auth/service/auth/auth.controller';
import { AuthModule } from './auth/service/auth/auth.module';
import { Users } from './users/entities/user.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ContactsModule,
    TypeOrmModule.forFeature([Contact]),
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
