import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="jumbotron">
      <div class="container">
        <h1>Meal Tracker App</h1>
      </div>
    </div>
    <div class="container">
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
      new Meal("Spaghetti & Meatballs with Merlot", "Large bowl of spaghetti with maranara and meatballs. Two glasses of wine.", 1500),
      new Meal("Baked Ziti & Garlic bread with Zinfandel", "Heaping pile of ziti with a generous helping of garlic bread. Bottle of Zinfandel.", 2000),
      new Meal("Manicotti & Linguine w/ Clams plus Chianti", "Two pastas enter, one man leaves.", 1750),
      new Meal("Spinach Salad w/ Vinaigrette", "Only ate half. Stuffed to the rafters.", 150)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{
    console.log(clickedMeal);
  }
}
