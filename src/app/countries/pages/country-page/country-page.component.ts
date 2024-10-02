import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountrieService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countrieService: CountrieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countrieService.searchCountryByAlphaCode(id))
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        console.log('Hay pais');
        return;
      });
  }
}
