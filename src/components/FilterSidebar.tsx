import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface FilterState {
  categories: string[];
  scents: string[];
  priceRange: [number, number];
  inStock: boolean;
  featured: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const categories = ["Luxury", "Seasonal", "Essential", "Special Edition"];
const scents = ["Vanilla", "Lavender", "Sandalwood", "Cedar", "Rose", "Citrus", "Eucalyptus", "Amber"];

export const FilterSidebar = ({ filters, onFiltersChange, onClearFilters }: FilterSidebarProps) => {
  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleScentChange = (scent: string, checked: boolean) => {
    const newScents = checked
      ? [...filters.scents, scent]
      : filters.scents.filter(s => s !== scent);
    
    onFiltersChange({ ...filters, scents: newScents });
  };

  const hasActiveFilters = 
    filters.categories.length > 0 || 
    filters.scents.length > 0 || 
    filters.priceRange[0] > 100|| 
    filters.priceRange[1] < 1000 ||
    filters.inStock ||
    filters.featured;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => 
              onFiltersChange({ ...filters, priceRange: value as [number, number] })
            }
            max={1000}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹{filters.priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => 
                  handleCategoryChange(category, checked as boolean)
                }
              />
              <Label 
                htmlFor={category} 
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Scent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {scents.map((scent) => (
            <div key={scent} className="flex items-center space-x-2">
              <Checkbox
                id={scent}
                checked={filters.scents.includes(scent)}
                onCheckedChange={(checked) => 
                  handleScentChange(scent, checked as boolean)
                }
              />
              <Label 
                htmlFor={scent} 
                className="text-sm font-normal cursor-pointer"
              >
                {scent}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={filters.inStock}
              onCheckedChange={(checked) => 
                onFiltersChange({ ...filters, inStock: checked as boolean })
              }
            />
            <Label htmlFor="inStock" className="text-sm font-normal cursor-pointer">
              In Stock Only
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={filters.featured}
              onCheckedChange={(checked) => 
                onFiltersChange({ ...filters, featured: checked as boolean })
              }
            />
            <Label htmlFor="featured" className="text-sm font-normal cursor-pointer">
              Featured Items
            </Label>
          </div>
        </CardContent>
      </Card>

      {hasActiveFilters && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Active Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleCategoryChange(category, false)}
                >
                  {category} <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
              {filters.scents.map((scent) => (
                <Badge 
                  key={scent} 
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleScentChange(scent, false)}
                >
                  {scent} <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};