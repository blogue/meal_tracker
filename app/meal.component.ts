import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template:`
    <h3>Meal: {{meal.name}} | Calories: {{meal.calories}}</h3>
    <h4>Description: {{meal.details}}</h4>
  `
})
export class MealComponent {
  public meal: Meal;
}
