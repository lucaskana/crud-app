import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Users } from '../../../users/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('api/v1/auth/')
export class AuthController {
   constructor(private usersService: AuthService) { }
  
   @Post('signup')
   async signup(@Body() user: Users): Promise<Users> {
       return this.usersService.signup(user);
   }

   @UseGuards(AuthGuard('local'))
   @Post('login')
   async login(@Request() req) {
       return this.usersService.login(req.user)
   }
}
