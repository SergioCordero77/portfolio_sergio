
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming & Web Development",
      skills: [
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Python",
      ],
    },
    {
      category: "Databases",
      skills: [
        "SQL",
        "MySQL",
        "JOIN queries",
        "CRUD operations",
        "basic relational database modelling",
      ],
    },
    {
      category: "Tools & AI",
      skills: [
        "Git",
        "GitHub",
        "Linux Terminal",
        "Visual Studio Code",
        "ChatGPT",
        "Gemini",
        "Claude",
        "AccioWork",
      ],
    },
  ];

  const currentlyLearning = [
    "React",
    "Django",
  ];

  const additionalSkills = [
    "Object-Oriented Programming (OOP)",
    "AI-assisted Development",
    "Problem Solving",
    "Analytical thinking",
    "Responsive Design",
  ];

  const languages = [
    { name: "Catalan", level: "Native" },
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2" },
    { name: "French", level: "B2" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Skills
          </h2>

          <div className="w-20 h-1 bg-primary mb-4" />

          <p className="text-muted-foreground mb-12 max-w-2xl">
            Technologies, tools and concepts I've worked with
            throughout my learning journey, along with the skills
            I'm currently developing.
          </p>
        </motion.div>

        {/* Main Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-xl mb-6 text-primary">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-muted text-sm text-foreground rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-xl mb-4 text-primary">
            Currently Learning
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            Technologies I'm looking forward to exploring and developing my skills in.
          </p>

          <div className="flex flex-wrap gap-3">
            {currentlyLearning.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-muted text-sm text-foreground rounded-lg border border-border hover:border-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-xl mb-4 text-primary">
            Additional Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-muted text-sm text-foreground rounded-lg border border-border hover:border-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-xl mb-4 text-primary">
            Languages
          </h3>

          <div className="space-y-3">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex justify-between items-center py-2 border-b border-border last:border-0"
              >
                <span className="text-foreground">
                  {language.name}
                </span>

                <span className="text-sm text-muted-foreground">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
