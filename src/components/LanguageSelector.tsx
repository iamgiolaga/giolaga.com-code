import ReactCountryFlag from 'react-country-flag';

const FLAG_STYLE = {
  marginTop: '5px',
  width: '1.8em',
  height: '1.8em',
};

interface LanguageSelectorProps {
  onChangeLanguage: (lang: string) => void;
}

const LanguageSelector = ({ onChangeLanguage }: LanguageSelectorProps) => {
  return (
    <div id="languages">
      <ReactCountryFlag
        className="languageFlag"
        onClick={() => onChangeLanguage('it')}
        countryCode="IT"
        svg
        style={FLAG_STYLE}
      />
      <ReactCountryFlag
        className="languageFlag"
        onClick={() => onChangeLanguage('en')}
        countryCode="GB"
        svg
        style={{ ...FLAG_STYLE, marginLeft: '10px' }}
      />
    </div>
  );
};

export default LanguageSelector;
