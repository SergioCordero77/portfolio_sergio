
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sergio.cordero77@gmail.com",
      href: "mailto:sergio.cordero77@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+34 677 76 65 07",
      href: "tel:+34677766507",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Barcelona, Spain",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      description: "Explore my projects and code",
      href: "https://github.com/SergioCordero77",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      description: "Connect with me professionally",
      href: "https://www.linkedin.com/in/sergio-cordero-cabrera-b2a33935a/",
    },
  ];

  return (
    <section
      id="contact"
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
            Get in Touch
          </h2>

          <div className="w-20 h-1 bg-primary mb-4" />

          <p className="text-muted-foreground mb-12 max-w-2xl">
            I'm currently looking for an internship opportunity where
            I can gain hands-on experience, develop my skills and take
            my first steps into the tech industry.
          </p>
        </motion.div>

        <div className="space-y-8">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail size={20} className="text-primary" />
              </div>
              <h3 className="text-xl">Contact Information</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-muted rounded-lg">
                    <item.icon
                      size={20}
                      className="text-primary"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media and Availability */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xl mb-6">Social Media</h3>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <social.icon
                          size={22}
                          className="text-primary"
                        />
                      </div>

                      <div>
                        <p className="font-medium">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BriefcaseBusiness
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-xl">Availability</h3>
                </div>

                <h4 className="text-2xl font-medium mb-3">
                  Looking for new opportunities
                </h4>

                <p className="text-muted-foreground leading-relaxed">
                  I'm actively seeking a web development internship
                  where I can contribute to real-world projects,
                  strengthen my technical skills and grow alongside
                  an experienced team.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-sm font-medium">
                    Open to internships
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
