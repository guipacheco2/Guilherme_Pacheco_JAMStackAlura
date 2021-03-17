export interface Project {
  image: string
  featured: boolean
  title: string
  slug: string
  description: string
  link: string
}

export type Projects = Project[]

export interface Db {
  projects: Projects
}
