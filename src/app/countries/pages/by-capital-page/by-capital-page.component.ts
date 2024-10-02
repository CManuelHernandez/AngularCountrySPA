import { Component } from '@angular/core';
import { CountrieService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountrieService) {}

  searchByCapital(term: string): void {
    this.countriesServices.serchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
