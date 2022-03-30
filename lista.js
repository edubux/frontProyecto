
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
            <div style=" width: 100% ;display: flex " >
            <div style="font-weight: bold; width: 50%">País : </div>
            <div  style=" text-align: right; width: 50% " >${this.country}</div>
             </div>
            <div  style="">Hola ${this.capital}</div>
            <div style="" >Hola ${this.population}</div>
            <p>Esto es un párrafo</p>
             </div>`;


            });
            this.style.width="33.33%";
            this.style.border="1px solid red";
            this.style.float="left";
            this.style.padding="10px";
            
    }



}


window.customElements.define("paises-api", cuadros);
console.log("prueba");

$("#cambiar").click(function () {
    $("#text").html("<h1>Se cambio texto </h1>");
})


