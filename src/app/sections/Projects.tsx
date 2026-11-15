
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import statuQuoniam from "../../images/statu-quoniam.jpg";
import nodeSqlite from "../../images/node-sqlite.jpeg";
import pokemon from "../../images/pokemon.jpg";
import encertaParaula from "../../images/encerta-paraula.jpeg";
import restaurant from "../../images/restaurant.jpeg";


const projects = [
  {
    title: "Statu Quoniam — Official Website",
    description:
      "Multi-page website for a music project, featuring artist biographies, photo galleries, music videos, discography, concerts and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SergioCordero77/StatuQuoniamWebsite",
    image: statuQuoniam,
  },
  {
    title: "Music Library Management API",
    description:
      "Backend application to manage artists, albums and songs. Includes CRUD operations, relational SQLite database and REST API endpoints.",
    technologies: ["Node.js", "Express", "SQLite", "REST API"],
    github: "https://github.com/SergioCordero77/nodeSqlite",
    image: nodeSqlite,
  },
  {
    title: "Pokémon Explorer",
    description:
      "Interactive Pokémon browser using the PokéAPI. Fetches external data, displays Pokémon cards and supports pagination and detail views.",
    technologies: ["JavaScript", "HTML", "CSS", "Fetch API"],
    github: "https://github.com/SergioCordero77/BuscadorPokemons",
    image: pokemon,
  },
  {
    title: "Word Guessing Game",
    description:
      "Interactive word guessing game with one-player and two-player modes, input validation, player statistics and saved high scores.",
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/SergioCordero77/Encerta_Paraula",
    image: encertaParaula,
  },
  {
    title: "Restaurant Website",
    description:
      "Responsive restaurant website with navigation, restaurant information, menu presentation, gallery and CSS hover animations.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/SergioCordero77/DIW_Maquetacio",
    image: restaurant,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Projects
          </h2>

          <div className="w-20 h-1 bg-primary mb-4" />

          <p className="text-muted-foreground mb-12 max-w-2xl">
            A selection of projects I've developed, showcasing my
            experience with frontend development, APIs, backend
            applications and database management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
