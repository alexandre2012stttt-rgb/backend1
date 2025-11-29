import { Controller, Get } from '@nestjs/common';
import { PixService } from './pix.service';

@Controller('pix')
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Get('status')
  status() {
    return { status: 'ok' };
  }

  @Get('gerar')
  gerar() {
    return this.pixService.gerarPix();
  }
}
