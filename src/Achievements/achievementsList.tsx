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

const achievementsList: ReactElement[] = [
  <Achievement
    title='Speaker at AWS Meetup - "TheFork Feed: building a social engine"'
    description="Speaker at a meetup held at TheFork's office in Milan, presenting what's behind TheFork Feed"
    image={awsMeetupImage}
    date="Feb 2026"
  />,
  <Achievement
    title="How we built TheFork Feed"
    description="A Medium article where I share the story, the tough decisions, and the technical solution behind leading the implementation of TheFork Feed."
    image={mediumArticleImage}
    action={{
      type: 'article',
      url: 'https://medium.com/thefork/how-we-built-thefork-feed-3db3eb0ce978',
    }}
    date="Sep 2025"
  />,
  <Achievement
    title="Winner of TheFork Innovation Week 2025"
    description="Led a team of 7 during TheFork Innovation Week 2025. Out of 350 voters, our project was awarded 1st place for innovation among 16 competing teams (95 participants)."
    image={innovationWeekImage}
    date="May 2025"
  />,
  <Achievement
    title="Speaker at Evangelista Torricelli High School"
    description="I was invited to speak in a high school to a class of 16-year-old students for two hours, sharing my personal journey, discussing University life, the impact of an Erasmus experience, and the role of a Software Engineer at TheFork."
    image={highSchoolImage}
    date="Feb 2025"
  />,
  <Achievement
    title="What's life like as a Software Engineer at TheFork?"
    description="An interview at the Milan offices where I share my perspective on what it's like to work at TheFork."
    image={interviewPreviewImage}
    action={{
      type: 'video',
      url: 'https://player.vimeo.com/video/1026555487?h=a4ef4db687',
    }}
    date="Jan 2025"
  />,
  <Achievement
    title="Will AI replace Programmers? With Giovanni Laganà of TheFork"
    description="I joined a podcast for Antonio Guadagno, where I shared my perspective on the impact AI could have on the professional world of software engineering. In particular, I attempted to answer the question of whether AI could replace programmers."
    image={aiPodcastImage}
    action={{
      type: 'video',
      url: 'https://www.youtube.com/embed/p5YyJFKdEFg',
    }}
    date="Nov 2024"
  />,
  <Achievement
    title="How you can improve language detection for free"
    description="A Medium article where I explain how I brought the percentage of TheFork reviews without a recognized language from 20% to 1%."
    image={languageDetectionImage}
    action={{
      type: 'article',
      url: 'https://medium.com/thefork/how-you-can-improve-language-detection-for-free-2aef18f0b1c2',
    }}
    date="Aug 2024"
  />,
  <Achievement
    title="Winner of Coding Challenge Week <011> - FullStack Dev. | 142 participants"
    description="4 problems of 1 hour each, regarding Web development of both frontend and backend tasks in React.js + Node.js"
    image={codingChallengeImage}
    action={{
      type: 'article',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:6955175215014252544/?originalSubdomain=it',
    }}
    date="Jul 2022"
  />,
];

export default achievementsList;
