import axios from 'axios';
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Config } from './config';
import { IUser } from './IUser';

export const User = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    let token = request.headers['authorization'] || request.headers['Authorization'];
    if (token) {
      token = token.substring('Bearer '.length);
    } else {
      throw new UnauthorizedException();
    }
    let user: any = null;

    try {
      const resp = await axios.get(`${Config.USER_SERVICES}/token`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (resp.status === 200 || resp.status === 201) {
        user = resp.data;
        console.log(user);
      } else {
        throw new UnauthorizedException();
      }
    } catch (ex) {
      console.log(ex.response);
      throw new UnauthorizedException();
    }

    return user;
  },
);