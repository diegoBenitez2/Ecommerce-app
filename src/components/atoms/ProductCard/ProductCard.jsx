import { FaShoppingCart } from 'react-icons/fa';
import './ProductCard.scss';

const ProductCard = ({ info, addShoppingCard }) => {
  return (
    <a className='ProductCard' href={info.link}>
    <div className='ProductCard__container cr-pointer'>
      <img 
        src={info.image} 
        alt={info.image.image_alt}
        className='ProductCard__picture' />
      <div className="ProductCard__info">
        <p className="h4">{info.title || '--'}</p>
        <p className="display-3">${info.price || '--'}</p>
      </div>
      <div className="ProductCard__tap">
        <button
          onClick={() => addShoppingCard(info.id)}>
        <FaShoppingCart
          size='1.5em' 
          className='cr-pointer color-border-gray' />
        </button>
      </div>
    </div> 
    </a>
  );
};

export default ProductCard;