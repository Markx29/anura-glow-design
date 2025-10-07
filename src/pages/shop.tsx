import { useState, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProductCard, Product } from "@/components/ProductCard";
import { FilterSidebar, FilterState } from "@/components/FilterSidebar";
import { SortSelector, SortOption } from "@/components/SortSelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List } from "lucide-react";
import { products } from "@/data/products";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    scents: [],
    priceRange: [0, 2000], // Adjusted for prices in cents
    inStock: false,
    featured: false,
  });
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart;
      }
      return [...prevCart, product];
    });
    console.log(`${product.name} added to cart`);
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const existingProduct = prevWishlist.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
    console.log(`${product.name} added to wishlist`);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.scent.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      if (filters.scents.length > 0 && !filters.scents.includes(product.scent)) {
        return false;
      }

      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      if (filters.inStock && !product.inStock) {
        return false;
      }

      if (filters.featured && !product.featured) {
        return false;
      }

      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating - a.rating;
        case "featured":
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchQuery, sortBy, filters]);

  const clearFilters = () => {
    setFilters({
      categories: [],
      scents: [],
      priceRange: [0, 2000],
      inStock: false,
      featured: false,
    });
    setSearchQuery("");
  };

  useScrollAnimation();

  return (
    <div className="pt-16">
      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          <aside className={`w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <FilterSidebar filters={filters} onFiltersChange={setFilters} onClearFilters={clearFilters} />
          </aside>

          <section className="flex-1 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Our Collection</h2>
                <p className="text-muted-foreground">{filteredAndSortedProducts.length} products found</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search candles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>

                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>

                  <SortSelector value={sortBy} onChange={setSortBy} />
                </div>
              </div>
            </div>

            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
              }`}
            >
              {filteredAndSortedProducts.map((product) => (
                <div key={product.id} className="animate-fade-in">
                  <ProductCard
                    product={product}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                  />
                </div>
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear all filters
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Shop;