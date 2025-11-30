import { supabase } from '../lib/supabase'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user || null))
  }, [])

  if (!user) return <div className="p-8 text-white">Carregando...</div>

  return (
    <div className="p-10 text-white">
      <h1 className="text-2xl font-bold">Olá, {user.email}</h1>
      <p className="mt-4">Este é seu dashboard do SaaS gerado.</p>
    </div>
  )
}
