
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

                this.region = paises[this.numer].region;

                this.innerHTML = ` 
             <div >
                <div id= "basic"  >
                <div id="tit">País : </div>
                <div id="pais">
                <a onclick="document.getElementById('myModal').style.display='block'" >${this.country}</a></div>
                 </div>
                 
                <div id= "basic"  >
                <div id="tit">Capital : </div>
                <div  id="result" >${this.capital}</div>
                 </div>
                
                <div id= "basic"  >
                <div id="tit" >Población : </div>
                <div  id="result">${this.population} hab.</div>
                </div>

                <div id="myModal" class="modal">
                        <div class="modal-content">
                        <span onclick="document.getElementById('myModal').style.display='none'" id="close">&times;</span>
                        <p class="region" >Continente :  ${this.region}</p>
                        </div>
                </div>
                

            </div>
         
                <style>
                #pais{
                    width: 50%; font-size: 18px ; font-family: Georgia, serif ; 
                    color : #008B8B;
                }
                #basic {
                    width: 100% ;display: flex; 
                    margin: 5px 2px ; text-align: center
                }
                #tit{
                    font-weight: bold; width: 50%; 
                }
                #result {
                    width: 50%; 
                }

               

           
                .modal {
                    display: none; 
                    position: fixed; 
                    z-index: 1; 
                    padding: 300px; 
                    left: 0;
                    top: 0;
                    width: 100%; 
                    height: 100%; 
                    overflow: auto; 
                    background-color: rgb(0,0,0); 
                    background-color: rgba(0,0,0,0.4);
                  }

                  .modal-content {
                    background-color: #fefefe;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                    text-align: center;
                  }

                  #close {
                    color: #aaaaaa;
                    float: right;
                    font-size: 22px;
                    font-weight: bold;
                  }

                    #close:hover,
                    #close:focus {
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                    }

                    @media only screen and (max-width: 655px){
                        #basic {
                            width: 100% ;display: flex; 
                            margin: 5px 2px ; text-align: center;
                            flex-wrap: wrap;
                        }
                        #pais{
                            width: 100%; font-size: 18px ; font-family: Georgia, serif ; 
                            color : #008B8B; 
                        }
                       
                        #tit{
                            font-weight: bold; width: 100%;
                            background-color: lightblue;
                            
                        }
                        #result {
                            width: 100%; 
                        }
                       
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


