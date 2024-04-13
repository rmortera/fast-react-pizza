import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-8 text-center tablet:my-16">
      <h1 className="mb-8 px-4 text-2xl font-semibold tablet:px-6 tablet:text-4xl laptop:px-8 laptop:text-8xl">
        The best pizza.
        <br />
        <span className="text-base text-yellow-500 tablet:text-2xl laptop:text-6xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Go back to menu
        </Button>
      )}
    </div>
  );
}

export default Home;
