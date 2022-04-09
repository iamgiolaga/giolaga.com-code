import Project from './Project';

const italianProjectsList = [
    <Project
      title="PartitelleBot"
      subtitle="Bot di Telegram"
      startDate="Mar 2022"
      endDate="Presente"
      description={`Un Bot di Telegram in Python per raccogliere i partecipanti per l'organizzazione di una partita di calcio.
I membri della chat possono interagire e aggiungere loro stessi scrivendo "aggiungimi" oppure "aggiungi <nome>".
Dualmente, possono ritirare la loro partecipazione con "toglimi" oppure "togli <nome>".
Al momento, sono disponibili i seguenti comandi:
\n
/start - Crea una nuova partita
/setnumber - Imposta il numero di partecipanti
/setday - Imposta il giorno della partita
/settime - Imposta l’orario della partita
/setdescription - Imposta la descrizione sotto i partecipanti
/setpitch - Imposta il campo
/participants - Mostra i partecipanti della partita attuale
/stop - Rimuovi la partita
/help - Mostra la lista di comandi disponibili
\n
Nuove funzionalità presto in arrivo.`}
      technologies="Python, Postgres, Heroku"
      picture=""
      link=""
    />, 
    <Project
      title="Rilevazione di fake news basata sull'induzione di insiemi fuzzy"
      subtitle="Tesi di laurea magistrale"
      startDate="Lug 2020"
      endDate="Apr 2021"
      description={`Le fake news sono un problema molto diffuso recentemente, in particolare con la pandemia.
L'altro lato della digitalizzazione è quanto facile è oggi manipolare l'informazione e come le notizie del Web possono diventare virali.
L'idea dietro questo progetto era quella di costruire un sistema capace di riconoscere le fake news; allo stato dell'arte, la tendenza è quella
di usare tipicamente tecniche di classificazione che sono forzate per definizione a dare una risposta drastica alle osservazioni.
Con l'assunzione che questo tipo di approccio può essere particoloramente prono ad errore, il mio sforzo è stato quello di adottare una strategia differente con l'obiettivo di
ottenere un punteggio di fakeness: un numero tra 0 e 1 che rappresenta quanto grande è, nelle notizie del Web, la componente di informazioni potenzialmente fake.
Questo sistema è composto dalla ripetuta esecuzione di tre step: 1) Preprocessing dei dati, 2) Selezione del modello, 3) Visualizzazione dei dati.
Preprocessing dei dati è lo stadio in cui viene eseguita una pipeline di operazioni di ELN (Elaborazione del Linguaggio Naturale): queste operazioni
riguardano la pulizia del dato, la manipolazione, il riconoscimento di outlier, ecc; alcuni esempi sono il lowercasing, lo stemming, la lemmatizzazione, la tokenizzazione, ecc.
Lo step finale del preprocessing dei dati è rappresentato dall'applicazione di una tecnica di embedding (Word2Vec o Doc2Vec) che 
permette di convertire le notizie da un insieme di parole (stringhe) a una lista di float.
Il preprocessing dei dati è seguito dalla selezione del modello, lo step in cui il sistema si appoggia all'algoritmo mulearn, sviluppato
dal Professor Malchiodi (Università degli Studi di Milano). Si tratta di un algoritmo di Machine Learning che sfrutta una procedura
originariamente formalizzata nel contesto del support vector clustering.
Mulearn lavora con un input di valori numerici, di conseguenza si spiega bene l'importanza del preprocessing dei dati con
uno step di embedding. L'intero processo è governato dalla tecnica di cross-validation a innesto che restituisce un insieme di possibili
configurazioni di iperparametri che può portare a dei risultati ottimali. Infine, c'è la fase di visualizzazione dei dati dove i risultati sono
analizzati e presentati in modo descrittivo.`}
      technologies="Python, Jupyter Notebook, Pandas, NumPy, Scikit-Learn, Gurobi, Tensorflow, Git, LaTeX"
      picture=""
      link=""
    />,
    <Project
      title="Regressione ridge per i prezzi delle case"
      subtitle="Corso di metodi statistici per il Machine Learning"
      startDate="Ago 2020"
      endDate="Ott 2020"
      description={`Nel contesto del Machine Learning, la regressione rappresenta un approccio supervisionato per inferire predizioni che
vivono in un dominio numerico da un insieme di informazioni eterogenee. Etichettare i dati significa affibiare un valore ad alcune osservazioni
e questo valore è l'oggetto della predizione che è desiderabile ottenere.
Nell'apprendimento supervisionato, i dati etichettati vengono creati per formare dei dataset, e questi dataset vengono usati per allenare degli algoritmi basati su qualche modello matematico.
Un buon compromesso tra il numero di esempi e la complessità del modello possono portare a un buon addestramento in modo che il modello sia
capace di capire autonomamente le relazioni nascoste tra le osservazioni e le etichette.
Quando vengono forniti i dati senza etichetta, il modello prova a fare delle predizioni e i risultati vengono confrontati con le etichette effettive.
Questo paragone permette di condurre un'analisi numerica di quanto grande era l'errore e quale configurazione di iperparametri può essere scelta per minimizzarlo e ottenere il miglior risultato.
La regressione ridge è un'estensione della regressione lineare che introduce il parametro di regolarizzazione alfa. Lo scopo di questo progetto
era quello di creare un sistema capace di inferire i prezzi delle case negli USA da un dataset contenente informazioni sulla loro posizione, 
la loro dimensione, la loro capacità e così via...`}
      technologies="Python, Jupyter Notebook, Pandas, NumPy, Scikit-Learn, Git, LaTeX"
      picture=""
      link=""
    />,
    <Project
      title="Sistemi distribuiti per il consumo intelligente di energia nelle smart-home"
      subtitle="Corso di sistemi distribuiti e pervasivi"
      startDate="Mag 2019"
      endDate="Lug 2019"
      description={`I sistemi distribuiti sono un modo potente di decentralizzare gli algoritmi ed evitare i colli di bottiglia.
In questo caso i nodi erano delle smart-home il cui admin vuole monitorare il consumo di energia e allocare dinamicamente dei boost di energia.
L'applicazione di questo progetto è composta da un client Java per l'amministratore per l'ottenimento di statistiche, un client per ogni nodo e 
un server REST per la definizione di endpoint.
Lo scopo di questo progetto era quello di gestire la sincronizzazione dei nodi autonomamente in grado di creare una rete, scegliere il coordinatore ed
eseguire l'algoritmo di Ricart-Agrawala per allocare energia extra al massimo a due nodi per volta.
La sfida in questo tipo di applicazione è di evitare il polling attraverso il paradigma di wait e notify, per ottimizzare la comunicazione e e di capire pienamente l'acquisizione del lock
da parte dei thread quando processi multipli vogliono accedere alla stessa risorsa. In particolare, il problema esiste quando almeno un'operazione riguarda la scrittura.
Un altro aspetto che era importante considerare erano tutti i possibili casi limite, come le operazioni concorrenti (un nodo entra nella rete e un altro esce,
cosa succede quando esce il coordinatore, ecc).`}
      technologies="Java, gRPC, Protocol Buffers"
      picture=""
      link=""
    />,
    <Project
      title="Protitipo di un'applicazione di e-commerce per i minimarket"
      subtitle="Progetto personale"
      startDate="Mag 2018"
      endDate="Giun 2019"
      description={`Quest'applicazione non ha raggiunto lo stadio di produzione, ma è rimasta in una fase prototipale. L'obiettivo era quello di realizzare un sistema di e-commerce per permettere ai clienti e ai venditori di comunicare.
I venditori sono i proprietari di minimarket in Italia e i clienti sono le persone che vogliono comprare i loro prodotti.
L'applicazione client (Android e un altro collega aveva sviluppato la parte iOS) permette agli utenti di registrarsi, di accedere e personalizzare un profilo. Dentro l'applicazione, una mappa mostra i minimarket nelle vicinanze e 
dà la possibilità di salvare i posti preferiti.
Una volta che viene selezionato il negozio, viene mostrata la sua pagina personale con i prodotti; qui, l'utente può aggiungere i prodotti al suo carrello e formulare un ordine in due modi:
consegna o ritiro.
Per i venditori, è stata sviluppata anche un'applicazione web per permettere lodo di creare il profilo, registrare il loro negozio ed entrare nella community.
Dietro le quinte, un server REST era il terzo nodo che comunicava con i venditori e i clienti.`}
      technologies="Android (Java), Git"
      picture=""
      link=""
    />,
    <Project
      title="Implementation of DBSCAN algorithm"
      subtitle="Management of geospatial information"
      startDate="Dec 2018"
      endDate="Jan 2019"
      description={`Analisi di dati geospaziali inerenti i movimenti di un capriolo in un anno, annotati e salvati in un database PostGIS.
L'obiettivo del progetto era quello di implementare DBSCAN, una tecnica di clustering basata sulla densità per rilevare le aree più visitate dall'animale quando si muove.
Inoltre, è stata fatta una calibrazione EPS per trovare i valori ottimali per k, il parametro di densità dell'algoritmo.`}
      technologies="Python, Jupyter Notebook, Pandas, Numpy, LaTex, PostGIS, PostgreSQL"
      picture=""
      link=""
    />,
    <Project
      title="Estensione di un'ontologia per il riconoscimento context-aware di attività fisiche"
      startDate="Ott 2017"
      endDate="Apr 2018"
      subtitle="Tesi di laurea triennale"
      description={`Il riconoscimento di attività è un'ampia area di ricerca dell'Informatica e consiste nel rilevare con la più alta precisione possibile
i task che l'utente sta facendo. Esempi di queste azioni sono camminare, guidare, salire le scale, usare l'ascensore, andare in bicicletta, ecc...
Ci sono molte applicazioni che possono sfruttare quest'informazione: in generale, possono rendere l'applicazione context-aware, cioè
perosnalizzata con quello che circonda l'utente. Ci sono diversi segnali che le applicazioni context-aware 
stanno diventato sempre più popolari oggigiorno. Il mio contributo riguardava la manutenzione del client mobile Android e il codice backend per le API.
In particolare, la parte mobile si focalizzava sui dati raccolti dai sensori del dispositivo e sulla comunicazione col server.
Dall'altro lato, un algoritmo di Machine Learning veniva eseguito per inferire delle predizioni statistiche basate sui dati; queste predizioni dovevano essere raffinate
attraverso un modulo ontologico.
Infatti, un'importante parte del mio contributo ha riguardato l'estensione di un'ontologia, uno strumento basato su proposizioni logiche per escludere quelle
attività impossibili che il ragionamento statistico, da solo, continuava a predire. In particolare, ho implementato l'integrazione di una libreria OWL
che permette all'applicazione di interagire direttamente l'ontologia, creando assiomi e interrogandola secondo le sue regole logiche.
La mia tesi ha mostrato come l'apprendimento statistico ottenga un reale beneficio dal raffinamento ontologico e ha migliorato i risultati.`}
      technologies="Android (Java), Git, MongoDB, LaTeX"
      picture=""
      link=""
    />,
    <Project
      title="Geopost"
      subtitle="Corso di mobile computing"
      startDate="Giu 2017"
      endDate="Gen 2018"
      description={`L'idea di questo progetto era quello di sviluppare un'applicazione nativa Android e un'applicazione Web cross-platform.
Geopost è un social network dove l'utente può registrarsi, seguire altre persone, vederle nel suo feed e pubblicare post georeferenziati con le coordinate di latitudine e longitudine.`}
      technologies="Android (Java), HTML, CSS, JavaScript, jQuery, Apache Cordova"
      picture=""
      link=""
    />,
    <Project
      title="Modellazione di un'astronave passante tra due pianeti in collisione in 3D"
      startDate="Nov 2017"
      endDate="Gen 2018"
      subtitle="Corso di grafica"
      description={`La modellazione è un'importante branca della grafica e, in questo caso, il progetto consisteva nel comporre una scena virtuale.
Ho scelto di rappresentare un'astronave passante tra due pianeti proprio prima che collidono nello spazio.
La stessa scena è stata riprodotta con la tecnologia della stereoscopia cosicché, indossando gli appositi occhiali con le lenti blu e rosse, era possibile
percepire il 3D.`}
      technologies="Blender"
      picture=""
      link=""
    />,
    <Project
      title="Ebook multimediale de `Il mercante di Venezia` (Shakespeare)"
      subtitle="Corso di editoria digitale"
      startDate="Mag 2017"
      endDate="Lug 2017"
      description={`Gli ebook sono una tecnologia sottovalutata che può invece avere un grande potenziale nell'esperienza dell'utente.
In questo progetto ho riprodotto la famosa opera di Shakespeare in un libro digitale implementando caratteristiche speciali per migliorare
l'esperienza multimediale: sono state inserite immagini, audio e video e la presenza di un dizionario ha arricchito la lettura
consentendo all'utente di analizzare le parole e ottenere il loro significato o parafrasi.`}
      technologies="EPUB3"
      picture=""
      link=""
    />,
    <Project
      title="La rete dei rapper famosi su Instagram"
      subtitle="Corso di metodi e applicazioni per i social network"
      startDate="Mag 2017"
      endDate="Giu 2017"
      description={`In questo progetto ho dovuto scegliere un social network, rilevare una community interna e analizzarne i dati.
Ho scelto Instagram e ho cercato di estrarre informazioni interessanti sulla rete dei rapper famosi in Italia e negli Stati Uniti.
La mia ricerca è iniziata creando un elenco di potenziali username e quindi eseguendo la tecnica di Web scraping per ottenere automaticamente
la pagina HTML di quei profili. Da questo ho costruito una rete basata sulle relazioni di follower e following e l'ho rappresentata attraverso un grafico
dove ogni dimensione del nodo era proporzionale al numero di follower (il grado-in).
L'analisi riguardava la ricerca del coefficiente di assortitività, scoprire se la mia comunità fosse una rete "small-world", se la sua distribuzione seguisse la Power Law e così via...`}
      technologies="Python, Jupyter Notebook, Gephi"
      picture=""
      link=""
    />,
    <Project
      title="Cinguettio"
      subtitle="Corso di database"
      startDate="Mar 2016"
      endDate="Giu 2016"
      description={`Cinguettio è un social network ispirato a Twitter in cui l'utente può pubblicare tre tipi di post: testi, immagini e luoghi.
Il progetto ha abbracciato diverse fasi di sviluppo, partendo dallo schema ER per progettare il database, ristrutturandolo logicamente e formando
la banca dati relazionale. La gestione della sessione è stata gestita in PHP in modo tale che i cookie potessero essere memorizzati per l'applicazione Web.`}
      technologies="HTML, CSS, PHP, SQL"
      picture=""
      link=""
    />,
    <Project
      title="Hollywood Multisala"
      subtitle="Corso di applicazioni Web e Cloud"
      startDate="Mar 2016"
      endDate="Giu 2016"
      description="Questo è il mio primo progetto di applicazione Web in cui ho sviluppato un sito Web per un multiplex che ne gestisce le prenotazioni e le proiezioni.
L'applicazione è in grado di mostrare il suo programma settimanale di film e consentire ai suoi utenti di prenotare un certo numero di posti per una proiezione specifica.
Questo progetto non si basava su un'archiviazione persistente come un database, ma utilizzava il local storage e il session storage del browser."
      technologies="HTML, CSS, JavaScript, JQuery"
      picture=""
      link=""
    />
  ];

export default italianProjectsList;