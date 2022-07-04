export default class Card {
    constructor(someProduct) {
      this.state = someProduct;
      this.myRender();
  }
  
  getTemplate () {
      return `
      <div class="product">
      <img src="${this.state.images[0]}" class="product-image">
  <div class="rating">
  <div class="mark">${this.state.rating}
    <svg class="label" width="14" height="13" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 17.5V11.375H9.625L6.81012 14.1925C7.29091 14.6841 7.86482 15.0751 8.49836 15.3425C9.13189 15.6099 9.81234 15.7484 10.5 15.75C11.5843 15.7484 12.6416 15.4111 13.5265 14.7844C14.4114 14.1577 15.0805 13.2723 15.442 12.25H15.4577C15.5575 11.9656 15.6336 11.6725 15.6844 11.375H17.4449C17.2318 13.0666 16.4086 14.6222 15.1299 15.7499C13.8512 16.8777 12.2049 17.5 10.5 17.5H10.4912C9.57234 17.5028 8.66201 17.3232 7.81296 16.9717C6.96391 16.6203 6.19301 16.1039 5.54487 15.4525L3.5 17.5ZM5.31475 9.625H3.55425C3.76729 7.93404 4.58994 6.37889 5.86789 5.25123C7.14583 4.12358 8.79129 3.50091 10.4956 3.5H10.5C11.4191 3.49709 12.3296 3.67657 13.1788 4.02803C14.028 4.37949 14.799 4.89595 15.4472 5.5475L17.5 3.5V9.625H11.375L14.1942 6.8075C13.713 6.3153 13.1384 5.92402 12.504 5.65659C11.8697 5.38916 11.1884 5.25093 10.5 5.25C9.41565 5.2516 8.3584 5.58893 7.47349 6.21563C6.58859 6.84233 5.91945 7.72767 5.558 8.75H5.54225C5.44162 9.03438 5.3655 9.3275 5.31562 9.625H5.31475Z" />
    </svg>
      </div>
  <div class="price">${this.state.price}</div>
  </div>
  <div class="characteristics">${this.state.title}</div>
  <div class="product-category">${this.state.category}</div>
  <div class="add-product">Add to cart</div>
    </div>  `
  }
  
  update(data = {}) {
  //I need to render new data
  this.state = data;
  this.componentElement.innerHTML = this.getTemplate();
  }
  
  myRender() {
      const element = document.createElement('div');
  
      element.innerHTML = this.getTemplate();
      this.element = element;
  }
  }
  