'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Projects() {
  const t = useTranslations();
  const projectsData = t.raw('projects') as {
    projectsList: {
      title: string;
      description: string;
      tech: string[];
      demo: string;
      github: string;
      challenges: string;
      solutions: string;
    }[];
  };
  const projects = projectsData.projectsList;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl overflow-hidden glass group flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-haspopup="dialog"
                aria-label={project.title}
                className="text-left w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="p-6 pb-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground-secondary text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>

              <div className="px-6 pb-6 flex gap-4 mt-auto">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                    {t('projects.viewDemo')}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary"
                  >
                    <GithubIcon size={16} />
                    {t('projects.viewCode')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 id="project-modal-title" className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label={t('projects.close')}
                  className="p-2 rounded-full hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <X size={24} />
                </button>
              </div>
              
              <p className="text-foreground-secondary mb-6">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-primary">{t('projects.challenges')}</h4>
                  <p className="text-sm text-foreground-secondary">{selectedProject.challenges}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-primary">{t('projects.solutions')}</h4>
                  <p className="text-sm text-foreground-secondary">{selectedProject.solutions}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.demo ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
                  >
                    <ExternalLink size={18} />
                    {t('projects.viewDemo')}
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground rounded-full font-medium">
                    <ExternalLink size={18} />
                    {t('projects.privateProject')}
                  </span>
                )}
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
                  >
                    <GithubIcon size={18} />
                    {t('projects.viewCode')}
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-6 py-3 border-2 border-muted text-muted-foreground rounded-full font-medium">
                    <GithubIcon size={18} />
                    {t('projects.privateProject')}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}