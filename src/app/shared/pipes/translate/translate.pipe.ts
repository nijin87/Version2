import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../../services/languageService/language.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor( public languageService: LanguageService) {}
  transform(value: any, args?: any): any {
    let transformedInput = this.languageService.languageDictionary[value];
    transformedInput = (transformedInput !== undefined) ? transformedInput : value;
    return transformedInput;
  }

}
