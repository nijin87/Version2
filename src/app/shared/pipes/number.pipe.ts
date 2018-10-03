import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"numberPipe"
})
export class numberPipe  implements PipeTransform {

    transform(Value,arg) {
        if(!Value){
            Value = 0;
        }
        console.log(Value,arg);
        return parseFloat(Value).toFixed(arg);
    }
}