"use client";
// Seção: Projetos com renderização preguiçosa via IntersectionObserver
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { appearUp, lettersContainer, letter, slow } from "@/lib/motion";
import ProjectCard from "@/components/ProjectCard";

type Project = {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
};

interface ProjectsSectionProps {
    projects: Project[];
}

import type { FC } from "react";
const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
    const [projectsVisible, setProjectsVisible] = useState(false);
    const projectsSentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (projectsVisible) return;
        const el = projectsSentinelRef.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setProjectsVisible(true);
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setProjectsVisible(true);
                        io.disconnect();
                        break;
                    }
                }
            },
            { root: null, rootMargin: "200px", threshold: 0.1 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [projectsVisible]);

    return (
        <section id="projetos" className="w-full bg-transparent text-white scroll-mt-24">
            <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-24">
                <motion.h2
                    className="text-2xl md:text-3xl font-semibold tracking-tight mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={lettersContainer}
                    transition={slow}
                >
                    {"Projetos Recentes".split("").map((ch, idx) => (
                        <motion.span key={idx} variants={letter}>{ch}</motion.span>
                    ))}
                </motion.h2>

                {/* Sentinela para IO: quando entra na viewport, montamos a grade */}
                <div ref={projectsSentinelRef} aria-hidden className="h-4" />

                {projectsVisible ? (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={appearUp}
                        transition={slow}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                    >
                        {projects.map((p) => (
                            <ProjectCard
                                key={p.href}
                                title={p.title}
                                description={p.description}
                                imageSrc={p.imageSrc}
                                href={p.href}
                            />
                        ))}
                    </motion.div>
                ) : (
                    // Placeholder leve enquanto a seção não entra na viewport
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="h-[280px] rounded-lg border border-[#E5E7EB] bg-[#FFFFFF]/60 animate-pulse" />
                        <div className="h-[280px] rounded-lg border border-[#E5E7EB] bg-[#FFFFFF]/60 animate-pulse hidden md:block" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
