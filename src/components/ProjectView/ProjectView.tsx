'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, Lightbulb, Clock } from "lucide-react";
import { IProjectTemplateWithLink } from "../Project/interface/ProjectTemplate.interface";

export default function ProjectView({
  title,
  description,
  images,
  techs,
  technicalDescription,
  link,
  history
}: IProjectTemplateWithLink) {

  return (
    <article className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Navigation */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 mb-10 font-bold hover:underline underline-offset-4 decoration-2"
      >
        <ArrowLeft size={20} />
        <span>Back to Portfolio</span>
      </Link>

      {/* Hero / Title Section */}
      <header className="mb-16">
        <h1 className="font-headings text-5xl sm:text-6xl font-black uppercase mb-8 border-b-8 border-black pb-4">
          {title}
        </h1>
        
        {/* Purpose / Description (Lead Paragraph) */}
        <div className="bg-brutal-cream border-[3px] border-black shadow-brutal-offset p-6 sm:p-8 text-xl sm:text-2xl leading-relaxed font-medium">
          {description()}
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-16">
        
        {/* Left Column: Tech & Architecture */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Architecture & Technical Details */}
          {technicalDescription && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brutal-amber border-2 border-black flex items-center justify-center">
                  <Code size={20} />
                </div>
                <h2 className="font-headings text-3xl font-bold">Architecture & Development</h2>
              </div>
              <div className="bg-white border-[3px] border-black shadow-brutal-offset p-6 sm:p-8 text-lg leading-relaxed text-gray-800">
                {technicalDescription()}
              </div>
            </section>
          )}

          {/* Development History */}
          {history && history.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brutal-sage border-2 border-black flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <h2 className="font-headings text-3xl font-bold">Project History</h2>
              </div>
              <div className="bg-white border-[3px] border-black shadow-brutal-offset p-6 sm:p-8">
                <ul className="space-y-4 text-lg text-gray-800 list-disc pl-6">
                  {history.map((item: React.JSX.Element, index: number) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

        </div>

        {/* Right Column: Tech Stack Sidebar */}
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brutal-terra border-2 border-black flex items-center justify-center text-white">
                <Lightbulb size={20} />
              </div>
              <h2 className="font-headings text-3xl font-bold">Tech Stack</h2>
            </div>
            
            {techs && techs.length > 0 ? (
              <div className="flex flex-wrap gap-4">
                {techs.map((tech: React.JSX.Element, index: any) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-black p-4 shadow-brutal-sm flex items-center justify-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 border-2 border-black p-4 font-medium italic">
                Stack information not available.
              </div>
            )}
          </section>

          {/* Action Button */}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-brutal-amber px-6 py-4 border-[3px] border-black shadow-brutal-offset hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all font-bold text-xl uppercase tracking-wide"
            >
              <span>Visit Project</span>
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Images Gallery */}
      {images && images.length > 0 && images[0].src !== '' && (
        <section className="mb-16 border-t-4 border-black pt-16">
          <h2 className="font-headings text-3xl font-black uppercase mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map(({ src, alt }, index: number) => (
              <div key={index} className="border-[3px] border-black shadow-brutal-offset bg-white overflow-hidden group">
                <Image
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  src={src}
                  alt={alt || `Project image ${index + 1}`}
                  width={800}
                  height={600}
                />
              </div>
            ))}
          </div>
        </section>
      )}

    </article>
  )
}