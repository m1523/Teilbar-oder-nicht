/********************************************************
 * Im oberen Teil werden Konstanten und Objekte definiert
 */


const IS_DIVIDABLE = "IST Teilbar";
const IS_NOT_DIVIDABLE = "IST NICHT Teilbar";

function Teilbarkeitsprüfer () {    
    this._arrToCheckAgain = [2,3,5,7,11,13,17] // Die Zahlen für die wir die Teilbarkeit prüfen möchten
    this._result = new Map();
    

    this.isDivisible = function (nrToCheck){
        //Nur Zahlen können weiter geprüft werden
        if(isNaN(nrToCheck)==false){
            for(let i=0; i<this._arrToCheckAgain.length; i++){      
                // Zunaechst Modulo bilden und temporär Zwischenspeichern
                tmpResult = nrToCheck % this._arrToCheckAgain[i]

                // Prüfen das i-te Element teilbar ist. Wenn bei Modulo 
                // ein Rest bleibt ist die Zahlt NICHT teilbar
                if(tmpResult == 0){
                    //Kein Rest => Die Zahl ist Teilbar
                    this._result.set(this._arrToCheckAgain[i], IS_DIVIDABLE);
                }
                else{
                    //Ein Rest = Die Zahl ist NICHT durch das i-te Element teilbar
                    this._result.set(this._arrToCheckAgain[i], IS_NOT_DIVIDABLE);
                }
            }
            console.log(this._result)
        }
        else {
            console.log("Dein Wert " + nrToCheck + " ist KEINE ZAHL")
        }
    }
} 

/********************************************************
 * Ab hier findet die Programmausführung statt. 
 */

// Als erstes Wird dem DOM ein neuer Listener hinzugefügt
document.addEventListener("DOMContentLoaded", addMyListener)

// Die Listener-Funktion wird beim Laden durch den Browser aufgerufen und fügt 
// ihrererseits dem Button einen OnClick Listener hinzu.
function addMyListener(){
    const ok_button = document.getElementById("btn_OK");
    ok_button.addEventListener("click", onclick);
}

// Wenn die Registrierung über den Listener erfolgreich war wird die Methode 
// bei Click auf den Button aufgerufen
function onclick(){
    //1. Den Wert aus dem Formular abfragen
    let valueToCheck = document.getElementById("txt_user_input").value
    
    //2. Ein Checker-Objekt vom Typ Teilbarkeitsprüfer ersellen und den zuvor 
    //   abgefragten Wert prüfen
    checker = new Teilbarkeitsprüfer();
    checker.isDivisible(valueToCheck);
    document.getElementById("checkerForm").reset();
}


