"use client"

import { Facebook, Twitter, Instagram, Linkedin, Wrench } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      className="bg-slate-950 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Wrench className="w-6 h-6 text-slate-900" />
              </motion.div>
              <span className="text-lg font-bold">HomeFixer</span>
            </motion.div>
            <p className="text-muted-foreground text-sm">Professional home services on-demand, 24/7.</p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Plumbing", "Electrical", "Cleaning", "Repairs"].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#"
                    className="hover:text-foreground transition"
                    whileHover={{ x: 5, color: "#00d9ff" }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About Us", "Contact", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="hover:text-foreground transition"
                    whileHover={{ x: 5, color: "#00d9ff" }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(0, 217, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-slate-700/30 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 HomeFixer. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-foreground transition"
                  whileHover={{ color: "#00d9ff" }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
