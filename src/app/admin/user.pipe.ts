import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../model/user';

@Pipe({name: 'listeUserFilter'})
export class UserPipe implements PipeTransform {

  transform(list: User[], filterText:
  string): any {
    return list ? list.filter(item =>
    item.username.search(new RegExp(filterText,
    'i')) > -1) :[];
  }

}
