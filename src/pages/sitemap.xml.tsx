import { parse as dateParse } from 'date-fns'
import { readdirSync, statSync } from 'fs'
import { join, parse } from 'path'
import { resolve } from 'path'

import { imageBase } from '~/config'
import { productsFindAll } from '~/serverSide/repositories/products'
import { segmentsFindAll } from '~/serverSide/repositories/segment'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Sitemap = () => {}

export default Sitemap

function getFileLastmod(pathfile: string): string {
  try {
    const stats = statSync(resolve(__dirname, pathfile))
    return stats.mtime.toISOString()
  } catch (error) {
    return new Date().toISOString()
  }
}

export const getServerSideProps = async ({ res }) => {
  const staticPages = readdirSync(join(__dirname))
    .filter(staticPage => {
      // lista de exclusão
      return ![
        '_app.js',
        '_document.js',
        '_error.js',
        'sitemap.xml.js',
        'sitemal.xml.js',
        'next',
        'segmentation',
        'product',
        'purchase'
      ].includes(staticPage)
    })
    .map(staticPagePath => {
      return {
        url: `${imageBase}/${parse(staticPagePath).name}`,
        date: getFileLastmod(staticPagePath)
      }
    })

  const products = await productsFindAll()
  const productPages = products.map(({ slug, updatedAt, createdAt }) => {
    const date = dateParse(updatedAt || createdAt, 'yyyy-MM-dd HH:mm:ss', new Date())
    return {
      url: `${imageBase}/product/${slug}`,
      date: date.toISOString()
    }
  })

  const segments = await segmentsFindAll()
  const segmentPages = segments
    .filter(f => {
      return !!(f.actived && !f.customPage)
    })
    .map(({ slug }) => {
      return {
        url: `${imageBase}/segmentation/${slug}`,
        date: new Date().toISOString()
      }
    })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticPages, ...segmentPages, ...productPages]
        .map(({ url, date }) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${date}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
      </urlset>
    `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}
