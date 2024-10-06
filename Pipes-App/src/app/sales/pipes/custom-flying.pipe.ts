import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'FlyingPipe'
})
export class FlyingPipe implements PipeTransform {
    transform(flying: boolean ): string {
        return (flying) ? 'flying' : 'not flying';
    }
}