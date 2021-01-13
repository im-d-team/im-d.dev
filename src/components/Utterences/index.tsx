import * as React from "react";
import { useEffect, useRef } from 'react'

import './index.scss'

const src = 'https://utteranc.es/client.js'

interface UtterencesProps {
  repo: string;
  theme: string;
}

export default ({ repo, theme }: UtterencesProps) => {
  const rootElm = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      theme,
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      // @ts-ignore
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return (<div className="utterences" ref={rootElm} />)
}

