'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import React from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

const INTRO_TEXT = `Hi, my name is Carlos, a Molecular Science and Software Engineering graduate student at UC Berkeley. I have over \
five years of wet lab experience in biotech, working on projects spanning bioproduction and drug discovery, including industrial and \
therapeutic applications worth millions. That experience is what drives my work now. I'm building fluency across machine learning, \
data science, and software engineering with a focus on creating tools that make biological research faster, smarter, and more impactful. \
Below are a few projects where I've put those skills to work.`

function TypewriterText({
  text,
  speed = 18,
  className = '',
}: {
  text: string
  speed?: number
  className?: string
}) {
  const [displayedText, setDisplayedText] = React.useState('')

  React.useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1))
      index++

      if (index >= text.length) {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <p className={className}>
      {displayedText}
      <span className="animate-pulse text-zinc-500">|</span>
    </p>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
  variants={VARIANTS_SECTION}
  transition={TRANSITION_SECTION}
>
  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
    <motion.div
      className="shrink-0"
      variants={VARIANTS_SECTION}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
    </motion.div>

    <div className="flex-1">
      <motion.div
        variants={VARIANTS_SECTION}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      >
        <TypewriterText
          text={INTRO_TEXT}
          speed={5}
          className="whitespace-pre-line text-zinc-600 dark:text-zinc-400"
        />
      </motion.div>
    </div>
  </div>
</motion.section>

<motion.section
  variants={VARIANTS_SECTION}
  transition={TRANSITION_SECTION}
>
<motion.h3
  className="mb-5 text-lg font-medium"
  variants={VARIANTS_SECTION}
  transition={{ duration: 2.6, ease: 'easeOut', delay:0.4}}
  >
    Projects
</motion.h3>


  <motion.div
  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
  >
    {PROJECTS.map((project) => (
      <MorphingDialog
        key={project.name}
        transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        <MorphingDialogTrigger>
          <motion.div
          className="cursor-pointer space-y-2"
          variants={VARIANTS_SECTION}
          transition={{
            duration: 4.45,
            ease: 'easeOut',
          }}
          whileHover={{
            y:-4,
            scale:1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          >
          <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset transition hover:scale-[1.01] dark:bg-zinc-950/40 dark:ring-zinc-800/50">

            {project.mediaType === 'image' && project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="aspect-video w-full rounded-xl object-cover"
              />
            ) : project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="aspect-video w-full rounded-xl object-cover"
              />
            ):null}
          </div>
      

            <div className="px-1">
              <div className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
        </motion.div>
        </MorphingDialogTrigger>

        <MorphingDialogContainer>
          <MorphingDialogContent className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl dark:bg-zinc-950">
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {project.name}
              </h2>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>

            <div className="mb-8 rounded-2xl bg-zinc-100 p-1 dark:bg-zinc-900">
              {project.mediaType === 'image' && project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="aspect-video w-full rounded-xl object-cover"
                />
              ) : project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  className="aspect-video w-full rounded-xl object-cover"
                />
              ) : null}
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {project.gallery.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={project.name}
                    className="aspect-video w-full rounded-md object-cover object-right"
                  />
                ))}
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  Project Overview
                </h3>

                <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                  {project.overview}
                </p>

                {project.paper &&  (
                  <a
                  href={project.paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-zinc-700 underline underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                  >
                    Reference: {project.paper.title}
                  </a>
                )}
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tools) => (
                    <span
                      key={tools}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800"
                    >
                      {tools}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </MorphingDialogContent>

          <MorphingDialogClose
            className="fixed top-6 right-6 rounded-full bg-white p-2 shadow-lg dark:bg-zinc-900"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.2 },
              },
              exit: {
                opacity: 0,
              },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    ))}
  </motion.div>
</motion.section>

<motion.section
  variants={VARIANTS_SECTION}
  transition={TRANSITION_SECTION}
>
  <motion.h3
    className="mb-5 text-lg font-medium"
    variants={VARIANTS_SECTION}
    transition={{ duration: 4.6, ease: 'easeOut', delay: 0.2 }}
  >
    Work Experience
  </motion.h3>

  <motion.div
    className="flex flex-col space-y-2"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.12,
        },
      },
    }}
  >
    {WORK_EXPERIENCE.map((job) => (
      <motion.a
        key={job.id}
        className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
        target="_blank"
        rel="noopener noreferrer"
        variants={VARIANTS_SECTION}
        transition={{ duration: 4.60, ease: 'easeOut' }}
        whileHover={{
          y: -3,
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
      >
        <Spotlight
          className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
          size={64}
        />

        <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
          <div className="relative flex w-full flex-row justify-between">
            <div>
              <h4 className="font-normal dark:text-zinc-100">
                {job.title}
              </h4>

              <p className="text-zinc-500 dark:text-zinc-400">
                {job.company}
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400">
              {job.start} - {job.end}
            </p>
          </div>
        </div>
      </motion.a>
    ))}
  </motion.div>
</motion.section>


      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
