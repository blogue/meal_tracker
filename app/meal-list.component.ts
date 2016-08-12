import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CalorieTotalDisplay } from './calorie-total.component';
import { CaloriePipe } from './calorie.pipe';
import { SortPipe } from './sort.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe, SortPipe],
  directives: [MealComponent, NewMealComponent, EditMealComponent, CalorieTotalDisplay],
  template:`
  <div class="container">
    <label>Fitler by Calories:  </label>
    <select (change)="onChangeCalorie($event.target.value)" class="filter">
      <option value="all" selected="selected">All</option>
      <option value="low">Low Calories</option>
      <option value="high">High Calories</option>
    </select>
    <label>Sort by: </label>
    <select (change)="onChangeSort($event.target.value)" class="filter">
      <option value="all" selected="selected">Unsorted</option>
      <option value="calories">Calories</option>
      <option value="name">Name</option>
    </select>
    <h1 id="meals">Meals</h1>
    <meal-display *ngFor="#currentMeal of mealList | calorie:filterCalories | sort:sortByProperty"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <calorie-total
      [mealList]="mealList">
    </calorie-total>
    <edit-meal *ngIf="selectedMeal"
      [meal]="selectedMeal">
    </edit-meal>
    <new-meal
      (onSubmitNewMeal)="createMeal($event)">
    </new-meal>
  </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  public sortByProperty: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(param): void {
    this.mealList.push(
      new Meal(param[0], param[1], parseInt(param[2]), param[3])
    );
  }
  onChangeCalorie(filterOption) {
    this.filterCalories = filterOption;
  }
  onChangeSort(sortOption) {
    this.sortByProperty = sortOption;
  }
}
