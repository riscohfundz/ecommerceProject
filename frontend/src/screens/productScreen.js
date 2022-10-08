import {parseRequestUrl} from '../utils'; 
import { getProduct } from '../api';
import Rating from '../components/rating';  

const productScreen = {
  after_render: () =>{
            const request = parseRequestUrl();
            // console.log(request.id);
            document.getElementById('add-button').addEventListener('click', () => {
              document.location.hash = `/cart/${request.id}`;
            });           
     },

    render: async () => {
      
        const request = parseRequestUrl(); 
        const product = await getProduct(request.id);
          if (product.error){
              return `<div>${product.error}</div>`;
          };
       return `
              <div class="content">
                    <div class="back-to-result">
                      <a href="/#/">Back to result</a>
                  </div>
              <div class="details">
                    <div class="details-image">
                      <img src="${product.image}" alt="${product.name}"/>
                    </div>
                <div class="details-info">
                  <ul>
                    <li>
                      <h1>${product.name}</h1>
                    </li>
                    <li>
                    ${Rating.render({
                        value: product.rating,
                        text: `${product.numReviews} reviews`
                    })}
                    </li>
                    <li>
                        price: <strong>$${product.price}</strong>
                      </li>
                      <li>
                      Description: 
                      <div>
                          ${product.Description}
                      </div>
                      </li> 
                        <li>
                        Category: 
                        <strong>
                            ${product.category}
                        </strong>
                        </li>              
                    </ul>
                </div>
              <div class="details-action">
                      <ul>
                        <li>
                        price: $${product.price}
                        </li>
                        <li>
                        Status: 
                            ${product.countInStock > 0 
                              ? `<span class="success">In Stock</span>`
                              : `<span class="error">Unavailable</span>`
                            }
                        </li>
                          <li>
                        <button id="add-button" type='submit' class="fw primary"> Add to cart</button>
                        </li>
                      </ul>
                  </div>
              </div>
            </div>
      `; 
    },
};

export default productScreen;      