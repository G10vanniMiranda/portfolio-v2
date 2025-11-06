"use client";
// Home client-side: composição de seções modulares
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Techs from "@/sections/Techs";
import ProjectsSection from "@/sections/Projects";
import Contact from "@/sections/Contact";
import { projects } from "@/lib/projects";

export default function HomeClient() {
    return (
        <main className="min-h-screen flex flex-col overflow-x-hidden">
            <Hero />
            <About />
            <Techs />
            <ProjectsSection projects={projects} />
            <Contact />
        </main>
    );
}

