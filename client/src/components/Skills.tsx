import { motion } from "framer-motion";
import { Shield, Code } from "lucide-react";
import { skillsData } from "@/lib/skillsData";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 px-4  transition-all duration-500"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1e1e,_#0b0b0b)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-2 inline-block relative">
            <span className="text-[#00FF8C]">#</span>
            <span className="text-white ml-2">Technical Skills</span>
            <div className="h-1 w-36 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-tight">
            Core competencies and technical expertise
          </p>
        </motion.div>

        <motion.div
          className=""
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Technical Stack */}
          <motion.div variants={itemVariants}>
            <h3 className="font-mono text-xl font-semibold mb-4 flex items-center">
              <Code className="text-[#00FF8C] mr-2" />
              <span className="text-white">Technical Stack</span>
            </h3>
            <div className="bg-[#1A1A1A] p-5 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]">
              <div className="grid grid-cols-3 gap-9">
                {Object.entries(skillsData.technicalStack).map(
                  ([category, skills], index) => (
                    <div
                      key={index}
                      className={`p-3 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 ${
                        category === "Additional Skills" ? "col-span-2" : ""
                      }`}
                    >
                      <h4 className="font-mono text-sm font-semibold mb-1 text-[#00FF8C]">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#1A1A1A] rounded text-xs font-mono border border-gray-800"
                          >
                            <span className="text-white">{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
