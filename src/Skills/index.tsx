import './style.css';
import FadeInSection from '../utils/FadeInSection';
import { TagCloud } from 'react-tagcloud';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation('common');

  const data = [
    { value: 'React.js', count: 38 },
    { value: 'Node.js', count: 30 },
    { value: 'Spring', count: 22 },
    { value: 'Play', count: 25 },
    { value: 'Full Stack', count: 35 },
    { value: 'Mobile Dev', count: 40 },
    { value: 'Web Dev', count: 35 },
    { value: t('skills.distributedSystems'), count: 28 },
    { value: 'Machine Learning', count: 32 },
    { value: 'Batch', count: 27 },
    { value: t('skills.appCreator'), count: 29 },
    { value: 'REST', count: 25 },
  ];

  const SkillCard = ({
    children,
    level,
  }: {
    children: React.ReactNode;
    level: number;
  }) => {
    return (
      <div
        className="skill"
        style={{ '--skill-level': `${level}%` } as React.CSSProperties}
      >
        <div className="skill-background"></div>
        <div className="skill-content">{children}</div>
      </div>
    );
  };

  return (
    <div id="skillsContainer">
      <FadeInSection>
        <h1 id="skillsTitle">{t('skills.title')}</h1>
        <div id="skillsContent">
          <div className="skills-grid">
            <div className="skills-section skills-soft">
              <h4 className="leftSkills">Soft skills</h4>
              <SkillCard level={100}>
                <p>{t('skills.precision')}</p>
              </SkillCard>
              <SkillCard level={80}>
                <p>{t('skills.autonomy')}</p>
              </SkillCard>
              <SkillCard level={80}>
                <p>{t('skills.communication')}</p>
              </SkillCard>
              <SkillCard level={80}>
                <p>{t('skills.problemSolving')}</p>
              </SkillCard>
            </div>

            <div className="skills-section skills-keywords">
              <h4 className="rightSkills">{t('skills.keywords')}</h4>
              <TagCloud minSize={12} maxSize={35} tags={data} />
            </div>

            <div className="skills-section skills-hard">
              <h4 className="leftSkills">Hard skills</h4>
              <SkillCard level={90}>
                <p>JavaScript / TypeScript</p>
              </SkillCard>
              <SkillCard level={80}>
                <p>Python</p>
              </SkillCard>
              <SkillCard level={80}>
                <p>Java</p>
              </SkillCard>
              <SkillCard level={70}>
                <p>Scala</p>
              </SkillCard>
              <SkillCard level={70}>
                <p>R</p>
              </SkillCard>
              <SkillCard level={60}>
                <p>Kotlin</p>
              </SkillCard>
            </div>

            <div className="skills-section skills-languages">
              <h4 className="rightSkills">{t('skills.languages')}</h4>
              <div className="skill skill-language">
                <div className="skill-content">
                  <ReactCountryFlag countryCode="IT" svg className="flag" />
                  <p>{t('skills.motherTongue')}</p>
                </div>
              </div>
              <div className="skill skill-language">
                <div className="skill-content">
                  <ReactCountryFlag countryCode="GB" svg className="flag" />
                  <p>{t('skills.proficient')}</p>
                </div>
              </div>
              <div className="skill skill-language">
                <div className="skill-content">
                  <ReactCountryFlag countryCode="ES" svg className="flag" />
                  <p>{t('skills.basicKnowledge')}</p>
                </div>
              </div>
              <div className="skill skill-language">
                <div className="skill-content">
                  <ReactCountryFlag countryCode="FR" svg className="flag" />
                  <p>{t('skills.basicKnowledge')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Skills;
