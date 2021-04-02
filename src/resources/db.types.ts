export interface Project {
  description: string
  featured: boolean
  image: string
  link: string
  slug: string
  title: string
}

export type Projects = Project[]

export interface Db {
  projects: Projects
}
