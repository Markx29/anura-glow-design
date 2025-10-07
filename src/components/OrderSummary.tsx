

interface OrderItem {
  id: string;
  name: string;
  scent: string;
  size: string;
  quantity: number;
  price: number;
}

const OrderSummary = () => {
  const orderItem: OrderItem = {
    id: "1",
    name: "Lumière Signature",
    scent: "Amber & Sandalwood",
    size: "8 oz",
    quantity: 1,
    price: 480,
  };

  const subtotal = orderItem.price * orderItem.quantity;
  const shipping = 8.0;
  const total = subtotal + shipping;

  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-8 animate-fade-in">
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
        Order Summary
      </h2>

      <div className="space-y-4 mb-6">
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
            <img
              src={candleImage}
              alt={orderItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground mb-1">
              {orderItem.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              {orderItem.scent}
            </p>
            <p className="text-xs text-muted-foreground">
              Size: {orderItem.size} • Qty: {orderItem.quantity}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium text-foreground">
              ${orderItem.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-foreground">${shipping.toFixed(2)}</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-2xl font-serif font-semibold text-foreground">
          ${total.toFixed(2)}
        </span>
      </div>

      <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
        <p className="text-xs text-center text-muted-foreground">
          Free shipping on orders over $75
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
