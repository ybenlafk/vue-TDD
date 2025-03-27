# Module 2: Shopping Cart Component

In this module, you'll build a shopping cart system that allows users to add products, update quantities, and remove items from their cart.

## Requirements

1. Create a ShoppingCart.vue component with the following features:

   - Display a list of items in the cart
   - Show item name, price, quantity, and total for each item
   - Calculate and display cart subtotal, tax (at 8%), and grand total
   - Allow updating item quantities
   - Allow removing items from the cart
   - Show an empty cart message when there are no items

2. Create the following components:

   - CartItem.vue - A reusable component to display a single cart item
   - CartSummary.vue - A component to display the cart totals

3. Create a store using Pinia to manage the cart state

## Detailed Instructions

### Step 1: Create the Pinia Store for Cart

Create a store called `cartStore.js` in the `stores` directory with the following features:

- Define state for cart items (array of objects with product and quantity)
- Implement actions for:
  - Adding a product to cart
  - Removing a product from cart
  - Updating the quantity of a product in cart
  - Clearing the entire cart
- Implement getters for:
  - Total number of items in cart
  - Subtotal (sum of price \* quantity for all items)
  - Tax amount (8% of subtotal)
  - Grand total (subtotal + tax)

### Step 2: Create the CartItem Component

Create a CartItem.vue component that:

- Accepts a cart item prop (containing product and quantity)
- Displays the product image, name, price, and quantity
- Provides a quantity input that allows updating the quantity
- Displays the item total (price \* quantity)
- Includes a remove button to remove the item from the cart
- Emits events when the user updates quantity or removes the item

### Step 3: Create the CartSummary Component

Create a CartSummary.vue component that:

- Calculates and displays:
  - Subtotal
  - Tax (8% of subtotal)
  - Grand total (subtotal + tax)
- Formats all monetary values with dollar signs and two decimal places
- Includes a "Checkout" button (functionality will be implemented in a future module)

### Step 4: Create the ShoppingCart Component

Create a ShoppingCart.vue component that:

- Uses the Pinia store to access cart data
- Displays a list of CartItem components for each item in the cart
- Shows the CartSummary component
- Displays an "Empty Cart" message and a "Continue Shopping" button when there are no items
- Handles events from CartItem components to update the cart store
- Shows the number of items in the cart (e.g., "Your Cart (3 items)")

## Testing Requirements

Your implementation should pass all the tests in the `tests/module2` directory. The tests verify that:

1. The CartItem component correctly displays item information and emits events
2. The CartSummary component correctly calculates and displays the totals
3. The ShoppingCart component correctly displays cart items and totals
4. The Pinia store correctly manages the cart state
5. Adding, removing, and updating items works correctly

## Styling Requirements

Apply CSS to make the component visually appealing:

- Use a clean, organized layout for the cart
- Style the quantity inputs and remove buttons to be intuitive
- Use appropriate spacing and borders to separate cart items
- Use color and typography to highlight important information (e.g., totals)
- Make the cart responsive for different screen sizes

## Integration with Module 1

Once you've implemented the shopping cart functionality, integrate it with the Product Catalog from Module 1:

- Add functionality to the "Add to Cart" button in the ProductCard component
- Update the App component to show both the ProductCatalog and ShoppingCart components
- Add a cart icon in the header that shows the number of items in the cart

Good luck! Once you've completed this module, run the tests to ensure your implementation meets all requirements.
