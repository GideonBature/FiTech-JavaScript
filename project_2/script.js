// fetch list of countries from public api

// - Find a Public API that lists all Countries of the World.
// https://restcountries.com/v3.1/all
const api_url = "https://api.first.org/data/v1/countries";

async function get_all_countries(api_url) {
  try {
    const res = await fetch(api_url);
    const data = await res.json();
    const index_data = data.data;
    
    for (let i of Object.values(index_data)) {
      console.log(i.countries);
      return i.countries;
    }
    
    // {
    //   DZ: { country: 'Algeria', region: 'Africa' },
    //     AO: { country: 'Angola', region: 'Africa' },
    // }
  } catch(error) {
    console.log(error);
  }
}

get_all_countries(api_url);

async function seach_country(api_url, name) {
  const res = await get_all_countries(api_url);
  const countries = await res.json();
  
  for (let country of countries) {
    if (country === name) {
      return country;
    }
  }
}

seach_country(api_url, "Nigeria");