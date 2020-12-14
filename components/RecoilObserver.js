import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

const RecoilObserver = () => {
  const snapshot = useRecoilSnapshot()

  useEffect(() => {
    console.debug('The following atoms were modified:')
    // eslint-disable-next-line
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node))
    }
  }, [snapshot])

  return null
}

export default RecoilObserver
