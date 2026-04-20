import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  title = 'ORSProject-10-UI';
errorMessage: any;


constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.errorMessage = params['errorMessage'];
  });
}
}
