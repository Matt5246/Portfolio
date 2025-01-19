"use client";

import { motion } from "framer-motion";

export const WaveBackground = ({ color = "primary", className = "" }: { color?: string; className?: string }) => (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--${color})) 0%, transparent 50%)`,
            }}
        />
        <svg
            className="absolute bottom-0 left-0 w-full h-48 fill-current text-foreground/5"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <motion.path
                initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
                animate={{
                    d: "M0,320L48,288C96,256,192,192,288,181.3C384,171,480,213,576,234.7C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
        </svg>
    </div>
);

export const BlobBackground = ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
        <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full"
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
        >
            <div className="w-full h-full bg-primary/10 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full"
            animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
        >
            <div className="w-full h-full bg-secondary/10 rounded-full blur-3xl" />
        </motion.div>
    </div>
);

export const GridBackground = ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-grid-primary/[0.02]"
            style={{
                backgroundSize: "32px 32px",
                backgroundImage: `linear-gradient(to right, hsl(var(--primary)/0.1) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary)/0.1) 1px, transparent 1px)`,
            }}
        />
    </div>
);

export const CircuitBackground = ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
        >
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-primary/20 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </motion.div>
    </div>
);

export const GradientBackground = ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
        <motion.div
            className="absolute inset-0"
            animate={{
                background: [
                    "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.1) 0%, transparent 50%)",
                ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
        />
    </div>
);