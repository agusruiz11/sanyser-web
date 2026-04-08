export default function SectionTitle({ eyebrow, title, subtitle, light = false, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-primary-orange font-headline text-2xl uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-primary-orange text-4xl md:text-5xl font-black font-headline tracking-wide leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-headline mt-4 text-3xl max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
