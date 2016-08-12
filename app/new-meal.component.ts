import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:`
  <div>
    <h3>Add Meal</h3>
      <input placeholder="Name" class="col-sm-12 input-lg" #newName required> 
      <input placeholder="Calorie" class="col-sm-12 input-lg" #newCalorie required>
      <input placeholder="Details" class="col-sm-12 input-lg" #newDetails required>
      <button (click)="addMeal(newName, newDetails, newCalorie)" class="btn btn-success btn-lg">Submit</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalorie: HTMLInputElement){
    var model: string[] = [mealName.value, mealDetails.value, mealCalorie.value];
    this.onSubmitNewMeal.emit(model);
    mealName.value = "";
    mealDetails.value = "";
    mealCalorie.value = "";
  }
}
