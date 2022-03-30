
class cuadros extends HTMLElement {
    constructor() {
        super();

        this.id;
    }

    static get observedAttributes() {
        return ['id'];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {

        switch (nameAttr) {
            case "id":
                this.valor = newValue;
                this.numer = parseInt(this.valor);

                break;
        }

    }

    connectedCallback() {

        const API_URL = 'https://restcountries.com/v3.1/lang/spa';
        const xhr = new XMLHttpRequest();
              
        fetch(`${API_URL}`)
            .then((response) => response.json())
            .then((paises) => {

                console.log(paises.length);
                console.log(paises);

                this.country = paises[this.numer].name.common;
                this.capital = paises[this.numer].capital;
                this.population = paises[this.numer].population;

                this.innerHTML = `<div >
            <div>Hola ${typeof (this.numer)}</div>
            <div style="color: green">Hola ${this.numer}</div>
            <div>Hola ${this.country}</div>
            <div>Hola ${this.capital}</div>
            <div>Hola ${this.population}</div>
            <p>Esto es un párrafo</p>
             </div>`;


            });
            this.style.width="33.33%";
            this.style.border="1px solid red";
            this.style.float="left";
            this.style.padding="10px";
            // this.style.color = "green";
            // this.style.fontFamily = "sans-serif";
            // this.style.display= "flex";
            // this.style.justifyContent= "flex-start";
    }



}


window.customElements.define("paises-api", cuadros);
console.log("prueba");

$("#cambiar").click(function () {
    $("#text").html("<h1>Se cambio texto </h1>");
})


