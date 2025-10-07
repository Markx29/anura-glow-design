import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  scent: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  burnTime: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: true;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
    interface ProductCardProps {
      product: Product;
      onAddToCart: (product: Product) => void;
      onAddToWishlist: (product: Product) => void;
      isInCart: boolean;
      isInWishlist: boolean;
    }
  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-muted/50 card-hover glow-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {product.featured && (
          <Badge className="absolute top-3 left-3 z-10 bg-luxury text-luxury-foreground">
            Featured
          </Badge>
        )}
        
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground">
            -{discountPercentage}%
          </Badge>
        )}

        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-12 right-3 z-10 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${isLiked ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </Button>

        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            {!product.inStock && (
              <Badge variant="destructive" className="text-xs">
                Out of Stock
              </Badge>
            )}
          </div>
          
          <h3 className="font-semibold text-lg leading-tight line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground">
            {product.scent} • {product.burnTime}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-luxury text-luxury' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};