"use client";

import { motion } from "framer-motion";
import { SiReact as React, SiNextdotjs as NextJs, SiTypescript as TypeScript, SiNodedotjs as NodeJs, SiPostgresql as PostgreSQL, SiTailwindcss as TailwindCSS, SiGraphql as GraphQL, SiDocker as Docker, SiGit as Git, SiPython as Python, SiDjango as Django, SiFlask as Flask, SiMongodb as Mongodb } from "react-icons/si";


import { cn } from "@/lib/utils";

const skillsData = [
  {
    name: "React",
    icon: React,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Next.js",
    icon: NextJs,
    color: "text-black dark:text-white",
    bgColor: "bg-black/10 dark:bg-white/10",
  },
  {
    name: "TypeScript",
    icon: TypeScript,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    name: "Node.js",
    icon: NodeJs,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSS,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "GraphQL",
    icon: GraphQL,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "Docker",
    icon: Docker,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Git",
    icon: Git,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Python",
    icon: Python,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "Django",
    icon: Django,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Flask",
    icon: Flask,
    color: "text-black",
    bgColor: "bg-red-400/10",
  },
  {
    name: "MongoDB",
    icon: Mongodb,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
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
        "p-6 rounded-xl shadow-lg",
        skill.bgColor,
        "flex flex-col items-center gap-3"
      )}
    >
      <skill.icon className={cn("w-8 h-8", skill.color)} />
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  );
}

export { skillsData };