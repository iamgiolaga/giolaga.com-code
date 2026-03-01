import packageJson from '../../package.json';

export const APP_VERSION = packageJson.version;

export const MAIL_ICON_STYLE = {
  width: '1.5em',
  height: '1.5em',
  color: 'white',
};

export const NAV_SECTIONS = [
  { id: 'presentation', key: 'home' },
  { id: 'biography', key: 'biography' },
  { id: 'history', key: 'history' },
  { id: 'projects', key: 'projects' },
  { id: 'achievements', key: 'achievements' },
  { id: 'skills', key: 'skills' },
] as const;

export const EMAIL = 'mailto:giovanni.lagana1995@gmail.com';

export const VERSIONS_URL = 'https://giolaga.com/versions/';
