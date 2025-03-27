# Module 1: Product Catalog Component

In this module, you'll build a product catalog component that displays products from our mock data and allows users to filter and sort them.

## Requirements

1. Create a ProductCatalog.vue component with the following features:

   - Display a grid of product cards
   - Each card should show the product image, name, price, and rating
   - Implement filtering by category
   - Implement sorting by price (low to high, high to low) and by rating
   - Add a search bar to filter products by name (case-insensitive)

2. Create the following components:

   - ProductCard.vue - A reusable card component to display a single product
   - ProductFilter.vue - A component for category filtering and search
   - ProductSort.vue - A component for sort options

3. Create a store using Pinia to manage the product state

## Detailed Instructions

### Step 1: Create the Pinia Store

Create a store called `productStore.js` in the `stores` directory with the following features:

- Import the mock product data
- Define state for products, filteredProducts, selectedCategory, searchQuery, and sortOption
- Implement actions for:
  - Setting the category filter
  - Setting the search query
  - Setting the sort option
- Implement getters for:
  - Getting filtered and sorted products

### Step 2: Create the ProductCard Component

Create a ProductCard.vue component that:

- Accepts a product prop
- Displays the product's first image, name, price (formatted as currency), and rating
- Has a "Add to Cart" button (functionality will be implemented in a future module)

### Step 3: Create the ProductFilter Component

Create a ProductFilter.vue component that:

- Displays category options as buttons or a dropdown
- Includes an "All Categories" option that is selected by default
- Includes a search input that filters products by name
- Emits events when the user changes filters

### Step 4: Create the ProductSort Component

Create a ProductSort.vue component that:

- Provides options to sort by:
  - Price: Low to High
  - Price: High to Low
  - Rating: High to Low
- Emits events when the user changes the sort option

### Step 5: Create the ProductCatalog Component

Create a ProductCatalog.vue component that:

- Uses the Pinia store to access product data
- Displays the ProductFilter and ProductSort components
- Displays a grid of ProductCard components
- Shows a "No products found" message when the filtered list is empty

## Testing Requirements

Your implementation should pass all the tests in the `tests/module1` directory. The tests verify that:

1. The ProductCard component correctly displays product information
2. The ProductFilter component correctly emits filter events
3. The ProductSort component correctly emits sort events
4. The ProductCatalog component correctly displays filtered and sorted products
5. The Pinia store correctly manages the product state

## Styling Requirements

Apply CSS to make the component visually appealing:

- Use a responsive grid layout for the products (consider using CSS Grid or Flexbox)
- Style the product cards with consistent padding, borders, and shadows
- Make the filter and sort components intuitive and easy to use
- Ensure the design is responsive and works on mobile devices

Good luck! Once you've completed this module, run the tests to ensure your implementation meets all requirements.
