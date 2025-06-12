"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <link rel="icon" href="/logo.png" type="image/x-icon" sizes="16x16">
    <main className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to <span className="text-red-500">Redshifted</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A youth-powered STEM collective crafting the future with code, hardware, and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Button className="text-lg px-6 py-3 bg-red-600 hover:bg-red-700 rounded-2xl shadow-lg">
              Get Involved
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-800 border-none rounded-2xl shadow-2xl w-full max-w-md">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold mb-2">Upcoming Hackathon</h2>
              <p className="text-sm text-gray-300 mb-4">
                Join us for an electrifying weekend of code, collaboration, and cosmic ideas.
              </p>
              <Button className="w-full bg-white text-black hover:bg-gray-200">
                Sign Up
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
