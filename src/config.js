const BASE_URL = 'https:/restcountries.com/v2/';

<<<<<<< HEAD
export const ALL_COUNTRIES = BASE_URL + 'all';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');
=======
export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');

export const fullLink = 'https://restcountries.com/v2/all?fields=name,capital,flags,population,region';
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488
