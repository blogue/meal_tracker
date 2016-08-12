import { Component } from 'angular2/core';
import { Meal } from './meal.model';
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1></h1>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Spaghetti & Meatballs", "Large bowl of spaghetti with maranara", 1500),
      new Meal("Spaghetti & Garlic bread", "Heaping pile of spaghetti with a generous helping of garlic bread", 2000),
      new Meal("Spaghettic & Linguini", "Two pastas", 1750)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{
    console.log(clickedMeal);
  }
}
