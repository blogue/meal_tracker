import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, NewMealComponent],
  template:`
  <div class="container">
    <label>Fitler by Calories:  </label>
    <select (change)="onChangeCalorie($event.target.value)" class="filter">
      <option value="all" selected="selected">All</option>
      <option value="low">Low Calories</option>
      <option value="high">High Calories</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | calorie:filterCalories"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <new-meal
      (onSubmitNewMeal)="createMeal($event)"></new-meal>
  </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(param): void {
    this.mealList.push(
      new Meal(param[0], param[1], parseInt(param[2]))
    );
  }
  onChangeCalorie(filterOption) {
    this.filterCalories = filterOption;
  }
}
