import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'array',
    standalone: true
})
export class ArrayPipe implements PipeTransform {
    transform(value: string[], separator: string = ', ') {

        return value.join(separator);
    }
    
}