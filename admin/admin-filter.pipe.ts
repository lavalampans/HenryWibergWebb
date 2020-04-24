import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'adminFilter',
    pure: false
})
export class adminFilterPipe implements PipeTransform {
    transform(users: any[], searchTerm: string): any[] {
        if(!users || !searchTerm) {
            return users;
        }
        return users.filter(user =>
            user.displayName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}