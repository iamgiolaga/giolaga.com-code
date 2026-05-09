const BASE_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTiNXDhPYOqBMT_y19jsZSw1VgpU6okEnYnOg8nA_Vb9DWfhg2S5OVnlti2Unsfrv3nrwuGVvgHiJpW/pub?output=csv';

export interface ProjectConfig {
  key: string;
  displayName: string;
  gid: string;
  color: string;
}

export const PROJECTS: ProjectConfig[] = [
  {
    key: 'linkedin',
    displayName: 'LinkedIn',
    gid: '0',
    color: '#0A66C2',
  },
  {
    key: 'thelinkedinengineer',
    displayName: 'The LinkedIn Engineer',
    gid: '397635401',
    color: '#E7A33E',
  },
  {
    key: 'neochef_it',
    displayName: '@neochef_it',
    gid: '1135531046',
    color: '#00B894',
  },
  {
    key: 'neochef_es',
    displayName: '@neochef_es',
    gid: '1110915727',
    color: '#E17055',
  },
  {
    key: 'neochef_fr',
    displayName: '@neochef_fr',
    gid: '673502469',
    color: '#6C5CE7',
  },
];

export const getSheetUrl = (gid: string) => `${BASE_URL}&gid=${gid}`;
