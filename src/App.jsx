

import {useEffect, useState} from "react";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import Header from "./components/Header";
import Figure from "./components/Figure/Figure.jsx";
import Users from "./components/Users/Users.jsx";
import Forms from "./components/Forms/Forms.jsx";

const  App = () => {
        const [products, setProducts] = useState([])
        const [showFigure, setShowFigure] = useState(true)
        const [visibleProducts, setVisibleProducts] = useState(10)

        const showMoreProducts = () =>{
            setVisibleProducts(visibleProducts + 10)
        }

        // const endProducts = products.length - visibleProducts;
        // const showMoreButton = endProducts >= 0;


    useEffect(() => {
        fetch( 'https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
    },[])

  return (

      <div>
            <Header/>
            <div className="container">
              <Forms/>
            </div>
          {/*<Users/>*/}
          {/*<button onClick={()=>setShowFigure(!showFigure)}>{ showFigure ? 'Hide' : 'Show' }</button>*/}
          {/*{ showFigure && <Figure /> }*/}

          {/*{  false ?  <h2>Lorem ipsum dolor.</h2> : null }*/}
          {/*{true && <h2>Lorem ipsum dolor.</h2>}*/}
          {/*{*/}
          {/*    products.slice(0,visibleProducts).map((product) =>(*/}
          {/*      <ProductCard key={product.id}  title={product.title} imgUrl={product.images[0]} />*/}
          {/*    ))*/}
          {/*}*/}
          {/*{*/}
          {/*   visibleProducts < products.length &&  <button onClick={showMoreProducts}>Show More</button>*/}
          {/*}*/}



       </div>

  )
}

export default App
