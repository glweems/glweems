const Axios = require('axios')
const Cheerio = require('cheerio')

const TurndownService = require('turndown')
exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, reporter },
  options
) => {
  const { createNode } = actions

  const data = await Axios.get(
    'https://docs.google.com/document/d/e/2PACX-1vSHaghePnqrnkCLxr8kQhNmYo7IrpktVqEK9_URiuJwln_6_f0kwtjI1IeVKU4yeSKc9YQj1Jace60C/pub'
  )
    .then((res) => res.data)
    .catch(reporter.error)

  const $ = Cheerio.load(data)

  const title = $('#title').text()

  const elms = $('p span')

  elms.each(function (elm, i) {
    const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/
    if (regex.test($(this).text())) $(this).remove()
  })
  const content = $('#contents')

  const turndownService = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    strongDelimiter: '__',
  })

  turndownService.remove('style')
  turndownService.remove('script')

  const resume = turndownService.turndown(content.html())

  const nodeMeta = {
    id: createNodeId(`google-docs-resume-${title}`),
    title,
    date: new Date(),
    nodeContent: resume,
    parent: null,
    children: [],
    internal: {
      type: `Resume`,
      mediaType: 'text/markdown',
      content: resume,
      contentDigest: createContentDigest(resume),
    },
  }

  createNode(nodeMeta)

  reporter.success('Resume Node Created')
}
