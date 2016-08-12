import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'calorie-total',
  inputs: ['mealList'],
  template:`
    <h2>Total Calories: {{totalCalories()}}</h2>
  `
})
export class CalorieTotalDisplay {
  public mealList: Meal[];
  totalCalories(){
    var total = 0;
    this.mealList.forEach(function(meal){
      total += meal.calories;
    });
    return total;
  }

}
