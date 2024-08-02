import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function AppLayout() {

  return (
    <div className="grid h-screen grid-rows-[auto_1fr] bg-gradient-to-b from-stone-700 to-slate-600 text-stone-300">

      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-5xl">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
