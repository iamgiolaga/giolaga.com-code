import { useState, useEffect } from 'react';
import './style.css';
import FadeInSection from '../utils/FadeInSection';
import StatChart from './StatChart';
import { PROJECTS } from './config';
import { DataPoint, fetchSheetData } from './api';
import { useTranslation } from 'react-i18next';

const WorkingOn = () => {
  const { t } = useTranslation('common');
  const weeklyLabel = t('workingOn.weekly');
  const [data, setData] = useState<Record<string, DataPoint[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const results = await Promise.allSettled(
        PROJECTS.map(async (p) => ({
          key: p.key,
          data: await fetchSheetData(p.gid),
        })),
      );
      const map: Record<string, DataPoint[]> = {};
      results.forEach((r) => {
        if (r.status === 'fulfilled') {
          map[r.value.key] = r.value.data;
        }
      });
      setData(map);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div id="workingOnContainer">
      <FadeInSection>
        <h1 id="workingOnTitle">{t('workingOn.title')}</h1>
        <div id="workingOnGrid">
          {PROJECTS.map((project) => (
            <StatChart
              key={project.key}
              title={project.displayName}
              data={data[project.key] || []}
              color={project.color}
              loading={loading}
              weeklyLabel={weeklyLabel}
            />
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default WorkingOn;
