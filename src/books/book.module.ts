import { Module } from '@nestjs/common';
import { BooksResolver } from './book.resolver';

@Module({
  controllers: [],
  providers: [BooksResolver],
})
export class CatsModule {}