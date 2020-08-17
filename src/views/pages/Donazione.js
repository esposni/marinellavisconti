import React from "react";
// reactstrap components
import PopUpButton from"components/PopUpButton";

let textbutton2=`
Ti ringraziamo per il tuo supporto al Progetto Pien💛 Essere e per la raccolta fondi per le borse di
studio per coloro che intendono formarsi nella Braveheartfulness School, progetto orientato a sostenere...“piccoli bodhisattva crescono”...” e per tutti i progetti orientati a sostenere chi sostiene.\n
Se desideri iscriverti all’Associazione Progetto Pien💛Essere puoi compilare il questionario sotto e versare euro 25 di tessera sostenitore a:\n
 Progetto Pien💛Essere  \n
 Banca\n
  IBAN`

export default function DonazioneButton() {

    return (
        <>
    <h5 align="left">Gli incontri sono ad offerta libera. E’ molto gradita l’iscrizione all'associazione. Ci aiutereste così a sostenere chi sostiene chè è il nostro intento principale.</h5>    
    <h5 align="left">Se desideri fare una donazione per favore clicca il bottone sottostante</h5>
    <PopUpButton title="Donazione" content={textbutton2}/>
    </>
    );
}