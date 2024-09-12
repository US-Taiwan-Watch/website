import Image from 'next/image'

// NOTE: no need to be sizable for phase1, because only landing page needs it
const UKetagalanLogo = () => {
  return (
    <Image
      width={271}
      height={50}
      alt="Ketagalan Logo"
      src="/assets/logo/KetagalanLogo.png"
    />
  )
}

export default UKetagalanLogo
