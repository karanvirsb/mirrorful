'use client'
import { ColorsPage } from '@core/pages/ColorsPage'
import { usePostStoreData } from '@web/hooks/usePostStoreData'
import React from 'react'

export default function Colors() {
  const [postStoreData] = usePostStoreData()
  return <ColorsPage postStoreData={postStoreData} />
}
