'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Code, Mail, Github, Linkedin, Briefcase, GraduationCap, Award, Shield } from 'lucide-react'

export default function Home() {
  const [text, setText] = useState('')
  const fullText = "Welcome to My World!"
  
  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(intervalId)
      }
    }, 100)
    return () => clearInterval(intervalId)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <header className="mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          &gt; Shashank_Pandey
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl"
        >
          {text}<span className="animate-pulse">_</span>
        </motion.p>
      </header>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-900">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <TabsContent value="summary">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className="bg-gray-900 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-500">
                    <Shield className="mr-2" />
                    Profile Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-400">
                  <motion.p variants={itemVariants}>
                    Dedicated Engineer specializing in Cyber Threat Detection, Incident Response, and Vulnerability Assessment. 
                    Expertise in site Reliability & Security Solutions, with hands-on experience in industry-standard tools like 
                    Burp Suite and Metasploit.
                  </motion.p>
                  <motion.p variants={itemVariants} className="mt-4">
                    Core Competencies: Hardware & Product Security, SIEM, Security Vulnerability Assessment, Data Analysis, 
                    Network Security Monitoring, Identity and Access Management, Digital Forensics, AI & Machine Learning, 
                    Risk Assessment & Management, Cloud Security, AWS & Google Instances, Docker.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="experience">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className="bg-gray-900 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-500">
                    <Briefcase className="mr-2" />
                    Work Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-400">
                  <motion.ul variants={itemVariants} className="space-y-4">
                    <li>
                      <h3 className="font-semibold">Senior Scientist Analyst (SSA) @ Central Investigation Department (FSL), CID, Patna</h3>
                      <p className="text-sm text-green-600">May 2024 – Jul 2024</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>Recovered 70% of crucial digital evidence pieces and identified 72 key suspects.</li>
                        <li>Utilized Magnet Axiom and Insight Pro to track 100+ crypto transactions.</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Security Operation Centre Intern @ Cyber Security Council for Operations & Intelligence, Bengaluru</h3>
                      <p className="text-sm text-green-600">Mar 2024 – May 2024</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>Identified Windows 11 vulnerabilities and ensured Governance, Risk, and Compliance.</li>
                        <li>Executed security hardening and conducted 20+ security audits.</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">SIEM Engineer Intern @ Boston IT Solution, Boston Limited, Bengaluru</h3>
                      <p className="text-sm text-green-600">Jul 2023 – Aug 2023</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>Developed a specialized Vulnerability Scanner using advanced SIEM technology, improving threat detection by 20%.</li>
                        <li>Analyzed security mechanisms and patterns of OWASP Top 10 vulnerabilities using SIEM tools like Google Chronicle.</li>
                      </ul>
                    </li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="skills">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className="bg-gray-900 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-500">
                    <Code className="mr-2" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-400">
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Programming Languages</h3>
                      <div className="space-y-2">
                        {['C', 'C++', 'Python', 'JavaScript', 'SQL', 'Bash'].map((lang) => (
                          <div key={lang} className="flex items-center">
                            <span className="w-24">{lang}</span>
                            <Progress value={Math.random() * 40 + 60} className="flex-grow" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Burp Suite', 'Metasploit', 'SIEM', 'AWS', 'Docker', 'Git', 'Linux', 'Splunk', 'Nmap'].map((tool) => (
                          <Badge key={tool} variant="outline" className="bg-gray-800 text-green-400">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="education">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className="bg-gray-900 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-500">
                    <GraduationCap className="mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-400">
                  <motion.div variants={itemVariants}>
                    <h3 className="font-semibold">Manipal Institute of Technology, Bengaluru, India</h3>
                    <p>B. Tech in Computer Science and Engineering (Cybersecurity)</p>
                    <p className="text-sm text-green-600">Nov 2021 – Aug 2025</p>
                    <p>GPA: 8.0 (Till 6th Semester)</p>
                    <p className="mt-2">
                      <strong>Achievements:</strong> 1st-semester topper, Academic Excellence Award
                    </p>
                    <p className="mt-2">
                      <strong>Core Concepts:</strong> DSA, OOPS, Networking, Operating Systems, DBMS, Advanced Cryptography, 
                      AI In Cybersecurity, Cyberlaw and Ethics, Distributed Cloud Security, Security Protocols
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="certifications">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className="bg-gray-900 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-500">
                    <Award className="mr-2" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-400">
                  <motion.ul variants={itemVariants} className="list-disc list-inside space-y-2">
                    <li>Google Cybersecurity Professional Certificate (Coursera, 2024)</li>
                    <li>Software Engineering Certified Practitioner (Coursera, 2024)</li>
                    <li>Cybersecurity Foundations (LinkedIn, 2023)</li>
                    <li>PicoCTF Score: 4296 (Carnegie Mellon University, 2024)</li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 text-center text-sm"
      >
        <p>&copy; 2024 Shashank Pandey | Securing the digital frontier</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Button variant="outline" size="icon" className="bg-gray-800 text-green-400">
            <Mail className="h-4 w-4" />
            <span className="sr-only"><a href="shashankp914@gmail.com">Email</a></span>
          </Button>
          <Button variant="outline" size="icon" className="bg-gray-800 text-green-400">
            <Github className="h-4 w-4" />
            <span className="sr-only"><a href="https://github.com/shashankp914/">GitHub</a></span>
          </Button>
          <a href="https://www.linkedin.com/in/shashank-pandey-932498135/">
          <Button variant="outline" size="icon" className="bg-gray-800 text-green-400">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          </a>
        </div>
      </motion.footer>
    </div>
  )
}