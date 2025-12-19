import './index.css'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300">Building in public</span>
        </div>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Tasked
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          Coming soon — a clean, fast way to plan tasks and stay on track.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="w-full sm:w-auto rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow hover:opacity-90"
          >
            Notify me
          </a>

          <a
            href="#"
            className="w-full sm:w-auto rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-3 font-semibold text-slate-100 hover:bg-slate-900"
          >
            Learn more
          </a>
        </div>

        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Tasked. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default App
