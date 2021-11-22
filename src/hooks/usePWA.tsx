import { isMobile, isAndroid, isFirefox, isIOS, isOpera, browserVersion } from 'mobile-device-detect'
import { useCallback, useEffect, useRef, useState } from 'react'

export const platforms = {
  NATIVE: 'native', // currently: Chrome, Edge mobile, Samsung internet
  FIREFOX: 'firefox',
  FIREFOX_NEW: 'firefox_new', // above version 79
  OPERA: 'opera',
  IDEVICE: 'idevice',
  OTHER: 'other' // don't know, so will do nothing
}

export function getPlatform() {
  let platform = platforms.OTHER
  if (window.hasOwnProperty('BeforeInstallPromptEvent')) {
    platform = platforms.NATIVE
  } else if (isMobile && isAndroid && isFirefox && +browserVersion >= 79) {
    platform = platforms.FIREFOX_NEW
  } else if (isMobile && isAndroid && isFirefox) {
    platform = platforms.FIREFOX
  } else if (isOpera && isAndroid && isMobile) {
    platform = platforms.OPERA
  } else if (isIOS && isMobile) {
    platform = platforms.IDEVICE
  }

  return platform
}

type Props = {
  enableLogging?: boolean
}

export function usePWA({ enableLogging }: Props) {
  const deferredprompt = useRef<BeforeInstallPromptEvent>(null)

  const logger = useCallback(
    message => {
      // eslint-disable-next-line no-console
      if (enableLogging) console.log(message)
    },
    [enableLogging]
  )

  const isServer = useCallback(() => !!(typeof window === 'undefined'), [])

  const supported = useCallback(() => {
    const platform = getPlatform()
    if (deferredprompt.current != null && platform === platforms.NATIVE) {
      logger('supported: true - native platform')
      return true
    }
    if (platform !== platforms.NATIVE && platform !== platforms.OTHER) {
      logger('supported: true - manual support')
      return true
    }
    logger('supported: false')
    return false
  }, [logger])

  const isInstalled = useCallback(() => {
    if (!isServer()) {
      const isInStandaloneMode = 'standalone' in window.navigator && window.navigator['standalone']
      if (isInStandaloneMode || window.matchMedia('(display-mode: standalone)').matches) {
        logger('isInstalled: true. Already in standalone mode')
        return true
      }
    }
    logger('isInstalled: false.')
    return false
  }, [logger, isServer])

  const installPwa = useCallback(() => {
    logger('handleInstall called')
    if (deferredprompt.current) {
      deferredprompt.current.prompt()
    }
  }, [logger])

  const handleBeforeInstallPromptEvent = useCallback(
    event => {
      event.preventDefault()
      deferredprompt.current = event
      setContextValue({ supported, isInstalled, installPwa })
    },
    [supported, isInstalled, installPwa]
  )

  const [contextValue, setContextValue] = useState({
    supported: supported,
    isInstalled: isInstalled,
    installPwa
  })

  useEffect(() => {
    if (!isServer()) window.addEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    return () => {
      if (!isServer()) window.removeEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    }
  }, [handleBeforeInstallPromptEvent, isServer])

  return { ...contextValue }
}
