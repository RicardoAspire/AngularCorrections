import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.css']
})
export class SpinerComponent {

  constructor(    
    private spinnerService: SpinnerService,
  ) { }
  isLoading$ = this.spinnerService.isLoading$;

}
