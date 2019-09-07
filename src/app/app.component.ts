import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';

  addClass() {
    document.querySelector('body').classList.add('red');
  }
  addClass2() {
    document.querySelector('body').classList.remove('red');
    document.querySelector('body').classList.add('blue');
  }
  removeClass(): void {
    document.querySelector('body').classList.remove('red', 'blue');
  }
}




