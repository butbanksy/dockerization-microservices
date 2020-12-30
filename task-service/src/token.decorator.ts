import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    let token = request.headers["authorization"] || request.headers["Authorization"]
    if(token)
    {
      token = token.substring("Bearer ".length)
    }
    else{
      throw new UnauthorizedException()
    }
    return token
  },
);