import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interfaces';

export class CountryMapper {
  // esta es una función que recibe un RESTCountry y devuelve un Country para mapear los datos de la API a la interfaz que usamos en la app
    static mapRestCountryToCountry(restCountry: RESTCountry): Country {
      return {
          capital: restCountry.capital.join(', '),
          cca2: restCountry.cca2,
          flag: restCountry.flag,
          flagSvg: restCountry.flags.svg,
          name: restCountry.translations['spa'].common ?? 'No spanish name',
          population: restCountry.population,

          region: restCountry.region,
          subRegion: restCountry.subregion,
      };
    }

  // esta es una función que recibe un array de RESTCountry y devuelve un array de Country para mapear los datos de la API a la interfaz que usamos en la app
    static mapRestCountryArrayToCountryArray(
        restCountries: RESTCountry[]
    ): Country[] {
        return restCountries.map(this.mapRestCountryToCountry);
    }
}
