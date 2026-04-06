'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Skills() {
  const t = useTranslations();
  
  const categories = [
    { key: 'frontend', label: t('skills.frontend') },
    { key: 'backend', label: t('skills.backend') },
    { key: 'tools', label: t('skills.tools') },
    { key: 'soft', label: t('skills.soft') },
  ];

  const skillsData = t.raw('skills') as {
    skillsList: {
      frontend: { name: string; level: number }[];
      backend: { name: string; level: number }[];
      tools: { name: string; level: number }[];
      soft: { name: string; level: number }[];
    }
  };

  const skillsList = skillsData.skillsList;

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 glass"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.label}</h3>
              <div className="space-y-4">
                {skillsList[category.key as keyof typeof skillsList].map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground-secondary">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}