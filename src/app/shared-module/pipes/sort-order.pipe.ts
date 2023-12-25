import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sortOrder",
    pure: true,
    standalone: true,
})
export class SortOrderPipe implements PipeTransform {
  transform(data: Array<any>, args: string) {
    data.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return data;
  }
}
