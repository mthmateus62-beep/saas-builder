import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Admin() {
  const [apps, setApps] = useState([])

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('apps').select('*')
      setApps(data || [])
    }
    load()
  }, [])

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">Painel Admin</h1>
      <div className="mt-6 grid gap-4">
        {apps.map(app => (
          <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-700" key={app.id}>
            <div className="font-bold">{app.name}</div>
            <div className="opacity-70 text-sm">{app.status}</div>
            <a className="text-purple-400 text-xs" href={app.vercel_url}>Abrir</a>
          </div>
        ))}
      </div>
    </div>
  )
}
