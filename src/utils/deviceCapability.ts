export type DeviceTier = 'low' | 'medium' | 'high'

export function getDeviceTier(): DeviceTier {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const hasWebGL2 = (() => {
    try {
      const canvas = document.createElement('canvas')
      return !!canvas.getContext('webgl2')
    } catch { return false }
  })()

  if (isMobile) return 'low'
  if (!hasWebGL2) return 'medium'
  
  // Check hardware concurrency as a rough indicator
  const cores = navigator.hardwareConcurrency || 4
  if (cores >= 8) return 'high'
  if (cores >= 4) return 'medium'
  return 'low'
}

export function getParticleCount(tier: DeviceTier): number {
  switch (tier) {
    case 'high': return 8000
    case 'medium': return 4000
    case 'low': return 1500
  }
}
