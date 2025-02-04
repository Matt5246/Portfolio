"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HomeIcon, UserIcon, CodeIcon, FolderIcon, MailIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: HomeIcon, label: "Home", href: "#hero" },
  { icon: UserIcon, label: "experience", href: "#experience" },
  { icon: CodeIcon, label: "Skills", href: "#skills" },
  { icon: FolderIcon, label: "Projects", href: "#projects" },
  { icon: MailIcon, label: "Contact", href: "#contact" },
];

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md px-8 py-4 rounded-full mt-4 border shadow-lg"
    >
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors",
                "group"
              )}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}


export function MobileNavigation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <nav className="bg-background/80 backdrop-blur-md rounded-full shadow-lg border px-4 py-2">
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-full transition-colors",
                  "hover:bg-muted",

                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}