import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert, CodeSquare, Apple } from "lucide-react";
import { experienceData } from "@/lib/experienceData";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const icons = {
    ShieldCheck: <ShieldCheck className="text-[#1A1A1A]" />,
    ShieldAlert: <ShieldAlert className="text-[#1A1A1A]" />,
    CodeSquare: <CodeSquare className="text-[#1A1A1A]" />,
    Apple: <Apple className="text-[#1A1A1A]" />,
  };

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 px-4 transition-all duration-500 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1e1e,_#0b0b0b)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span>
            <span className="text-white ml-2">Professional Experience</span>
            <div className="h-1 w-36 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            A timeline of my journey across various organizations
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00FF8C]/30"></div>

          <motion.div
            className="space-y-16 md:space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Left side — Job details */}
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-2 md:order-1">
                    <div className="p-5 rounded-lg mb-4 hover:shadow-lg hover:shadow-[#00FF8C]/10 transition-all duration-300 border border-[#00FF8C]/30">
                      <h3 className="font-mono text-xl mb-2 text-gray-200">
                        <span className="text-[#00FF8C]">$</span>{" "}
                        {experience.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{experience.period}</p>

                      {/* Responsibilities */}
                      <ul className="text-sm text-gray-300 space-y-2">
                        {experience.responsibilities?.map((task, i) => (
                          <li key={i} className="leading-relaxed">
                            • {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="md:w-12 flex justify-center order-1 md:order-2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#00FF8C] flex items-center justify-center">
                      {icons[experience.icon as keyof typeof icons]}
                    </div>
                  </div>

                  {/* Right side — Logo + Company + Location */}
                  <div className="md:w-1/2 md:pl-12 order-3 text-center md:text-left">
                    <div className="p-4 rounded-lg inline-block mb-1 mx-auto md:mx-0">
                      {experience.logo ? (
                        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg border-2 border-[#00FF8C]/40 flex items-center justify-center bg-[#1A1A1A]">
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className=" w-30 h-30 object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-2/3 aspect-square rounded-lg flex items-center justify-center p-4 border-2 border-[#00FF8C]/30 mx-auto md:mx-0">
                          {icons[experience.icon as keyof typeof icons]}
                        </div>
                      )}
                    </div>

                    <h3 className="font-mono text-xl text-white font-bold leading-tight mb-0">
                      {experience.company}
                    </h3>
                    <p className="text-gray-400 mt-0">{experience.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
