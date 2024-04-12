import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrl: './select-options.component.css',
})
export class SelectOptionsComponent {
  constructor(private router: Router) {}

  navigateToTutorial(isTutorial?: boolean) {
    if (isTutorial) {
      this.router.navigate(['/tutorial']);
    } else {
      this.router.navigate(['/tutorial'], { queryParams: { fromChat: true } });
    }
  }
}
