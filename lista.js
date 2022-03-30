
class cuadros extends HTMLElement {
    constructor() {
        super();
     
        this.id ;
    }

    static get observedAttributes() {
        return ['id'];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {

            switch(nameAttr){
            case "id":
                this.valor = newValue;
                this.numer= parseInt(this.valor);

               
            break;
        }

    }

    connectedCallback() {
       

        const API_URL = 'https://restcountries.com/v3.1/lang/spa';
        const xhr = new XMLHttpRequest();
        //const lista = $("#nombre");
        const lista = document.querySelector(".columns-desktop");
        const ul = document.createElement('ul');
        fetch(`${API_URL}`)
        .then((response) => response.json())
        .then((paises) => {

            console.log(paises.length);
            console.log(paises);
           
            this.country =paises[this.numer].name.common;
            this.capital =paises[this.numer].capital;
            this.population =paises[this.numer].population;

            this.innerHTML = `<div>
            <h1>Hola ${typeof(this.numer)}</h1>
            <h1>Hola ${this.numer}</h1>
            <h1>Hola ${this.country}</h1>
            <h1>Hola ${this.capital}</h1>
            <h1>Hola ${this.population}</h1>
            <p>Esto es un párrafo</p>
             </div>`;

          
        });
        

    }



}


window.customElements.define("paises-api", cuadros);
console.log("prueba");

$("#cambiar").click(function () {
    $("#text").html("<h1>Se cambio texto </h1>");
})


