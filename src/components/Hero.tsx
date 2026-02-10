import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6"
                        >
                            Halo, saya <span className="text-primary">Restu</span>.<br />
                            Menciptakan <span className="text-primary">pengalaman</span> digital yang intuitif dan mudah digunakan.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-text-muted max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0"
                        >
                            saya seorang UI/UX Designer yang merancang pengalaman digital berpusat pada pengguna melalui pendekatan strategis, desain yang fungsional, dan visual yang modern.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                        >
                            <a href="#work" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto gap-2 group">
                                    View Projects
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>


                        </motion.div>
                    </motion.div>

                    {/* Decorative Element / Profile Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-[400px] flex-shrink-0 flex justify-center md:-mt-12"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-2xl bg-white dark:bg-surface-dark overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700/50 shadow-2xl">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/profile.png')" }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
