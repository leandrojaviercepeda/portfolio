'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations();
  const experienceData = t.raw('experience') as {
    experiences: {
      company: string;
      role: string;
      period: string;
      location: string;
      achievements: string[];
      tech: string[];
    }[];
  };
  const experiences = experienceData.experiences;

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card rounded-xl p-6 glass hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm text-primary font-semibold">{exp.period}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-foreground-secondary mb-4">{exp.role}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="text-sm text-foreground-secondary flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}