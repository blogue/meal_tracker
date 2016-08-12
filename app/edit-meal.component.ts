import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template:`
  <div>
    <h3>Edit Meal: </h3>
    <input [(ngModel)]="meal.name" class="input-lg"/>
    <input [(ngModel)]="meal.calories" class="input-lg"/>
    <input [(ngModel)]="meal.details" class="input-lg"/>
  </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
