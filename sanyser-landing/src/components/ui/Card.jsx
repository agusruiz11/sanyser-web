export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden ${
        hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
