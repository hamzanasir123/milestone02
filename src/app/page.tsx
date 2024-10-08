
import { BackgroundLines } from "./ui/background-lines";
export default function Home() {
  return (
   <>
       <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hamza Nasir, <br /> Full Stack Developer.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center">
      Crafting seamless user experiences from front to back, one line of code at a time,
      Turning ideas into interactive, scalable web solutions.
      </p>
    </BackgroundLines>
   </>
  );
}
