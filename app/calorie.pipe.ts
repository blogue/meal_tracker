import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calorie',
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var highLow = args[0];
    var meals = [];
    for(var i = 0; i < input.length; i++) {
      if (input[i].calories < 500 && highLow === "low") {
        meals.push(input[i]);
      } else if (input[i].calories > 500 && highLow === "high") {
        meals.push(input[i]);
      } else if (highLow === "all") {
        return input;
      }
    }
    return meals;
  }
}
