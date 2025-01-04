const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, color, amount, product } = action.payload;
      const productId = id + color;

      // Ensure state.cart is treated as an array
      const existingProduct = (state.cart || []).find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        const updatedCart = (state.cart || []).map((item) => {
          if (item.id === productId) {
            const newAmount = Math.min(item.amount + amount, item.max);
            return { ...item, amount: newAmount };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        const newProduct = {
          id: productId,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...(state.cart || []), newProduct] };
      }
    }

    case "SET_DECREMENT": {
      const updatedCart = (state.cart || []).map((item) => {
        if (item.id === action.payload) {
          const newAmount = Math.max(item.amount - 1, 1);
          return { ...item, amount: newAmount };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }

    case "SET_INCREMENT": {
      const updatedCart = (state.cart || []).map((item) => {
        if (item.id === action.payload) {
          const newAmount = Math.min(item.amount + 1, item.max);
          return { ...item, amount: newAmount };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }

    case "REMOVE_ITEM": {
      const updatedCart = (state.cart || []).filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCart };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "CART_ITEM_PRICE_TOTAL": {
      const { total_item, total_price } = (state.cart || []).reduce(
        (accum, item) => {
          accum.total_item += item.amount;
          accum.total_price += item.price * item.amount;
          return accum;
        },
        { total_item: 0, total_price: 0 }
      );
      return { ...state, total_item, total_price };
    }

    default:
      return state;
  }
};

export default cartReducer;
