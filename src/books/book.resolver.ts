import { Book } from './book.model';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Book)
export class BooksResolver {
  constructor() {}
  @Query(() => Book,{nullable: true})
  test(@Args('author') auth: string) {
    console.log(auth);
    return null
  }
  @Query(() => Book)
  test2(){
console.log("jsdgfdkjgh")
return {id:[1,2,"3"]}
  }
}
