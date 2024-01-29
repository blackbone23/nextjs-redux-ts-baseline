import { useRouter } from 'next/navigation';

export default function NotFoundError() {
  const router = useRouter()
  typeof window !== 'undefined' && router.push("/not-found")
}
