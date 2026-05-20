import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Inventory Management App",
        description: "Smart inventory system for tracking stock, managing items, and improving operational efficiency.",
        image: "/manage-gudang.png",
        tags: [
            { name: "React", color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
            { name: "Node.js", color: "text-green-500 bg-green-500/10 border-green-500/20" },
            { name: "Redux", color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
        ],
        link: "https://www.figma.com/design/preHab7DFCVrbmb9m7WzSE/MANAGE-GUDANG-UIX?node-id=218-3&t=X0QVmScURu3vbKq6-1"
    },
    {
        title: "Retro Cam",
        description: "A vintage-inspired camera application design blending nostalgic aesthetics with modern usability.",
        image: "/retro_cam.png",
        tags: [
            { name: "Figma", color: "text-pink-500 bg-pink-500/10 border-pink-500/20" },
            { name: "UI/UX", color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
        ],
        link: "https://www.figma.com/design/edXb9xpfhTBRSsPpPTVXlw/RetroCam?node-id=0-1&t=YsGokK4AMTQNQDlc-1"
    },
    {
        title: "Class of Law",
        description: "Digital learning platform providing structured KUHP materials to help students understand legal fundamentals.",
        image: "/class_of_law.png",
        tags: [
            { name: "Figma", color: "text-red-500 bg-red-500/10 border-red-500/20" },
            { name: "Education", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
        ],
        link: "https://www.figma.com/design/vugli9oONPOUxx0i0T2ZvP/Class-Of-Law?node-id=0-1&t=tTBPsa2Bobjrs35v-1"
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects() {
    return (
        <section id="work" className="py-20 bg-slate-50 dark:bg-[#0B1221]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Selected Projects</h2>
                        <p className="mt-2 text-slate-600 dark:text-text-muted">A collection of my recent work in web development.</p>
                    </div>

                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 block h-full"
                            >
                                <div className="aspect-video w-full overflow-hidden bg-slate-800 relative">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-500/90 text-white text-xs font-semibold backdrop-blur-sm shadow-sm border border-white/20">
                                        On Going
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
