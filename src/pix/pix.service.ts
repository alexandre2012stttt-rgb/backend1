import { Injectable } from '@nestjs/common';

@Injectable()
export class PixService {
  gerarPix() {
    return { mensagem: 'PIX gerado com sucesso!' };
  }
}
