
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

                this.habt = paises[this.numer].population;
                this.population = new Intl.NumberFormat().format(this.habt);

                this.innerHTML = ` 
             <div >
                <div id= "basic"  >
                <div id="tit">País : </div>
                <div  style=" width: 50%; font-size: 18px ; font-family: Georgia, serif ; color : #008B8B" >
                <a onclick="document.getElementById('myModal').style.display='block'" >${this.country}</a></div>
                 </div>
                 
                <div id= "basic"  >
                <div id="tit">Capital : </div>
                <div  style="  width: 50% " >${this.capital}</div>
                 </div>
                
                <div id= "basic"  >
                <div id="tit" >Población : </div>
                <div  style=" width: 50% " >${this.population} hab.</div>
                </div>

                <div id="myModal" class="modal">
                        <div class="modal-content">
                        <span onclick="document.getElementById('myModal').style.display='none'" id="close">&times;</span>
                        <p>Some text in the Modal..</p>
                        </div>
                </div>
                

            </div>
         
                <style>
               
                #basic {
                    width: 100% ;display: flex; 
                    margin: 5px 2px ; text-align: center
                }
                #tit{
                    font-weight: bold; width: 50%
                }
                .modal {
                    display: none; /* Hidden by default */
                    position: fixed; /* Stay in place */
                    z-index: 1; /* Sit on top */
                    padding-top: 300px; /* Location of the box */
                    left: 0;
                    top: 0;
                    width: 100%; /* Full width */
                    height: 100%; /* Full height */
                    overflow: auto; /* Enable scroll if needed */
                    background-color: rgb(0,0,0); /* Fallback color */
                    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
                  }

                  .modal-content {
                    background-color: #fefefe;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                  }

                  #close {
                    color: #aaaaaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                  }

                    #close:hover,
                    #close:focus {
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                    }
                </style>
                     `;


            });
        this.style.width = "33.33%";
        this.style.border = "1px solid green";
        this.style.padding = "10px";
        this.style.marginBottom = "5px"






    }



}


window.customElements.define("paises-api", cuadros);
console.log("prueba");

$("#cambiar").click(function () {
    $("#text").html("<h1>Se cambio texto </h1>");
})


