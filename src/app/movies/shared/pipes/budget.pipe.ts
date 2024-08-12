import { CurrencyPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'budget',
    standalone: true,
})
export class BudgetPipe implements PipeTransform{
    
        constructor(private currencyPipe: CurrencyPipe) {}

        transform(value: string, currencyCode: string = 'USD'): string | null {
        
              const numbers = value.split('-').map((num: string) => parseInt(num, 10));
          
              if (numbers.length === 1) {
                return this.currencyPipe.transform(numbers[0], currencyCode) + ' million';
              }
          
              if (numbers.length === 2) {
                const firstNumber = this.currencyPipe.transform(numbers[0], currencyCode);
                const secondNumber = this.currencyPipe.transform(numbers[1], currencyCode);
                return firstNumber  + ' million' + ' - ' + secondNumber + ' million';
              
              }
              return null;
            }
    }