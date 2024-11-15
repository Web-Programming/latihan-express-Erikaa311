import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="Listing">
     <img class="listing-photo" [src]="housingLocation.photo"> alt="Exterior photo of {{housingLocation.name}}">
     <h2 class="listing-heading"></h2>
     <p class="listing-location"></p>
</section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:Housinglocation;
}
