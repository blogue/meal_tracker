import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var sortByProperty = args[0];
    var meals = [];

    function compareCalories(a, b) {
      if (a.calories < b.calories)
      return -1;
      if (a.calories > b.calories)
      return 1;
      return 0;
      }
    function compareName(a, b) {
      if (a.name < b.name)
      return -1;
      if (a.name > b.name)
      return 1;
      return 0;
      }

    if (sortByProperty === "calories") {
      return input.sort(compareCalories);
    } else if (sortByProperty === "name") {
      return input.sort(compareName);
      }
    return input;
    }
  }
