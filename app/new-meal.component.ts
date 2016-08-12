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
    <input placeholder="Date" type="date" class="col-sm-12 input-lg" #newDate required>
    <button (click)="addMeal(newName, newDetails, newCalorie, newDate)" class="btn btn-primary btn-lg btn-block">Submit</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalorie: HTMLInputElement, newDate: HTMLInputElement){
    var model: string[] = [mealName.value, mealDetails.value, mealCalorie.value, newDate.value];
    this.onSubmitNewMeal.emit(model);
    mealName.value = "";
    mealDetails.value = "";
    mealCalorie.value = "";
  }
}
