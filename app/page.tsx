"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { SkillCard, skillsData } from "@/components/skill-card";
import { WaveBackground, BlobBackground, GridBackground, CircuitBackground, GradientBackground } from "@/components/background-effects";

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
      id: "about",
      content: (
        <>
          {/* <WaveBackground /> */}
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of experience
                building web applications. I specialize in React, Next.js, Node.js, and
                modern web technologies. When I'm not coding, you can find me
                contributing to open source projects or learning foreign languages.
              </p>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
          {/* <CircuitBackground /> */}
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
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="aspect-video bg-muted" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                    <p className="text-muted-foreground">
                      A brief description of project {i} and its key features.
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
          {/* <GradientBackground /> */}
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
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-muted-foreground mb-6">
                I'm always open to new opportunities and collaborations.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Navigation />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll ">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="h-screen snap-start flex flex-col justify-center p-8 relative"
          >
            {section.content}
          </section>
        ))}
      </div>
    </>
  );
}