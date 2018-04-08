import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products.map(product => {
      return (
        <ProductIndexItem
          key={`product-${product.id}`}
          product={product}
        />
      );
    });

    return (
      <div className="indexContainer">
        <div className='index-side-search'>search boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxessearch boxes</div>
        <ul className='index product list'>
          {products}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
