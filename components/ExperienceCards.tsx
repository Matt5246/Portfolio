"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, BriefcaseIcon } from "lucide-react"

export default function ExperienceList({ expData }: { expData: any[] }) {
    return (
        <Carousel className="w-full max-w-[260px] sm:max-w-[600px] xl:max-w-[900px] mx-auto">
            <CarouselContent>
                {expData?.map((item, index) => (
                    <CarouselItem key={index}>
                        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                                    <motion.img
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.7 }}
                                        className="w-full h-full object-cover object-center"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <motion.h4
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white text-center px-4"
                                        >
                                            {item.title}
                                        </motion.h4>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                                        <p className="text-lg sm:text-xl text-gray-300">{item.subtitle}</p>
                                        <div className="flex items-center space-x-2 text-gray-400">
                                            <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="text-sm sm:text-base">{item.date}</span>
                                        </div>
                                    </div>
                                    {item.technologies && item.technologies.length > 0 && (
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {item.technologies.map((tech: string, i: number) => (
                                                <Badge key={i} variant="secondary" className="px-2 py-1 text-xs sm:text-sm">
                                                    <img
                                                        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 inline-block"
                                                        src={tech || "/placeholder.svg"}
                                                        alt={`Technology ${i + 1}`}
                                                    />
                                                    Tech {i + 1}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-center space-x-2 text-primary">
                                            <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                            <h5 className="text-lg sm:text-xl font-semibold">Knowledge</h5>
                                        </div>
                                        <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300 max-h-36 sm:max-h-48 overflow-y-auto pr-2 sm:pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                            {item.responsibilities.map((task: string, i: number) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                                    className="flex items-start space-x-2"
                                                >
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{task}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
        </Carousel>
    )
}

