// import PropTypes from 'prop-types';
import styles from './ProductCard.module.css'

const ProductCard = ({title, imgUrl}) => {

    return (
        <div className={styles.row}>
         <div className={styles.col}>
            <h2>{title}</h2>
            <img src={imgUrl} alt={title}/>
         </div>n

        </div>
    );
};

export default ProductCard;

// ProductCard.propTypes = {
//     title: PropTypes.string,
//     imgUrl: PropTypes.string
// }