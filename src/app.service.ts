import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloByName(name: string): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }

 

  getName():string{
    return"mi nombre es jose"
  }
}
function l(offset: number) {
  throw new Error('Function not implemented.');
}

