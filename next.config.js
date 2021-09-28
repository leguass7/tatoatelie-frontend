/* eslint-disable import-helpers/order-imports */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true, // para funcionar o plugin `next-fonts`
    domains: ['next.tatoatelie.com.br', 'tatoatelie.com.br']
  },
  api: {
    bodyParser: {
      sizeLimit: '500kb'
    }
  }
}

const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins(
  [
    [withBundleAnalyzer({})],
    [withImages, { inlineImageLimit: false }],
    [withFonts]
    // ...
  ],
  nextConfig
)
