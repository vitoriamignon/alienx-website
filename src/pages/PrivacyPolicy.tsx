import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-textPrimary mb-6 tracking-wide">
            {t.privacy.title}
          </h1>
        </header>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              {t.privacy.introduction.title}
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {t.privacy.introduction.content}
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              {t.privacy.dataCollection.title}
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {t.privacy.dataCollection.content}
            </p>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              {t.privacy.dataUsage.title}
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {t.privacy.dataUsage.content}
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              {t.privacy.dataSharing.title}
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {t.privacy.dataSharing.content}
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              {t.privacy.dataSecurity.title}
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {t.privacy.dataSecurity.content}
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              {t.privacy.userRights.title}
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {t.privacy.userRights.content}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              {t.privacy.contact.title}
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              {t.privacy.contact.content}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
