const variants = {
  primary: 'bg-primary-orange hover:bg-orange-600 text-white',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-navy',
  'outline-dark': 'border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white',
  ghost: 'text-white hover:text-primary-orange',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  href,
  target,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer';
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
