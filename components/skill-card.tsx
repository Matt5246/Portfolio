"use client";

import { motion } from "framer-motion";
import { SiReact as React, SiNextdotjs as NextJs, SiTypescript as TypeScript, SiNodedotjs as NodeJs, SiPostgresql as PostgreSQL, SiTailwindcss as TailwindCSS, SiGraphql as GraphQL, SiDocker as Docker, SiGit as Git, SiPython as Python, SiDjango as Django, SiFlask as Flask, SiMongodb as Mongodb, SiCplusplus as CPlusPlus, SiMysql, SiPostgresql, SiPhp as PHP, SiLinux as Linux, SiFirebase as Firebase, SiHtml5 as HTML, SiCss3 as CSS, SiRedux as Redux, SiBootstrap as Bootstrap, SiExpress as Express, SiGnubash as Gnubash } from "react-icons/si";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { cn } from "@/lib/utils";

const skillsData = [
  {
    name: "React",
    icon: React,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    proficiency: 90,
  },
  {
    name: "Next.js",
    icon: NextJs,
    color: "text-black dark:text-white",
    bgColor: "bg-black/10 dark:bg-white/10",
    proficiency: 85,
  },
  {
    name: "TypeScript",
    icon: TypeScript,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    proficiency: 80,
  },
  {
    name: "Node.js",
    icon: NodeJs,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    proficiency: 75,
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSS,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    proficiency: 85,
  },
  {
    name: "GraphQL",
    icon: GraphQL,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    proficiency: 65,
  },
  {
    name: "Docker",
    icon: Docker,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    proficiency: 60,
  },
  {
    name: "Git",
    icon: Git,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    proficiency: 90,
  },
  {
    name: "Python",
    icon: Python,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    proficiency: 90,
  },
  {
    name: "Django",
    icon: Django,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    proficiency: 70,
  },
  {
    name: "Flask",
    icon: Flask,
    color: "text-black",
    bgColor: "bg-red-400/10",
    proficiency: 90,
  },
  {
    name: "MongoDB",
    icon: Mongodb,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    proficiency: 90,
  },
  {
    name: "C++",
    icon: CPlusPlus,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    proficiency: 80,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    proficiency: 70,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    proficiency: 50,
  },
  {
    name: "PHP",
    icon: PHP,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    proficiency: 40,
  },
  {
    name: "Linux",
    icon: Linux,
    color: "text-black dark:text-white",
    bgColor: "bg-black/10 dark:bg-white/10",
    proficiency: 80,
  },
  {
    name: "Firebase",
    icon: Firebase,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    proficiency: 70,
  },
  {
    name: "HTML",
    icon: HTML,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    proficiency: 100,
  },
  {
    name: "CSS",
    icon: CSS,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    proficiency: 100,
  },
  {
    name: "Redux",
    icon: Redux,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    proficiency: 70,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    proficiency: 30,
  },
  {
    name: "Express",
    icon: Express,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    proficiency: 100,
  },
  {
    name: "Bash",
    icon: Gnubash,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    proficiency: 80,
  },
];

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

export function SkillCard({ skill, index }: { skill: typeof skillsData[0]; index: number }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className={cn(
            "w-20 h-20 rounded-full shadow-lg group",
            "flex items-center justify-center relative overflow-hidden",
            skill.bgColor
          )}
        >
          <div className="opacity-100 group-hover:opacity-20 transition-opacity duration-1000">
            <skill.icon className={cn("w-8 h-8", skill.color)} />
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            initial={{ opacity: 0, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1 }}
          >
            <CircularProgressbar
              value={skill.proficiency}
              text={`${skill.proficiency}%`}
              styles={buildStyles({
                textColor: skill.color,
                pathColor: skill.color,
                trailColor: "transparent",
                textSize: '16px',
                pathTransitionDuration: 0.5,
              })}
              className="w-16 h-16"
            />
          </motion.div>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="p-2">
          <div className="flex items-center space-x-2">
            <skill.icon className={cn("w-6 h-6", skill.color)} />
            <div className="pl-4">
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p>Proficiency: {skill.proficiency}%</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export { skillsData };