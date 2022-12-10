import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(data: Array<any>, property: string, criteria: string) {
    return data.filter((item) => item[property] === criteria);
  }
}
