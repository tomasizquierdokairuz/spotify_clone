import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    let  temp = value ;
    const hours = Math.floor((temp/3600));
    const minutes: number = Math.floor((value - hours *3600)/60);
    const seconds= value - hours *3600 - minutes *60   
    return hours + ' h ' + minutes + ' m ' + seconds + ' s';
  }
}
