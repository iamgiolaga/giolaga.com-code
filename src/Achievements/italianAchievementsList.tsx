import { ReactElement } from 'react';
import Achievement from './Achievement';
import awsMeetupImage from './images/aws-meetup-speaker.webp';
import innovationWeekImage from './images/innovation-week-winner.webp';
import interviewPreviewImage from './images/thefork-interview-preview.webp';
import mediumArticleImage from './images/medium-article-feed.webp';
import aiPodcastImage from './images/ai-podcast-guadagno.webp';
import languageDetectionImage from './images/language-detection-article.webp';
import highSchoolImage from './images/high-school-speaker.webp';
import codingChallengeImage from './images/coding-challenge-winner.webp';

const italianAchievementsList: ReactElement[] = [
  <Achievement
    title={`Speaker all'AWS Meetup - "TheFork Feed: building a social engine"`}
    description={`Speaker a un meetup tenutosi nell'ufficio di TheFork a Milano, presentando ciò che c'è dietro TheFork Feed`}
    image={awsMeetupImage}
    date="Feb 2026"
  />,
  <Achievement
    title="How we built TheFork Feed"
    description="Un articolo su Medium dove condivido la storia, le decisioni difficili e la soluzione tecnica dietro l'implementazione di TheFork Feed che ho guidato."
    image={mediumArticleImage}
    action={{
      type: 'article',
      url: 'https://medium.com/thefork/how-we-built-thefork-feed-3db3eb0ce978',
    }}
    date="Set 2025"
  />,
  <Achievement
    title="Vincitore della TheFork Innovation Week 2025"
    description="Ho guidato un team di 7 persone durante la TheFork Innovation Week 2025. Su 350 votanti, il nostro progetto è stato premiato al 1° posto per innovazione tra 16 team in competizione (95 partecipanti)."
    image={innovationWeekImage}
    date="Mag 2025"
  />,
  <Achievement
    title="Speaker alla Scuola Superiore Evangelista Torricelli"
    description="Sono stato invitato a parlare in una scuola superiore a una classe di studenti di 16 anni per due ore, condividendo il mio percorso personale, discutendo della vita universitaria, dell'impatto dell'esperienza Erasmus e del ruolo di un Software Engineer in TheFork."
    image={highSchoolImage}
    date="Feb 2025"
  />,
  <Achievement
    title="Come si vive da Software Engineer in TheFork?"
    description="Un'intervista negli uffici di Milano dove condivido la mia prospettiva su com'è lavorare in TheFork."
    image={interviewPreviewImage}
    action={{
      type: 'video',
      url: 'https://player.vimeo.com/video/1026555487?h=a4ef4db687',
    }}
    date="Gen 2025"
  />,
  <Achievement
    title="L'AI sostituirà i Programmatori? Con Giovanni Laganà di TheFork"
    description="Ho partecipato ad un podcast per Antonio Guadagno, dove ho condiviso la mia prospettiva sull'impatto che l'AI potrebbe avere sul mondo professionale dell'ingegneria del software. In particolare, ho tentato di rispondere alla domanda se l'AI possa sostituire i programmatori."
    image={aiPodcastImage}
    action={{
      type: 'video',
      url: 'https://www.youtube.com/embed/p5YyJFKdEFg',
    }}
    date="Nov 2024"
  />,
  <Achievement
    title="Come migliorare gratuitamente il riconoscimento della lingua"
    description="Un articolo su Medium dove spiego come ho portato la percentuale di recensioni TheFork senza una lingua riconosciuta dal 20% all'1%."
    image={languageDetectionImage}
    action={{
      type: 'article',
      url: 'https://medium.com/thefork/how-you-can-improve-language-detection-for-free-2aef18f0b1c2',
    }}
    date="Ago 2024"
  />,
  <Achievement
    title="Vincitore della Coding Challenge Week <011> - FullStack Dev. | 142 partecipanti"
    description="4 problemi di 1 ora ciascuno, riguardanti lo sviluppo Web sia frontend che backend in React.js + Node.js"
    image={codingChallengeImage}
    action={{
      type: 'article',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:6955175215014252544/?originalSubdomain=it',
    }}
    date="Lug 2022"
  />,
];

export default italianAchievementsList;
