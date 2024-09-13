"use client"
import React from 'react'
import { TextGenerateEffect } from '@/app/ui/text-generate-effect'
import { BackgroundLines } from '@/app/ui/background-lines';
const words = `  I am a passionate Full Stack Developer with a keen interest in building dynamic and efficient web applications.
       In addition to my full stack expertise,
       I am diving into cutting-edge technologies like Web3, Metaverse, and Generative AI,
       learning directly from industry leaders at Governor House under the mentorship of Sir Hamza Alvi.
       With a commitment to continuous learning and innovation,
       I am eager to create solutions that push the boundaries of technology and deliver real-world impact..`;

function About() {

    return (
        <>
        <div id='About'
        className=''
        >
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        About Me.
      </h2>
      <TextGenerateEffect words={words} />
    </BackgroundLines>
        </div>
        </>
    )
}

export default About
