import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'UpperPipe'
})
export class UpperPipe implements PipeTransform {
    transform(value: string, inUppercase: boolean = true ): string {
        if (inUppercase) {
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }
    }
}