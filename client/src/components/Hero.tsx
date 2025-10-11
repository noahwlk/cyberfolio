import { motion } from "framer-motion";
import useTypewriter from "@/hooks/useTypewriter";

export default function Hero() {
  const name = useTypewriter("Noah WALEK ", 100);
  const title = useTypewriter("", 50, 1200);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1e1e,_#0b0b0b)]"></div>
      </div>

      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8 mx-auto p-2 border border-[#00FF8C] rounded-lg bg-[#1A1A1A] bg-opacity-70"
        >
          <p className="font-mono text-sm text-[#00FF8C]">
            // cybersecurity student.
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono"
        >
          <span className=" text-white">{name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-xl md:text-2xl font-light text-gray-300">
            <span className="terminal-text text-white">{title}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="terminal-window bg-[#1A1A1A] bg-opacity-80 p-4 md:p-6 rounded-lg max-w-3xl mx-auto mb-8 text-left border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
        >
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF3E3E] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
            <span className="ml-4 text-sm text-gray-400 font-mono">
              Walek@security:~
            </span>
          </div>
          <div className="font-mono text-sm md:text-base">
            <p className="mb-2">
              <span className="text-[#00FF8C] ml-2">$</span>
              <span className="text-red-500">./get_profile.sh</span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="text-gray-500 ml-2 ">
                Cybersecurity student with expertise in:
              </span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="text-white ml-2">Vulnerability Assessment</span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="text-white ml-2">Security Protocols</span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="text-white ml-2">Threat Intelligence</span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="text-white ml-2">Cloud Security</span>
              (Azure, AWS)
            </p>

            <p className="mb-1 mt-2">
              <span className="text-[#00FF8C]">$</span>
              <span className="text-red-500">echo $LOCATION</span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="ml-2 text-white">Nancy, France</span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="ml-2 text-white">Lyon, France</span>
            </p>
            <p className="mb-1">
              <span className="text-[#00FF8C]">{">"}</span>
              <span className="ml-2 text-white">Luxembourg</span>
            </p>
            <p className="mb-1 mt-2">
              <span className="text-[#00FF8C]">$</span>
              <span className="text-red-500">cat contact.txt</span>
            </p>
            <p className="mb-1 text-white">E: walek.noah@gmail.com</p>
            <p className="mb-1 flex items-center">
              <span className="mr-2 text-white">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/noah-walek-9b8006331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066CC] hover:text-[#00FF8C] transition-colors duration-300 "
              >
                linkedin.com/in/noah-walek
              </a>
            </p>
            <p className="mb-1 flex items-center">
              <span className="mr-2 text-white">CV:</span>
              <a
                href="../../assets/Noah_WALEK_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066CC] hover:text-[#00FF8C] transition-colors duration-300"
              >
                here
              </a>
            </p>
            <p className="mb-1 mt-3">
              <span className="text-[#00FF8C]">$</span>
              <span className="text-white">_</span>
              <span className="animate-pulse text-gray-300">|</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#about"
              className="px-8 py-3 bg-[#1A1A1A] border border-[#00FF8C] rounded-md hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300 font-mono"
            >
              <span className="ml-2 text-white"> About Me</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-[#1A1A1A] border border-[#0066CC] rounded-md hover:bg-[#0066CC] transition-all duration-300 font-mono"
            >
              <span className="ml-2 text-white">Contact</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
