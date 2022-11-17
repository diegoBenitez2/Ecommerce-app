import { FaShoppingCart, FaImage } from 'react-icons/fa';
import './ProductCard.scss';

const ProductCard = ({ 
  info, 
  addShoppingCard }) => {
  return (
    <a className='ProductCard' href={info.link}>
    <div className='ProductCard__container cr-pointer'>
      { info.image.url 
        ?  <img 
        src={info.image.url} 
        alt={info.image.image_alt}
        className='ProductCard__picture' /> 
        : <div className='ProductCard__notImage background-border-dark '>
            <FaImage size='5rem' className="color-border-gray" />
          </div>
      }
      <div className="ProductCard__info">
        <p className="ProductCard__info_title h4">{info.title || '--'}</p>
        <p className="display-3 ProductCard__info_desc">${info.price || '--'}</p>
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