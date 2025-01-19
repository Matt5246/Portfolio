"use client";

import { motion } from "framer-motion";
import { SiReact as React, SiNextdotjs as NextJs, SiTypescript as TypeScript, SiNodedotjs as NodeJs, SiPostgresql as PostgreSQL, SiTailwindcss as TailwindCSS, SiGraphql as GraphQL, SiDocker as Docker, SiGit as Git, SiPython as Python, SiDjango as Django, SiFlask as Flask, SiMongodb as Mongodb } from "react-icons/si";
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
    name: "PostgreSQL",
    icon: PostgreSQL,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    proficiency: 70,
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
    proficiency: 80,
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
    proficiency: 65,
  },
  {
    name: "MongoDB",
    icon: Mongodb,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    proficiency: 75,
  },
];



export function SkillCard({ skill, index }: { skill: typeof skillsData[0]; index: number }) {
  return (
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
          })}
          className="w-16 h-16"
        />
      </motion.div>
    </motion.div>
  );
}


export { skillsData };