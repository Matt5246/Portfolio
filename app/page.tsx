"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation, Navigation } from "@/components/navigation";
import { SkillCard, skillsData } from "@/components/skill-card";
import ContactMe from "@/components/ContactMe";
import ExperienceCards from "@/components/ExperienceCards";
import { expData, projectsData } from "@/lib/data";
import { PiImageBroken } from "react-icons/pi";

export default function Home() {
  const sections = [
    {
      id: "hero",
      content: (
        <>
          {/* <BlobBackground /> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
            >
              <User2Icon className="w-20 h-20 text-primary" />
            </motion.div>
            <div className="space-y-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
              >
                Paweł Niziołek
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Full Stack Developer
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <GithubIcon className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <MailIcon className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </>
      ),
    },
    {
      id: "experience",
      content: (
        <>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              Experience
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ExperienceCards expData={expData} />
            </motion.div>
          </div>
        </>
      ),
    },
    {
      id: "skills",
      content: (
        <>
          {/* <GridBackground /> */}
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
              {skillsData.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      id: "projects",
      content: (
        <>
          <div className="max-w-5xl mx-auto space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"

                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="aspect-video object-cover cursor-pointer" onClick={() => window.open(project.url, "_blank")} />
                  ) : (
                    <div className="aspect-video flex items-center justify-center bg-primary/10 cursor-pointer" onClick={() => window.open(project.url, "_blank")}>
                      <span className="text-muted-foreground"><div className="flex flex-row items-center justify-center"><PiImageBroken className="w-8 h-8 mr-2" /><p>No Image Available</p></div> </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      id: "contact",
      content: (
        <>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactMe />
            </motion.div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="block md:hidden">
        <MobileNavigation />
      </div>
      <div className="hidden md:block">
        <Navigation />
      </div>
      <div className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen md:h-screen snap-start flex flex-col justify-center p-8 relative"
          >
            {section.content}
          </section>
        ))}
      </div>
    </>
  );
}