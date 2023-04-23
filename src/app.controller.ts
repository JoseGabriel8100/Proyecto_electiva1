import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('xyz')
  getXyz(): string {
    return 'Hello World!';
  }

  @Get('abc/:param')
  getParam(@Param('param') param: string): string {
    return `Param received: ${param}`;
  }

  @Get('pqr')
  getQueryParams(@Query() queryParams: any): string {
    const { param1, param2 } = queryParams;
    return `Params received: ${param1} and ${param2}`;
  }
}
