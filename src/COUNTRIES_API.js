const BASE_URL = 'https://restcountries.com/v3.1';

const api_settings = {
   fetchCountries: async function(){
      const endpoint = `${BASE_URL}/all`;
      return await (await fetch(endpoint)).json();
   }
};

export default api_settings;
