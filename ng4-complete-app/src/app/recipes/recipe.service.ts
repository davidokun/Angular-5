import {RecipeModel} from './recipe.model';

export class RecipeService {

  private recipes: RecipeModel[] = [
    new RecipeModel('Pizza',
      'Peperoni Pizza',
      'https://c1.staticflickr.com/5/4097/4932649560_807c7382e4_b.jpg'),
    new RecipeModel('Hamburger',
      'Hamburger with meat and salad',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiJasapoNK5KqZJnU1I9a9r3Hd1mwCAoSI-h-vtJj5aRfJu2M'),
    new RecipeModel('Soup',
      'Vegetables Soup',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF71o_RTMl1PKU8g1s_ofEwTgd04jtcTT21SLX0aRbXpRMNZXXnQ')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
