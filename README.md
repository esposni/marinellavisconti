# Progetto Pienessere How to Use!


# Where insert image 
--> About Ritiri inser image here: src/assets/img/ritiri
--> Otherwise inser image here: src/assets/img

 <img
    alt="..."
    style={{width:"20em",height:"20em"}}
    src={require("assets/img/ritiri/<img>")} 
></img>

## How to add a new User:
1. Open src/assets/utenti.json
2. Fill with info and Copy - Paste inside the file:

 ,{
        "id":11,
        "link":"roberta-peano",
        "name":"Roberta Peano",
        "desc":" Psicoterapeuta ad orientamento contemplativo, supervisore EMDR",
        "img":"roberta.jpg",
        "self":false,
        "school":true,
        "curriculum":["Psicologa, psicoterapeuta e supervisore ad orientamento contemplativo,si è formata per molti anni nell'approccio contemplativo in psicoterapia, nella conduzione di gruppi, e nella supervisione, con Anne Overzee e Deidri Gordon, insegnanti senior del Karuna Institute (UK), dove è nato il modello Core Process che integra la psicoterapia occidentale con la tradizione buddista e la meditazione di consapevolezza. Sta completando il training biennale di Kum-Nye con Maura Sills, fondatrice del Karuna Institute. Da molti anni pratica la meditazione di consapevolezza, e prova con percorsi di varia natura ad integrare nel lavoro come nella vita personale approfondimenti spirituali, bioenergetici e transpensonali che richiamano ad una visione ancestrale, antica e  olistica, dell’uomo e della realtà, quella visibile e quella invisibile. Esperta in psicotraumatologia, supervisore e terapeuta EMDR, conduce percorsi in gruppo di formazione alla meditazione di Mindfulness come contatto con se stessi, e offre tempi (serate, giornate, ritiri) di consapevolezza che si configurano come spazi per l’anima e per il sacro.        "]
    }

## How to add a new Event:
1. Open src/assets/data_events.json
2. Fill with info and Copy - Paste inside the file:

 ,{
        "id":15,
        "title":"MindfulnesStreet",
        "conduttori":"Elena Cristalli",
        "date":"",
        "text":[]
        ,"image":"street.jpg",   
        "data_luogo":""
        ,"type":"Attivismo Contemplativo"
        ,"cit":[]
        ,"costo":""
        ,"contatto":""
        ,"users":[{"link":"elena-cristalli",
            "name":"Elena Cristalli",
            "img":"ElenaCristalli.png",
            "desc":"Psicoterapeuta specializzata in Analisi Transazionale",
                "curriculum":"" }]
        ,"more_info":""
        ,"prerequisiti":[]
        ,"school":false
        ,"offerta_libera":false,
        "vitto_alloggio":""
        ,"self_link":"/MindfulnesStreet"
    }

## Add a new Page:
1. Create a new page in src/views/pages
2. Copy/Paste and Modify TemplatePage.js
3. Insert the following line on src/index.js

import <NamePage>Page from "views/pages/<NamePage>Page"

and inside Switch

 <Route
          path="/<link>"
          render={props => < <NamePage>Page {...props} />}
        />
4. Add the page ino the Menu Bar 
    4.1 --> Go to src/components/Navbars/IndexNavbar.js
    4.2 --> Copy - Paste inside the file:
      <DropdownItem
                    // target="_blank"
                    to="/<Link>" tag={Link}
                  >
                <NamePage>  
        </DropdownItem>
