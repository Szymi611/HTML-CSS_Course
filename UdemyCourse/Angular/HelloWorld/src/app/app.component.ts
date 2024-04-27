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
  numberOfMonths = this.months.length;
  numberOfMonths2 = 10;

  // setTrue(){
  //   console.log('Now, we have set the value to TRUE')
  // }
  // setFalse(){
  //   console.log('Now, we have set the value to FALSE')
  // }

  // //Events Extended
  // alertClass: string = 'alert-success';
  // message: string = 'This is a success message';

  // handleButtonClick(isTrue: boolean){
  //   if(isTrue){
  //     this.alertClass = 'alert-success';
  //     this.message = 'This is a success message';
  //   }else{
  //     this.alertClass = 'alert-warning';
  //     this.message = 'This is an warning message';
  //   }
  // }

  isSwitchedOn: boolean= false;
  message: string = 'This is a warning message';

  //Function to handle the switch toggle
  handleSwitch(){
    if(this.isSwitchedOn){
      this.message = 'This is a success message';
    }else{
      this.message = 'This is a warning message';
    }
  }

  //Pipes in Angular
  myMessage = 'This is a sub-heading';

}
