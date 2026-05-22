const steps = [
  "IR A CARGA",
  "HE LLEGADO A CARGA",
  "CARGADO Y SALIENDO",
  "HE LLEGADO A DESTINO",
  "DESCARGA COMPLETADA",
];

export default function DriverApp() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-5">
      <section className="max-w-md mx-auto">
        <p className="text-sm text-neutral-400">EuropeLogix OS Driver</p>
        <h1 className="text-2xl font-semibold mt-2">Ruta activa</h1>

        <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-5 mt-5">
          <p className="text-neutral-400 text-sm">Origen</p>
          <p className="text-lg">Warsaw, Poland</p>
          <p className="text-neutral-400 text-sm mt-4">Destino</p>
          <p className="text-lg">Girona, Spain</p>
          <p className="text-neutral-400 text-sm mt-4">Estado</p>
          <p className="text-lg">Asignado</p>
        </div>

        <div className="mt-5 space-y-3">
          {steps.map((step) => (
            <button
              key={step}
              className="w-full rounded-2xl bg-white text-black py-5 text-lg font-semibold"
            >
              {step}
            </button>
          ))}
        </div>

        <button className="w-full rounded-2xl border border-red-800 text-red-300 py-4 mt-5 font-semibold">
          REPORTAR INCIDENCIA
        </button>
      </section>
    </main>
  );
}
