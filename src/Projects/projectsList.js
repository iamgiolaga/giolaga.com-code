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
      Data preprocessing is the stage where a pipeline of NLP (Nature Language Processing) operations is executed: these operations 
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
      technologies="Python"
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
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Distributed system for intelligent energy consumption in smart-homes"
      subtitle="Distributed and pervasive systems course"
      startDate="May 2019"
      endDate="Jul 2019"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Prototype of an e-commerce application for minimarkets"
      subtitle="Personal project"
      startDate="May 2018"
      endDate="Jun 2019"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Implementation of DBSCAN algorithm"
      subtitle="Management of geospatial information"
      startDate="Dec 2018"
      endDate="Jan 2019"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Extension of an ontology for the context-aware recognition of physical activities"
      startDate="Oct 2017"
      endDate="Apr 2018"
      subtitle="Bachelor's degree thesis"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Geopost"
      subtitle="Mobile computing course"
      startDate="Jun 2017"
      endDate="Jan 2018"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Modelling of a spaceship passing between two colliding planets in 3D"
      startDate="Nov 2017"
      endDate="Jan 2018"
      subtitle="Graphics course"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Multimedia Ebook of `The merchant of Venice` (Shakespeare)"
      subtitle="Digital publishing course"
      startDate="May 2017"
      endDate="Jul 2017"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="The network of famous rappers on Instagram"
      subtitle="Methods and applications for social networks course"
      startDate="May 2017"
      endDate="Jun 2017"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Cinguettio"
      subtitle="Database course"
      startDate="Mar 2016"
      endDate="Jun 2016"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />,
    <Project
      title="Hollywood Multisala"
      subtitle="Web and cloud applications"
      startDate="Mar 2016"
      endDate="Jun 2016"
      description="This was the project..."
      technologies="Python"
      picture=""
      link=""
    />
  ];

  export default projectsList;