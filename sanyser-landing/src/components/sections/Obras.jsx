import { obras } from '../../data/obras';

export default function Obras() {
  const featured = obras.find((o) => o.featured);
  const small = obras.filter((o) => !o.featured);

  return (
    <section id="obras" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">

        <h2 className="text-3xl sm:text-5xl font-black font-headline text-slate-900 mb-16">
          Obras que nos respaldan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card grande — col-span-2 row-span-2 */}
          {featured && (
            <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl h-[400px] lg:h-[600px]">
              <img
                src={featured.imagen}
                alt={featured.titulo}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white text-2xl font-bold font-headline">
                  {featured.titulo}
                </h4>
                {featured.descripcion && (
                  <p className="text-slate-300 mt-1">{featured.descripcion}</p>
                )}
              </div>
            </div>
          )}

          {/* Cards chicas */}
          {small.map((obra) => (
            <div
              key={obra.id}
              className="relative group overflow-hidden rounded-2xl h-[220px] lg:h-[292px]"
            >
              <img
                src={obra.imagen}
                alt={obra.titulo}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white font-bold font-headline">{obra.titulo}</h4>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
