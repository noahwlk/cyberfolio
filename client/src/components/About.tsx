import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cloud,
  AlertTriangle,
  Monitor,
  CodeXml,
  ShieldAlert,
} from "lucide-react";
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1e1e1e,_#0b0b0b)]"></div>
      </div>
      <div className="container mx-auto  z-10">
        
        <motion.div
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          <div className="md:w-1/2">
            
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              
              <h2 className="text-3xl font-bold font-mono mb-2 relative">
                
                <span className="text-[#00FF8C]">#</span> 
                <span className="text-white ml-2">About Me</span>
                <div className="h-1 w-24 mt-2"></div>
              </h2>
            </motion.div>
            <motion.div
              className="mb-8 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              
              <p className="mb-6 font-mono text-gray-200 leading-relaxed tracking-wide text-[15px]">
  I am a motivated cybersecurity student currently pursuing a
  Bachelor’s degree in Cybersecurity at Guardia Cybersecurity School,
  passionate about safeguarding digital systems and sensitive data.
  Through my academic projects and early professional experience, I
  have developed strong skills in <span className="text-[#00FF8C]">penetration testing</span>,
  <span className="text-[#00FF8C]"> network security</span>.
</p>

              <p className="mb-6 font-mono text-gray-200 leading-relaxed tracking-wide text-[15px]">
                
                Driven by curiosity and a commitment to continuous learning, I
                aim to contribute to the cybersecurity field by helping
                organizations strengthen their security posture and anticipate
                emerging threats.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              
              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A]/80"
                variants={itemVariants}
              >
                
                <div className="text-[#00FF8C] text-2xl mb-2">
                  
                  <ShieldCheck />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">
                  
                  Security Analysis
                </h3>
                <p className="text-sm text-gray-400">
                  
                  Experienced in vulnerability assessment and penetration
                  testing
                </p>
              </motion.div>
              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A]/80"
                variants={itemVariants}
              >
                
                <div className="text-[#00FF8C] text-2xl mb-2">
                  
                  <Cloud />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">
                  Cloud Security
                </h3>
                <p className="text-sm text-gray-400">
                  
                  Expertise in Azure and AWS security implementations
                </p>
              </motion.div>
              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                
                <div className="text-[#00FF8C] text-2xl mb-2">
                  
                  <AlertTriangle />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">
                  
                  Threat Intelligence
                </h3>
                <p className="text-sm text-gray-400">
                  
                  Proactive identification and mitigation of security threats
                </p>
              </motion.div>
              <motion.div
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                <Monitor />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">
                  
                  Endpoint Security
                </h3>
                <p className="text-sm text-gray-400">
                  
                  Implementation of robust endpoint protection solutions
                </p>
              </motion.div>
            </div>
          </div>
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2">
                <span className="text-[#00FF8C]">#</span> 
                <span className="text-white ml-2">Education</span>
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>

            <motion.div
              className="mb-6 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className="font-mono text-xl mb-2 flex items-center">
                  <span className="text-[#00FF8C]">{">"}</span>
                  <span
                    className="font-mono font-semibold text-gray-300 ml-2
                  "
                  >
                    General Baccalaureate
                  </span>
                </h3>
                <p className="text-gray-400 mb-2">
                  <span className="text-[#00FF8C]">Specializations:</span>
                  Computer Science (NSI), Mathematics, Physics
                </p>
                <p className="text-gray-400 mb-1">Henri Poincaré High School</p>
                <p className="text-sm mb-1 text-white">Nancy, France</p>
              </div>

              <div>
                <h3 className="font-mono text-xl mb-2 flex items-center">
                  <span className="text-[#00FF8C] ">{">"}</span>
                  <span className="font-mono font-semibold text-gray-300 ml-2">
                    Bachelor
                  </span>
                  <span className="text-xs px-2 py-1 ml-3 rounded-full bg-[#00FF8C]/10 text-[#00FF8C] border border-[#00FF8C]/30">
                    currently pursuing
                  </span>
                </h3>
                <p className="text-gray-400 mb-1">
                  Guardia
                </p>
                <p className="text-sm mb-1 text-white">Lyon, France</p>
              </div>
            </motion.div>

            <div>
              <motion.div className="mb-6 inline-block" variants={itemVariants}>
                <h2 className="text-3xl font-bold font-mono mb-2">
                  <span className="text-[#00FF8C]">#</span>

                  <span className="text-white ml-2">volunteer</span>
                  <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
                </h2>
              </motion.div>

              <div className="grid gap-4">
                <motion.div
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono font-semibold mb-1">Telethon</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Volunteer Technician | 2024
                      </p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <CodeXml />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    Assisted in setting up event infrastructure and managing
                    technical operations for streamers. Handled on-site network
                    issues and access control during a large-scale charity
                    event.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
