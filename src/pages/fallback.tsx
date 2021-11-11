import type { NextPage } from 'next'
import React from 'react'

const PageFallback: NextPage = () => (
  <div>
    <h1>Seu dispositivo está offline</h1>
    <small>
      Route will <strong>fallback</strong> to this page
    </small>
  </div>
)

export default PageFallback
