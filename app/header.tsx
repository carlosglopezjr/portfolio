'use client'

import { motion } from 'motion/react'

const HEADER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const HEADER_ITEM = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export function Header() {
  return (
    <motion.header
      className="mb-10"
      variants={HEADER_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <motion.img
          src="/Headshot.png"
          alt="Carlos Lopez"
          className="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
          variants={HEADER_ITEM}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        <motion.div
          variants={HEADER_ITEM}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <h1 className="font-medium text-zinc-900 dark:text-zinc-50">
            Carlos Lopez
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400">
            Molecular Science and Software Engineering Graduate Student
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            UC Berkeley
          </p>
        </motion.div>
      </div>
    </motion.header>
  )
}
