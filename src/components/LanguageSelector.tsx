import ReactCountryFlag from 'react-country-flag';

const FLAG_STYLE = {
  width: '1.8em',
  height: '1.8em',
};

interface LanguageSelectorProps {
  onChangeLanguage: (lang: string) => void;
  currentLanguage: string;
}

const LanguageSelector = ({
  onChangeLanguage,
  currentLanguage,
}: LanguageSelectorProps) => {
  return (
    <div id="languages">
      <ReactCountryFlag
        className={`languageFlag ${currentLanguage === 'it' ? 'active' : ''}`}
        onClick={() => onChangeLanguage('it')}
        countryCode="IT"
        svg
        style={FLAG_STYLE}
      />
      <ReactCountryFlag
        className={`languageFlag ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => onChangeLanguage('en')}
        countryCode="GB"
        svg
        style={{ ...FLAG_STYLE, marginLeft: '10px' }}
      />
    </div>
  );
};

export default LanguageSelector;
