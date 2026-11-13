import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Database,
  Trophy,
  type LucideIcon,
} from "lucide-react";

// Section heading component
interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
}

const SectionHeading = ({ icon: Icon, title }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 mb-8"
  >
    <Icon className="text-primary" size={24} />
    <h3 className="text-2xl">{title}</h3>
  </motion.div>
);

export function Experience() {
  const workExperience = [
    {
      title: "Physiotherapist",
      company: "Spain & France",
      period: "9 years",
      description: [
        "Worked across sports centres, nursing homes and hospitals",
        "Developed strong communication and teamwork skills",
        "Strengthened problem-solving and adaptability through diverse professional environments",
      ],
    },
  ];

  const education = [
    {
      degree: "Higher National Certificate in Web Application Development",
      institution: "Institut TIC de Barcelona",
      location: "Barcelona, Spain",
      period: "2025 – 2027",
      description:
        "Currently developing skills in programming, web technologies and database management, with a focus on building practical web applications.",
    },
  ];

  const certifications = [
    {
      title: "Database Programming with SQL",
      institution: "Oracle",
      year: "2026",
      icon: Database,
    },
    {
      title: "Certificate of Participation – AccioWork Competition",
      institution: "Alibaba.com",
      year: "2026",
      icon: Trophy,
    },
    {
      title: "Diplôme d'études en langue française (DELF B2)",
      institution:
        "Ministère de l'Éducation nationale et de la Jeunesse",
      year: "2019",
      icon: Languages,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            My Journey
          </h2>

          <div className="w-20 h-1 bg-primary mb-8" />

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              My professional journey has allowed me to develop valuable
              skills across different fields. After nine years of
              experience in physiotherapy in Spain and France, I'm now
              focused on building my career in the tech industry.
            </p>

            <p>
              I'm passionate about web development, continuous learning
              and exploring new technologies, particularly Artificial
              Intelligence. I'm excited to bring the knowledge,
              adaptability and problem-solving skills I've gained
              throughout my professional journey into this new chapter.
            </p>
          </div>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <SectionHeading
            icon={Briefcase}
            title="Professional Experience"
          />

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h4 className="text-lg">{job.title}</h4>
                      <p className="text-primary">{job.company}</p>
                    </div>

                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <SectionHeading
            icon={GraduationCap}
            title="Education"
          />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-lg">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                    </div>

                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {edu.location}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <SectionHeading
            icon={Award}
            title="Certifications & Achievements"
          />

          <div className="grid gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;

              return (
                <motion.article
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-5 flex items-start gap-4 hover:border-primary transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="text-primary" size={22} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base mb-1">
                      {cert.title}
                    </h4>

                    <p className="text-sm text-primary">
                      {cert.institution}
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {cert.year}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
