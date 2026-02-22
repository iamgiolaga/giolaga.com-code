import packageJson from '../../package.json';

export const APP_VERSION = packageJson.version;

export const MAIL_ICON_STYLE = {
  marginTop: '2px',
  width: '1.5em',
  height: '1.5em',
  color: 'white',
};

export const NAV_SECTIONS = [
  { id: 'presentation', key: 'home' },
  { id: 'biography', key: 'biography' },
  { id: 'history', key: 'history' },
  { id: 'projects', key: 'projects' },
  { id: 'skills', key: 'skills' },
] as const;

export const GITHUB_TAGS_URL =
  'https://github.com/iamgiolaga/iamgiolaga.github.io/tags';
export const EMAIL = 'mailto:giovanni.lagana1995@gmail.com';
