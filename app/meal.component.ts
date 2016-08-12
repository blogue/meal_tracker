import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template:`
  <div class="meal">
    <h5>Date: {{meal.date}}</h5>
    <h3>{{meal.name}} | Calories: {{meal.calories}}</h3>
    <h4>Description: {{meal.details}}</h4>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
