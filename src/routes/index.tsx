import { createFileRoute } from "@tanstack/react-router";
import { NeuralBg } from "@/components/portfolio/NeuralBg";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Education } from "@/components/portfolio/Education";
import { Certificates, Research, Achievements } from "@/components/portfolio/CertsResearch";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Chatbot } from "@/components/portfolio/Chatbot";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manikandan K",
    jobTitle: "Generative AI Engineer",
    email: "mailto:manidvkit@gmail.com",
    url: "https://github.com/Manikandan-K006",
    sameAs: [
      "https://github.com/Manikandan-K006",
      "https://www.linkedin.com/in/manikandan-k-0162062b1",
      "https://instagram.com/its_mani06",
    ],
    alumniOf: "Mount Zion College of Engineering and Technology",
    address: { "@type": "PostalAddress", addressLocality: "Sivaganga", addressRegion: "Tamil Nadu", addressCountry: "IN" },
    knowsAbout: ["Generative AI", "LLMs", "RAG", "Prompt Engineering", "Machine Learning", "Full Stack Development"],
  };

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <NeuralBg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Certificates />
        <Research />
        <Achievements />
        <GitHubSection />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
