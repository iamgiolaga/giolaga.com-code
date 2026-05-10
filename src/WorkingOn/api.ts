import { getSheetUrl } from './config';

export interface DataPoint {
  timestamp: number;
  stat: number;
}

const MONTHS_EN = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const MONTHS_IT = [
  'Gen',
  'Feb',
  'Mar',
  'Apr',
  'Mag',
  'Giu',
  'Lug',
  'Ago',
  'Set',
  'Ott',
  'Nov',
  'Dic',
];

export function formatDate(timestamp: number, lang: string): string {
  const d = new Date(timestamp);
  const months = lang === 'it' ? MONTHS_IT : MONTHS_EN;
  return `${months[d.getMonth()]} ${d.getDate()}`;
}

export function formatDateShort(timestamp: number, lang: string): string {
  const d = new Date(timestamp);
  const months = lang === 'it' ? MONTHS_IT : MONTHS_EN;
  const year = String(d.getFullYear()).slice(2);
  return `${months[d.getMonth()]} ${year}`;
}

function parseDate(raw: string): Date {
  // DD/MM/YYYY
  const [day, month, year] = raw.split('/').map(Number);
  return new Date(year, month - 1, day);
}

function parseCsv(text: string): DataPoint[] {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];

  return lines
    .slice(1) // skip header
    .map((line) => {
      const [rawDate, rawStat] = line.split(',');
      if (!rawDate || !rawStat) return null;
      const cleaned = rawDate.replace(/"/g, '').trim();
      const d = parseDate(cleaned);
      if (isNaN(d.getTime())) return null;
      return {
        timestamp: d.getTime(),
        stat: Number(rawStat.replace(/"/g, '').trim()),
      };
    })
    .filter((p): p is DataPoint => p !== null && !isNaN(p.stat));
}

export async function fetchSheetData(
  gid: string,
): Promise<DataPoint[]> {
  const url = getSheetUrl(gid);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch sheet gid=${gid}`);
  const text = await res.text();
  return parseCsv(text);
}
