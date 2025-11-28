"use client"
import { Menu, X, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Wrench className="w-6 h-6 text-slate-900" />
          </motion.div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">HomeFixer</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "How It Works", "Reviews", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-muted-foreground hover:text-foreground transition"
              whileHover={{ scale: 1.1, color: "#00d9ff" }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button className="gradient-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden border-t border-border bg-background overflow-hidden"
      >
        <nav className="p-4 space-y-3">
          {["Services", "How It Works", "Reviews", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-muted-foreground hover:text-foreground py-2"
              whileHover={{ x: 10 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button className="w-full gradient-btn mt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Book Now
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  )
}
