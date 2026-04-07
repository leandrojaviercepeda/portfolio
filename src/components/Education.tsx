'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations();
  
  const educationData = t.raw('education') as {
    degrees: { lic: string; analyst: string; diploma: string; diplomaUrl?: string; devops?: string; devopsUrl?: string };
    period: { lic: string; analyst: string; diploma: string; devops: string };
    university: string;
    location: string;
    utn: string;
  };
  
  const languagesData = t.raw('languages') as {
    native: string;
    intermediate: string;
  };

  return (
    <section id="education" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('education.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 glass"
          >
            <div className="text-sm text-primary font-semibold mb-2">{educationData.period.lic}</div>
            <h3 className="text-xl font-bold mb-1">{educationData.degrees.lic}</h3>
            <p className="text-foreground-secondary">{educationData.university}</p>
            <p className="text-sm text-muted-foreground mt-2">{educationData.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 glass"
          >
            <div className="text-sm text-primary font-semibold mb-2">{educationData.period.analyst}</div>
            <h3 className="text-xl font-bold mb-1">{educationData.degrees.analyst}</h3>
            <p className="text-foreground-secondary">{educationData.university}</p>
            <p className="text-sm text-muted-foreground mt-2">{educationData.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-6 glass"
          >
            <div className="text-sm text-primary font-semibold mb-2">{educationData.period.diploma}</div>
            <h3 className="text-xl font-bold mb-1">{educationData.degrees.diploma}</h3>
            <p className="text-foreground-secondary">{educationData.utn}</p>
            {educationData.degrees.diplomaUrl && (
              <a
                href={educationData.degrees.diplomaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-primary hover:underline"
              >
                {t('education.viewCertificate')}
              </a>
            )}
          </motion.div>

          {educationData.degrees.devops && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-card rounded-xl p-6 glass"
            >
              <div className="text-sm text-primary font-semibold mb-2">{educationData.period.devops}</div>
              <h3 className="text-xl font-bold mb-1">{educationData.degrees.devops}</h3>
              <p className="text-foreground-secondary">{educationData.utn}</p>
              {educationData.degrees.devopsUrl && (
                <a
                  href={educationData.degrees.devopsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-primary hover:underline"
                >
                  {t('education.viewCertificate')}
                </a>
              )}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">{t('languages.title')}</h3>
          <div className="flex justify-center gap-8">
            <div className="bg-card rounded-xl p-4 glass">
              <span className="text-lg font-semibold">Español</span>
              <p className="text-sm text-foreground-secondary">{languagesData.native}</p>
            </div>
            <div className="bg-card rounded-xl p-4 glass">
              <span className="text-lg font-semibold">English</span>
              <p className="text-sm text-foreground-secondary">{languagesData.intermediate}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}