import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="tablet:ml-5px w-28 rounded-full border border-stone-200 bg-stone-100 px-4 py-2 text-[9px] transition-all duration-300 placeholder:text-stone-400 focus:w-32 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 tablet:w-64 tablet:text-base tablet:focus:w-72 laptop:text-lg"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
