import Project from './Project';

const projectsList = [
    <Project
      title="Fake news based on the induction of fuzzy sets"
      subtitle="Master's degree thesis"
      startDate="Jul 2020"
      endDate="Apr 2021"
      description={`Fake news is a problem that has spread a lot in the last period, in particular with the pandemic. 
The other side of the digitalization is how much easy is today to manipulate information and how web news can go viral. 
The idea behind this project was to build a system capable to recognize fake news; at the state of art, the tendency is to 
use mostly classification techniques, that are forced for definition to give drastic response about observations. 
With the assumption that this kind of approach can be error-prone, my effort was to create a different strategy with the objective of 
getting a fakeness score: a number between 0 and 1 representing how big is, in webnews, the component of potential fake information. 
This system is composed by the repeated execution of three steps: 1) Data preprocessing, 2) Model selection, 3) Data visualization. 
Data preprocessing is the stage where a pipeline of NLP (Natural Language Processing) operations is executed: these operations 
regard data cleaning, data manipulation, outliers detection, etc; some examples are lowercasing, stemming, lemmatization, tokenization, etc. 
The final step of data preprocessing is represented by the application of an embedding technique (Word2Vec or Doc2Vec) which 
allows to convert news from a set of words (strings) to list of floats. 
Data preprocessing is followed by model selection, the step where the system relies on the algorithm mulearn developed by 
Professor Malchiodi (Università degli Studi di Milano). This is a machine learning algorithm taking advantage of a procedure 
which has been originally formalized in the context of support vector clustering. 
Mulearn works with an input of numerical values, hence it is well explained the importance of preprocessing data with 
an embedding step. The entire process is governed by the nested cross-validation technique which outputs a set of possible 
hyperparameters configuration which can lead to optimal results. Finally there is the data visualization stage where results 
are analyzed and presented in a descriptive way.`}
      technologies="Python, Jupyter Notebook, Pandas, NumPy, Scikit-Learn, Gurobi, Tensorflow, Git, LaTeX"
      picture=""
      link=""
    />,
    <Project
      title="Ridge regression for housing prices"
      subtitle="Statistical methods for Machine Learning course"
      startDate="Aug 2020"
      endDate="Oct 2020"
      description={`In the context of Machine Learning, regression represents a supervised approach to infer predictions that
lay in the numerical domain from a set of heterogeneus information. Labelling data means attaching a value to some observations 
and this value is the prediction object that is desirable to achieve.
In supervised learning, labelled data is created to form data sets, and these data sets are used to train a mathematical model.
A good tradeoff between the number of examples and the model complexity can lead to a good training such that the model is autonomously 
capable to understand the hidden relationships between observations and labels.
When data without label is provided, the model tries to do predictions and the results are compared to the actual labels.
This comparison lets conduct a numerical analysis of how big the error was and what hyperparameters configuration can be chosen
to minimize it and get the best result.
Ridge regression is an extension of linear regression that introduces a regularization parameter alpha. The aim of this project 
was to build a system capable to infer housing prices in the USA from a dataset containing information about its location, its 
area, its capacity and so on...`}
      technologies="Python, Jupyter Notebook, Pandas, NumPy, Scikit-Learn, Git, LaTeX"
      picture=""
      link=""
    />,
    <Project
      title="Distributed system for intelligent energy consumption in smart-homes"
      subtitle="Distributed and pervasive systems course"
      startDate="May 2019"
      endDate="Jul 2019"
      description={`Distributed systems are a potential way of decentralizing algorithms and avoid bottlenecks.
In this case the nodes are smart-homes whose admin want to monitor energy consumption and dynamically allocate energy boost. 
The application of this project is composed by a Java client for the administrator for getting statistics, a client for each node and 
a REST server for the definition of resources API.
The project's aim was to handle the synchronization of nodes autonomously creating a network, choosing a coordinator and 
executing Ricart-Agrawala algorithm in order to allocate extra energy at maximum two nodes per time. 
The challenge in this kind of application is to avoid polling through wait and notify paradigm, to optimize communication and to fully understand the lock acquisition of threads 
when multiple processes want to access the same resource. In particular, the problem does exists when at least one operation regards writing.
Another aspect which was important to consider was all the possible borderline cases, like concurrent operations (one node joins the network and another one leaves, 
what happen when the coordinator exits, etc)`}
      technologies="Java, gRPC, Protocol Buffers"
      picture=""
      link=""
    />,
    <Project
      title="Prototype of an e-commerce application for minimarkets"
      subtitle="Personal project"
      startDate="May 2018"
      endDate="Jun 2019"
      description={`This application didn't reach production stage, but remained in a prototypal phase. The objective was to realize an e-commerce system to let clients and vendors communicate. 
The vendors are minimarkets owners in Italy and clients are people that want to buy their items. 
The client application (Android and another colleague developed the iOS side) let users register, log in and customize a profile. Inside the application a map shows nearby minimarkets and 
gives the possibility to save favourite places.
Once a shop is selected, its personal page with items is showed; here the user can add items to its shopping cart and formulate an order in two ways: 
order or withdrawal. 
From the vendors perspective a web application was developed to let them crete their profile, register their shop and join the community. 
Behind the scenes a REST server was the third node communicating with vendors and clients.`}
      technologies="Android (Java), Git"
      picture=""
      link=""
    />,
    <Project
      title="Implementation of DBSCAN algorithm"
      subtitle="Management of geospatial information"
      startDate="Dec 2018"
      endDate="Jan 2019"
      description={`Analysis of geospatial data about the movements of a roe deer in a year, annotated and stored in a PostGIS database.
The goal of the project was to implement DBSCAN, a clustering technique based on density to detect the most visited areas of the animal when moving. 
Moreover, an EPS calibration has been done to find optimal values for k, the density parameter of the algorithm.`}
      technologies="Python, Jupyter Notebook, Pandas, Numpy, LaTex, PostGIS, PostgreSQL"
      picture=""
      link=""
    />,
    <Project
      title="Extension of an ontology for the context-aware recognition of physical activities"
      startDate="Oct 2017"
      endDate="Apr 2018"
      subtitle="Bachelor's degree thesis"
      description={`Activity recognition is a wide area of research in Computer Science and regards detecting with the highest possible accuracy
the tasks that the user is doing. Examples of these actions are Walking, Driving, Going Upstairs, Use an elevator, Cycling, etc...
There are a lot of applications that can take advantage of this information, in general they can make the application context-aware, which means 
customized with what is surrounding the user. There are different signals that context-aware applications are getting 
more and more popular nowadays. My contribution regarded the maintenance of the Android mobile client and backend code for APIs.
In particular, the mobile side focused on the data fetched by the device sensors and on the communication with the server.
On the other hand, a machine-learning algorithm was executed to infer statistical predictions based on data; these predictions had to be refined
through an ontological module.
In fact, an important part of my contribution regarded the extension of an ontology, a tool based on logical propositions to exclude 
impossibile activities. In particular, I implemented an OWL library that lets the application interact directly with the ontology, create axioms and test
the ontology, following its rules. 
My thesis showed how statistical learning gets a real benefit from the ontological refinement and improved results.`}
      technologies="Android (Java), Git, MongoDB, LaTeX"
      picture=""
      link=""
    />,
    <Project
      title="Geopost"
      subtitle="Mobile computing course"
      startDate="Jun 2017"
      endDate="Jan 2018"
      description={`The idea of this project was to develop an Android native application and a cross-platform web application.
Geopost is a social network where the user can register, follow other people, see them in his feed and publish georeferenced posts with latitude and longitude coordinates.`}
      technologies="Android (Java), HTML, CSS, JavaScript, jQuery, Apache Cordova"
      picture=""
      link=""
    />,
    <Project
      title="Modelling of a spaceship passing between two colliding planets in 3D"
      startDate="Nov 2017"
      endDate="Jan 2018"
      subtitle="Graphics course"
      description={`Modelling is an important branch of graphics and in this case the project consisted of composing a virtual scene.
I choosed to represent a spaceship passing between two planets right before they collide in space.
The same scene has been reproduced with stereoscopy technology such that by wearing blue and red lens glasses, it was possible
to perceive 3D.`}
      technologies="Blender"
      picture=""
      link=""
    />,
    <Project
      title="Multimedia Ebook of `The merchant of Venice` (Shakespeare)"
      subtitle="Digital publishing course"
      startDate="May 2017"
      endDate="Jul 2017"
      description={`Ebooks are an undervalued technology which can instead have a great potential in user experience.
In this project I reproduced the famous opera of Shakespeare in a digital book by implementing special features to improve
the multimedial experience: pictures, audios and videos had been included and the presence of a dictionary enriched the reading by
allowing the user to analyze words and get their meaning or paraphrase.`}
      technologies="EPUB3"
      picture=""
      link=""
    />,
    <Project
      title="The network of famous rappers on Instagram"
      subtitle="Methods and applications for social networks course"
      startDate="May 2017"
      endDate="Jun 2017"
      description={`In this project I had to choose a social network, detect an inner community and analyze its data.
I choosed Instagram and tried to extract interesting information about the network of famous rappers in Italy and USA.
My research started by creating a list of potential usernames and then performing web scraping technique to get automatically
the HTML page of those profiles. From this, I built a network based on following and follower relationships and I represented it through a graph
where each node dimension was proportional to the number of followers (in degree).
The analysis regarded finding the coefficient of assortativity, discover if my community was a small-word network, if its distribution followed the Power Law and so on...`}
      technologies="Python, Jupyter Notebook, Gephi"
      picture=""
      link=""
    />,
    <Project
      title="Cinguettio"
      subtitle="Database course"
      startDate="Mar 2016"
      endDate="Jun 2016"
      description={`Cinguettio is a social network miming Twitter where the user can publish three kinds of posts: texts, pictures and locations.
The project embraced different phases of development, starting from the ER schema to design the database, logically restructuring it and forming
the relational database. The session managament has been handled in PHP such that cookies could be stored for the web application.`}
      technologies="HTML, CSS, PHP, SQL"
      picture=""
      link=""
    />,
    <Project
      title="Hollywood Multisala"
      subtitle="Web and cloud applications course"
      startDate="Mar 2016"
      endDate="Jun 2016"
      description="This is my first web application project where I developed a website for a multiplex handling its bookings and projections.
The application was able to show its weekly programme of movies and let its users to book a certain number of seats for a specific projection.
This project didn't rely on a persistent storage like a database but used local and session storage."
      technologies="HTML, CSS, JavaScript, JQuery"
      picture=""
      link=""
    />
  ];

  export default projectsList;