import { Component } from '@angular/core';

@Component({
  selector: 'app-director-info',
  standalone: true,
  imports: [],
  templateUrl: './director-info.component.html',
  styleUrl: './director-info.component.css'
})
export class DirectorInfoComponent {
  name: string = "The Wachowskis";
}
