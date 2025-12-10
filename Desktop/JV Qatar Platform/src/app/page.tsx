import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirection côté serveur vers la vue d'ensemble
  redirect('/overview')
}
