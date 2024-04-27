import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  text = 'Welcome to Angular 8!'
  description = 'Welcome to our awesome first bootstrap style angular project. Start building your project with the most popular JS framework'

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December']
  
  isAvailable = true;
}
