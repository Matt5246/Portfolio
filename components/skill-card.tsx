"use client";

import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { cn } from "@/lib/utils";
import { skillsData } from "@/lib/data";
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
