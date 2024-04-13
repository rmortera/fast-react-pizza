import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full border border-stone-200 bg-yellow-500 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed text-stone-800';

  const styles = {
    primary:
      base + ' px-4 py-3 laptop:px-6 laptop:py-4 tablet:px-6 tablet:py-4',
    small: base + ' px-3 py-1 tablet:px-5 tablet:py-2.5',
    round:
      base + ' px-2.5 py-1 tablet:px-3.5 tablet:py-2 text-sm tablet:text-sm',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 laptop:px-6 laptop:py-3.5 tablet:px-6 tablet:py-3.5 text-stone-400 hover:text-stone-800 focus:text-stone-800',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
