import i18n from 'i18next';

export function LanguageSwitcher() {
  const changeLanguage = (lng: 'en' | 'de') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
    </div>
  );
}
