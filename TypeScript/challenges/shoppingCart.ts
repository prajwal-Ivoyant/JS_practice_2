// Real-World Scenarios

// Create type definitions for a shopping cart system with products, discounts, and checkout
// Build a type-safe state management system (mini Redux-style)
// Implement a typed query builder for database operations

//////////////////////////////////////////////////////////

// Challenge: Products, discounts, and checkout











interface Product {
    id: string;
    name: string;
    price: number;
}

interface CartItem {
    product: Product;
    quantity: number;
}

type DiscountType = 'percentage' | 'fixed';

interface Discount {
    type: DiscountType;
    value: number;
}

class ShoppingCart {
    private items: CartItem[] = [];

    addItem(product: Product, quantity: number) {
        const existing = this.items.find(item => item.product.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    calculateTotal(discount?: Discount): number {
        const subtotal = this.items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );

        if (!discount) return subtotal;

        return discount.type === 'percentage'
            ? subtotal * (1 - discount.value / 100)
            : subtotal - discount.value;
    }
}