'use client'

import {
  NextParticles,
  NextParticlesProvider,
} from '@tsparticles/nextjs'
import type { Engine } from '@tsparticles/engine'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const init = async (engine: Engine): Promise<void> => {
  const { loadSlim } = await import('@tsparticles/slim')
  await loadSlim(engine)
}

export function ParticleBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isLight = resolvedTheme === 'light'

  const particleColor = isLight ? '#000000' : '#a1a1aa'
  const particleOpacity = isLight ? 0.50 : 0.50
  const linkOpacity = isLight ? 0.40 : 0.40
  const grabOpacity = isLight ? 0.50 : 0.7

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <NextParticlesProvider init={init}>
        <NextParticles
          key={resolvedTheme}
          id="tsparticles"
          className="h-full w-full"
          options={{
            fullScreen: {
              enable: false,
            },
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                },
              },
              color: {
                value: particleColor,
              },
              links: {
                enable: true,
                color: particleColor,
                distance: 140,
                opacity: linkOpacity,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
                outModes: {
                  default: 'out',
                },
              },
              opacity: {
                value: particleOpacity,
              },
              size: {
                value: {
                  min: 1,
                  max: 3,
                },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: grabOpacity,
                  },
                },
              },
            },
            detectRetina: true,
          }}
        />
      </NextParticlesProvider>
    </div>
  )
}