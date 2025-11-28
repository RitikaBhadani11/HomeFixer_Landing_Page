"use client"

import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const contactItems = [
    { icon: Phone, title: "Call Us", subtitle: "1-800-FIXER (1-800-349-3537)" },
    { icon: Clock, title: "Available 24/7", subtitle: "Emergency services anytime" },
    { icon: MapPin, title: "Service Area", subtitle: "All major cities" },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-slate-950 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="glass p-12 md:p-16 text-center rounded-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.3)" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-balance"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book your service now and get professional home services at your doorstep in minutes. Available 24/7 with
            our satisfaction guarantee.
          </motion.p>

          <motion.button
            className="gradient-btn inline-flex items-center gap-2 mb-12 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Book Now{" "}
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-700/20">
            {contactItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, delay: idx * 2 }}
                  >
                    <Icon className="w-6 h-6 text-slate-900" />
                  </motion.div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
