'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const techStack = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'NestJS', icon: '🐺' },
  { name: 'React', icon: '⚛️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '🔴' },
];

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-foreground-secondary leading-relaxed mb-6">
              {t('about.bio')}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full glass">
                <span className="text-primary font-semibold">📍</span>
                <span className="text-sm">{t('about.location')}</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full glass">
                <span className="text-primary font-semibold">💼</span>
                <span className="text-sm">{t('about.experience')}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold mb-2">{t('about.specialization')}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(t.raw('about').specializations as string[]).map((spec, index) => (
                  <motion.li
                    key={spec}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2 text-foreground-secondary"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {spec}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">{t('about.techStack')}</h3>
            <div className="grid grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl glass cursor-pointer"
                >
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="text-xs text-foreground-secondary">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}