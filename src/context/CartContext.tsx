import React, { useState, createContext, useContext } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Heart, Lock } from 'lucide-react';

// Cart Context for global state management
const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Sample Products for Demo
const sampleProducts = [
  {
    id: 1,
    name: 'Autumn Harvest',
    price: 42.00,
    image: '🕯️',
    scent: 'Warm spices & apple',
    size: 'Medium (8oz)',
    burnTime: '50 hours'
  },
  {
    id: 2,
    name: 'Lavender Dreams',
    price: 58.00,
    image: '🕯️',
    scent: 'French lavender',
    size: 'Large (12oz)',
    burnTime: '75 hours'
  },
  {
    id: 3,
    name: 'Citrus Sunrise',
    price: 24.00,
    image: '🕯️',
    scent: 'Orange & bergamot',
    size: 'Travel (4oz)',
    burnTime: '25 hours'
  },
  {
    id: 4,
    name: 'Vanilla Bean',
    price: 45.00,
    image: '🕯️',
    scent: 'Madagascar vanilla',
    size: 'Medium (8oz)',
    burnTime: '50 hours'
  }
];

// Product Card Component for Shop
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 h-56 flex items-center justify-center text-6xl">
        {product.image}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map(star => (
            <svg key={star} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
          <span className="text-xs text-gray-600 ml-1">(124)</span>
        </div>
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.scent}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">{product.size}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded-lg font-semibold transition-all ${
            added
              ? 'bg-green-600 text-white'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {added ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

// Shop Page Component
const ShopPage = ({ onNavigate }) => {
  const { getCartCount } = useCart();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">LUMIÈRE</h1>
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Shop Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Collection</h2>
          <p className="text-gray-600">Handcrafted candles for every mood</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Cart Item Component
const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 border border-gray-200 rounded-lg bg-white">
      <div className="w-24 h-24 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
        {item.image}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{item.scent}</p>
        <p className="text-xs text-gray-500 mb-2">{item.size} • {item.burnTime}</p>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 hover:bg-gray-100 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-1 border-x border-gray-300 font-semibold">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 hover:bg-gray-100 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="text-right">
        <div className="font-bold text-xl mb-1">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <div className="text-xs text-gray-500">
          ${item.price.toFixed(2)} each
        </div>
      </div>
    </div>
  );
};

// Cart Page Component
const CartPage = ({ onNavigate }) => {
  const { cartItems, getCartTotal, clearCart, getCartCount } = useCart();
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 8.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => onNavigate('shop')}
                className="flex items-center gap-2 hover:underline"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </button>
              <h1 className="text-2xl font-bold">LUMIÈRE</h1>
              <div className="w-24"></div>
            </div>
          </div>
        </header>

        {/* Empty Cart */}
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-6">
              <ShoppingBag className="w-24 h-24 mx-auto text-gray-300" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some beautiful candles to get started!</p>
            <button
              onClick={() => onNavigate('shop')}
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Shop Now
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('shop')}
              className="flex items-center gap-2 hover:underline"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </button>
            <h1 className="text-2xl font-bold">LUMIÈRE</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Cart Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Shopping Cart</h2>
            <p className="text-gray-600">{getCartCount()} items</p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-red-600 hover:underline"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}

            {/* Recommended Products */}
            <div className="mt-8 p-6 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5" />
                <h3 className="font-bold text-lg">You might also like</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {sampleProducts.slice(0, 3).map(product => (
                  <div key={product.id} className="text-center">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 h-24 rounded-lg flex items-center justify-center text-3xl mb-2">
                      {product.image}
                    </div>
                    <div className="text-xs font-semibold truncate">{product.name}</div>
                    <div className="text-xs text-gray-600">${product.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-lg p-6 bg-white sticky top-4">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({getCartCount()} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-semibold">FREE</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
                {subtotal < 50 && subtotal > 0 && (
                  <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => onNavigate('checkout')}
                className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <Lock className="w-5 h-5" />
                Proceed to Checkout
              </button>

              <div className="space-y-2 text-center text-xs text-gray-600">
                <div className="flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>Secure checkout</span>
                </div>
                <div>Free returns within 60 days</div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🔒</div>
                    <div className="text-xs">Secure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🚚</div>
                    <div className="text-xs">Fast Ship</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">♻️</div>
                    <div className="text-xs">Eco-Friendly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="text-xs">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('shop');

  return (
    <CartProvider>
      {currentPage === 'shop' && <ShopPage onNavigate={setCurrentPage} />}
      {currentPage === 'cart' && <CartPage onNavigate={setCurrentPage} />}
      {currentPage === 'checkout' && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Checkout Page</h2>
            <p className="text-gray-600 mb-6">Checkout functionality would go here</p>
            <button
              onClick={() => setCurrentPage('cart')}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
            >
              Back to Cart
            </button>
          </div>
        </div>
      )}
    </CartProvider>
  );
};

export default App;