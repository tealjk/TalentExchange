import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {ButtonComponent} from './button.component'
import {TableComponent} from './table.component'



@Component({
    selector: 'my-app',
    template: '<h2>MAINS!!!</h2><table></table>',
	directives: [CoursesComponent,ButtonComponent, TableComponent]
})
	
	
	
	
	
	
	
export class AppComponent { }