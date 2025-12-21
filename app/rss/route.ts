import { baseUrl } from 'app/sitemap'

export async function GET() {
  const projects = [
    {
      title: 'SpotVisit - Travel Planning Platform',
      link: `${baseUrl}/projects`,
      description: 'Travel planning and spot organization platform with interactive maps',
      pubDate: new Date().toUTCString()
    },
    {
      title: 'Uncover - AI Cognitive Analysis',
      link: `${baseUrl}/projects`,
      description: 'AI-powered cognitive analysis tool for mental wellness',
      pubDate: new Date().toUTCString()
    },
    {
      title: 'MusiCal - Music Discovery App',
      link: `${baseUrl}/projects`,
      description: 'Full-stack music discovery web app with Spotify API integration',
      pubDate: new Date().toUTCString()
    }
  ]

  const itemsXml = projects
    .map(
      (project) =>
        `<item>
          <title>${project.title}</title>
          <link>${project.link}</link>
          <description>${project.description}</description>
          <pubDate>${project.pubDate}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Christopher O. Lopez - Portfolio</title>
        <link>${baseUrl}</link>
        <description>Portfolio of Christopher O. Lopez - Data Science & Full Stack Development</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
