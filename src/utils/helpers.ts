import { DesignsQuery, BehanceProject, Design } from '..'

export const truncate = (input: string, target = 10) =>
  input.length > target - 3 ? `${input.substring(0, target - 3)}...` : input

export default { truncate }

export const mapDesignCovers = ({ allBehanceProjects, allFile }: DesignsQuery) => {
  const findDesignCover = (design: BehanceProject): any => {
    const image = allFile.nodes.find(file => file.relativeDirectory.includes(design.slug))
    if (image) return image
  }

  const designs: Design[] = []

  allBehanceProjects.nodes.forEach(design => {
    if (findDesignCover(design)) {
      designs.push({
        ...design,
        cover: findDesignCover(design)
      })
    }
  })

  return designs
}
