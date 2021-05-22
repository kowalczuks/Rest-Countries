const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    }catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Population:</b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b>Region:</b>
                    ${item.region}
                </p>
                <p>
                    <a href="pais.html?name=${item.name}">Mas Informacion</a>
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos

}