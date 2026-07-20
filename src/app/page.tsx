import Hero from '@/components/Hero';
import ChatSection from '@/components/ChatSection';
import PillarsGrid from '@/components/PillarsGrid';
import { Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { CV_LINKS } from '@/constants/general.constant';

export default function Home() {
  return (
    <article className="w-full flex flex-col items-center">
      <Hero />
      <ChatSection />
      <PillarsGrid />

      {/* Contact & Closing Section */}
      <section id="trajectory" className="w-full bg-white border-[3px] border-black shadow-brutal-offset p-8 sm:p-12 mb-16 text-center max-w-4xl mx-auto">
        <h2 className="font-headings text-3xl font-black uppercase mb-6">Institutional Contact</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-8 font-medium">
          For academic institutions or government entities interested in learning more details about the implemented methodologies, the technical feasibility of these solutions, or potential collaborations for education and cultural bilingualism, I invite you to contact me directly through my institutional networks and professional profiles.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a href={CV_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-brutal-cream border-[3px] border-black px-6 py-3 font-bold shadow-brutal-offset hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a href={CV_LINKS.GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-brutal-cream border-[3px] border-black px-6 py-3 font-bold shadow-brutal-offset hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span>GitHub</span>
          </a>
          <a href="mailto:njesusmercado@gmail.com" className="flex items-center gap-3 bg-brutal-cream border-[3px] border-black px-6 py-3 font-bold shadow-brutal-offset hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
      </section>
    </article>
  )
}
