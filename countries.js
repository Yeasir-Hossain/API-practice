const loadcountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => display(data))
}

loadcountries();

const display = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick = "loadcountry('${country.name}')" >Details</button>
        `;
        countriesDiv.appendChild(div);
    })
}

const loadcountry = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaydetails(data[0]))
}

displaydetails = country => {
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>population: ${country.population}</p>
    <img width="200px" src= "${country.flag}">
    `
}