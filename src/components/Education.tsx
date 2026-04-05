'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/providers/I18nProvider';

export default function Education() {
  const { t } = useI18n();
  const certifications = t.certifications.courses;

  return (
    <section id="education" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.education.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 glass"
          >
            <div className="text-sm text-primary font-semibold mb-2">{t.education.period.lic}</div>
            <h3 className="text-xl font-bold mb-1">{t.education.degrees.lic}</h3>
            <p className="text-foreground-secondary">{t.education.university}</p>
            <p className="text-sm text-muted-foreground mt-2">{t.education.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 glass"
          >
            <div className="text-sm text-primary font-semibold mb-2">{t.education.period.analyst}</div>
            <h3 className="text-xl font-bold mb-1">{t.education.degrees.analyst}</h3>
            <p className="text-foreground-secondary">{t.education.university}</p>
            <p className="text-sm text-muted-foreground mt-2">{t.education.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-6 glass"
          >
            <div className="text-sm text-primary font-semibold mb-2">{t.education.period.diploma}</div>
            <h3 className="text-xl font-bold mb-1">{t.education.degrees.diploma}</h3>
            <p className="text-foreground-secondary">{t.education.utn}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">{t.certifications.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-card rounded-xl p-4 glass text-center"
              >
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm text-foreground-secondary">{cert.platform}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">{t.languages.title}</h3>
          <div className="flex justify-center gap-8">
            <div className="bg-card rounded-xl p-4 glass">
              <span className="text-lg font-semibold">Español</span>
              <p className="text-sm text-foreground-secondary">{t.languages.native}</p>
            </div>
            <div className="bg-card rounded-xl p-4 glass">
              <span className="text-lg font-semibold">English</span>
              <p className="text-sm text-foreground-secondary">{t.languages.intermediate}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}