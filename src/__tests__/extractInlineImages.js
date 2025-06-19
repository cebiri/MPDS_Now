const { extractInlineImages } = require('../../utils')

describe('extractInlineImages', () => {
  it('handles nodes without frontmatter', () => {
    const node = {
      rawMarkdownBody: "<img src='/img/foo.jpg' />",
      fileAbsolutePath: __filename,
    }
    const result = extractInlineImages(node)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(1)
  })
})
