import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div
      className="hidden text-xs
     font-semibold tablet:block tablet:text-base laptop:text-xl"
    >
      {username}
    </div>
  );
}

export default Username;
