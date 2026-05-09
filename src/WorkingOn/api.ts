import { getSheetUrl } from './config';

export interface DataPoint {
  date: string;
  stat: number;
}

function parseDate(raw: string): Date {
  // DD/MM/YYYY
  const [day, month, year] = raw.split('/').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(d: Date): string {
  const months = [
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
  return `${months[d.getMonth()]} ${d.getDate()}`;
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
        date: formatDate(d),
        stat: Number(rawStat.replace(/"/g, '').trim()),
      };
    })
    .filter((p): p is DataPoint => p !== null && !isNaN(p.stat));
}

export async function fetchSheetData(gid: string): Promise<DataPoint[]> {
  const url = getSheetUrl(gid);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch sheet gid=${gid}`);
  const text = await res.text();
  return parseCsv(text);
}
