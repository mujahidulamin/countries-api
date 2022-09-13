const loadCountires = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        console.log(country);
        div.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</>p <br>    <br>  
        <button onclick = "loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(div);
    })
}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    // console.log('Get Country Details', code);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    const countryDetail = document.getElementById('country-detail');
    countryDetail.classList.add('container');
    countryDetail.innerHTML = `
        <h2> Country Name: ${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <img src = "${country.flags.png}">
    `
}
loadCountires();