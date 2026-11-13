import { motion } from "motion/react";
import { Code2, Palette, Rocket, Brain } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "Creating beautiful, intuitive user interfaces",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring artificial intelligence and its potential to shape the future of technology",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-justify"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Web Development student with a keen eye for
              detail and a love for creating innovative web solutions. My
              journey into web development started with a curiosity about how
              things work on the internet, and it has evolved into a dedicated
              learning path.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm interested in building modern, responsive web applications
              and exploring new technologies. I'm also very interested in
              Artificial Intelligence, a field I'm currently studying as part
              of my course, and I'm excited to discover its possibilities and
              how it can be applied to web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              learning new skills, and looking for ways to improve as a
              developer. I'm always curious and motivated to keep learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-xl mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground">Barcelona, Spain</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Education</span>
                <span className="text-foreground">(HNC) Web Application Development</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Experience</span>
                <span className="text-foreground">0 Years</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Interests</span>
                <span className="text-foreground">Full Web Dev, UI/UX, AI</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <item.icon className="text-primary mb-4" size={32} />
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}