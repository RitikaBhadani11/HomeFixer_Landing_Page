"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    service: "Plumbing Repair",
    rating: 5,
    comment:
      "Amazing service! The plumber arrived within 45 minutes and fixed everything professionally. Highly recommended!",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    service: "Electrical Wiring",
    rating: 5,
    comment: "Professional, punctual, and thorough. My entire house rewiring was done perfectly. Best experience ever.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    service: "Home Cleaning",
    rating: 5,
    comment:
      "The cleaning team was incredibly thorough and polite. My home has never looked better. Worth every penny!",
    initials: "ER",
  },
  {
    name: "David Park",
    service: "Appliance Repair",
    rating: 5,
    comment: "Called them at midnight for emergency repair. They arrived quickly and fixed my AC. Excellent service!",
    initials: "DP",
  },
]

export default function TestimonialsSection() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Customer Stories</h2>
          <p className="text-lg text-muted-foreground">Trusted by thousands of happy homeowners</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="glass p-8 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.4)" }}
            >
              <motion.div
                className="flex items-start gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 font-semibold text-slate-900"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  {testimonial.initials}
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  </motion.span>
                ))}
              </motion.div>

              <p className="text-foreground leading-relaxed">{testimonial.comment}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
