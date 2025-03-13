export const projects: Project[] = [
  {
    title: 'Pequeno Site de Kuizuo',
    description: '🦖 Blog pessoal baseado no gerador de sites estáticos Docusaurus',
    preview: '/img/project/blog.png',
    website: 'https://kuizuo.cn',
    source: 'https://github.com/kuizuo/blog',
    tags: ['opensource', 'design', 'favorito'],
    type: 'web',
  },
  {
    title: 'Desofuscador de Código JS',
    description: 'Ferramenta baseada no Babel para restaurar código JavaScript ofuscado',
    preview: '/img/project/js-deobfuscator.png',
    website: 'https://js-deobfuscator.vercel.app',
    source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource', 'favorito'],
    type: 'web',
  },
  {
    title: 'Youni (Plataforma Social Universitária)',
    description: 'Aplicativo de rede social universitária baseado em React Native + NestJs',
    preview: '/img/project/youni.png',
    website: 'https://youni.vercel.app',
    source: 'https://github.com/kuizuo/youni',
    tags: ['grande', 'produto'],
    type: 'web',
  },
  {
    title: 'nest-vben-admin',
    description: 'Sistema de gerenciamento de permissões com frontend e backend separados usando NestJs + Vben Admin',
    preview: '/img/project/nest-vben-admin.png',
    website: 'https://admin.kuizuo.cn',
    source: 'https://github.com/kuizuo/nest-vben-admin',
    tags: ['opensource', 'favorito', 'produto', 'grande'],
    type: 'web',
  },
  {
    title: 'Servidor de API',
    description: '🔗 Site de serviço de API baseado em Nuxt',
    preview: '/img/project/kz-api.png',
    website: 'https://api.kuizuo.cn',
    source: 'https://github.com/kuizuo/api-service',
    tags: ['opensource', 'favorito', 'produto'],
    type: 'web',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorito' | 'opensource' | 'produto' | 'design' | 'grande' | 'pessoal'

export type ProjectType = 'web' | 'app' | 'comercial' | 'pessoal' | 'brinquedo' | 'outro'

export const projectTypeMap = {
  web: '🖥️ Site',
  app: '💫 Aplicativo',
  comercial: 'Projeto Comercial',
  pessoal: '👨‍💻 Pessoal',
  brinquedo: '🔫 Experimento',
  outro: '🗃️ Outros',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorito: {
    label: 'Favorito',
    description: 'Meus sites favoritos, você precisa conferir!',
    color: '#e9669e',
  },
  opensource: {
    label: 'Código Aberto',
    description: 'Projetos open source que podem inspirar!',
    color: '#39ca30',
  },
  produto: {
    label: 'Produto',
    description: 'Projetos relacionados a produtos!',
    color: '#dfd545',
  },
  design: {
    label: 'Design',
    description: 'Sites bem projetados!',
    color: '#a44fb7',
  },
  grande: {
    label: 'Grande',
    description: 'Projetos grandes, com muitas páginas',
    color: '#8c2f00',
  },
  pessoal: {
    label: 'Pessoal',
    description: 'Projetos pessoais',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
