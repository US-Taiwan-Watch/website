import { ROUTES } from '@/routes'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/navigation'

/**
 * Header 的 Account 功能
 * @returns
 */
export default function useHeaderAccount() {
  const router = useRouter()
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const handleAccountClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect()
      return
    }

    router.push(ROUTES.ACCOUNT)
  }

  return { handleAccountClick }
}
