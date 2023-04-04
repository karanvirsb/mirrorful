'use client'
import ShadowsPage from '@core/pages/shadows'
import { defaultConfig, TConfig } from '@core/types'
import LayoutWrapper from '@web/components/LayoutWrapper'
import { useLocalStorage } from '@web/hooks/useLocalStorage'
import React from 'react'

function Shadows() {
  const [data, setData] = useLocalStorage<TConfig>(
    'mirrorfulConfigData',
    defaultConfig
  )
  return (
    <LayoutWrapper>
      <ShadowsPage
        postStoreData={async (newData: TConfig) => {
          setData(newData)
        }}
      />
    </LayoutWrapper>
  )
}

export default Shadows
