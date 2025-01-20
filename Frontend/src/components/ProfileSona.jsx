import { useTranslation } from 'react-i18next';

function ProfileSona() {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-2xl container mx-auto px-6 md:px-20 mt-28">
      {/* כותרת הדף */}
      <h1 className="text-2xl md:text-4xl text-center">{t('Dr. Sona IbrahImova PhD')}</h1>
      <p className="mt-6 text-lg md:text-xl text-center">
        {t('Zarifa Aliyeva National Eye Centre')} - {t('Vice Chairman')}
      </p>

      {/* תוכן דף */}
      <div className="mt-10">
        <p>{t('Dr. Sona IbrahImova is a highly regarded specialist in...')}</p>
        {/* ניתן להוסיף תמונות, תיאורים, הישגים, וקישורים נוספים */}
      </div>
    </div>
  );
}

export default ProfileSona;
