type Project = {
  name: string
  description: string
  overview: string
  tools: Array<string>
  link: string
  id: string
  image?: string
  mediaType: 'image' | 'video'
  video?: string
  gallery?: string[]
  paper? :{
    title: string
    url: string
  }
  
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Brain Tumor Segmentation using Convolutional Nerual Networks and Vision Transformers',
    description:
      'Compared single-modality and multimodal MRI inputs for tumor segmentation.',

    overview:
      'Built and evaluated deep learning segmentation workflows using single-modality and \
      multimodal (T1, T1CE, T2 and FLAIR scantype) MRI inputs to analyze how richer imaging context impacts tumor prediction quality. Large uppermost image \
      shows prediction using a full Convolutional nerual network (CNN) used in combination with a Vision Transformer; with single modality at the top\
      and multimodality at the bottom. Left column shows a CNN Only approach; single modality up top and multimodality on the bottom.\
      Right column shows a Decoder only configuration using CNN as encoder and Vision transfomer as decoder: again single modality up to and multimodality at the bottom.\
      I show incremental improvement of tumor region prediction when providing all four modalities - further training and implementation of additional architecture would \
      significantly improve predictions as this was a lower bound performance project.',

    tools: [
      'Python',
      'PyTorch',
      'Scipy',
      'NumPy',
      'torch',
    ],
    paper: {
      title: "TransUNet: Rethinking the U-Net architecture design for medical image segmentation through the lens of transformers ",
      url: 'https://www.sciencedirect.com/science/article/pii/S1361841524002056',
    },

    mediaType: 'image',

    link: 'https://github.com/yourgithub/project1',

    image:'/ModelPrediction.jpg',

    id: 'project1',

    gallery:[
      '/CNN_SM_T1T1CE.png',
      '/Deocder_SM.png',
      '/CNN_MM.png',
      '/DecoderMM.png',
    ]
  },

  {
    name: 'E. coli Chemotaxis Simulation',

    description:
      'Modeled bacterial run-and-tumble behavior in chemical concentration fields.',

      mediaType: 'image',

    overview:
      'Developed a stochastic simulation of E. coli chemotaxis using gradient sensing, probabilistic tumbling, and 2D Gaussian concentration fields to model bacterial navigation behavior.',

    tools: [
      'Python',
      'Scientific Computing',
      'NumPy',
      'Matplotlib',
      'Modeling',
    ],

    link: 'https://github.com/yourgithub/project2',

    image: '/animated_GMM.gif',

    gallery:[
      '/image1.jpg',
      '/image2.jpg',
      '/image3.jpg',
    ],


    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'FaunaBio',
    title: 'Assistant Research Scientist',
    start: 'Jul 2022',
    end: 'Feb 2026',
    id: 'work1',
  },
  {
    company: 'Synvivia Inc.',
    title: 'Microbial Engineering Research Associate',
    start: 'Dec 2019',
    end: 'Jun 2022',
    id: 'work2',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    id: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    id: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    id: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    id: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/cglopezjr/?skipRedirect=true',
  },
]

export const EMAIL = 'cglopez@berkeley.edu'
