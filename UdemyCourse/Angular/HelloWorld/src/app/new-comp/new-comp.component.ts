import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent {
  feature_heading = 'Awesome Feature';
  feature_description ='Some awesome feature to show feature cards'
  feature_button = 'Learn more'
}
