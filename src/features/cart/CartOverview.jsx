import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 tablet:px-6 laptop:text-base">
      <p className="space-x-4 font-semibold text-stone-300 tablet:space-x-6">
        <span>
          {totalCartQuantity === 1
            ? totalCartQuantity + ' pizza'
            : totalCartQuantity + ' pizzas'}
        </span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
