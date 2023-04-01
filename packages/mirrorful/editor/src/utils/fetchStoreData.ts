import { TConfig } from '@mirrorful/core/lib/types'

export default async function fetchStoreData() {
  const response = await fetch('/api/config')
  const data: TConfig = await response.json()

  return data
}
