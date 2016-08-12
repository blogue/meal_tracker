import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker App</h1>
        <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected">
        </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Spaghetti & Meatballs", "Large bowl of spaghetti with maranara and meatballs", 1500),
      new Meal("Baked Ziti & Garlic bread", "Heaping pile of ziti with a generous helping of garlic bread.", 2000),
      new Meal("Manicotti & Linguini with Chianti", "Two pastas enter, one man leaves.", 1750),
      new Meal("Spinach Salad w/ Vinaigrette", "Only ate half. Stuffed to the rafters.", 150)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{
    console.log(clickedMeal);
  }
}
