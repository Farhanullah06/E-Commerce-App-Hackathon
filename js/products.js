// Products data and rendering based on the Figma design images

// Product database
const products = [
    {
        id: 1,
        name: "Women Textured Handheld Bag",
        brand: "Allen Solly",
        category: "Bags",
        price: 80.00,
        originalPrice: 100.00,
        rating: 4.5,
        stock: 15,
        image: 'image/OIP.jpg',
        description: 'Beautiful textured handheld bag for women. Perfect for parties and casual outings.',
        colors: ['#8B4513', '#000000', '#A52A2A'],
        sizes: ['S', 'M', 'L']
    },
    {
        id: 2,
        name: "Polo Collar T-Shirt",
        brand: "Louis Philippe Sport",
        category: "Men",
        price: 50.00,
        originalPrice: 55.00,
        rating: 4.2,
        stock: 20,
        image: 'image/OIP (1).jpg',
        description: 'Premium quality polo collar t-shirt for men. Comfortable and stylish.',
        colors: ['#0000FF', '#FF0000', '#000000'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 3,
        name: "Men adi-dash Running Shoes",
        brand: "Adidas",
        category: "Shoes",
        price: 60.00,
        originalPrice: 75.00,
        rating: 4.7,
        stock: 12,
        image: 'image/OIP (2).jpg',
        description: 'High-performance running shoes for men. Lightweight and durable.',
        colors: ['#000000', '#FFFFFF', '#FF0000'],
        sizes: ['7', '8', '9', '10', '11']
    },
    {
        id: 4,
        name: "Printed Cotton T-Shirt",
        brand: "Roadstar",
        category: "Men",
        price: 38.00,
        originalPrice: 40.00,
        rating: 4.0,
        stock: 25,
        image: 'image/OIP.webp',
        description: 'Comfortable printed cotton t-shirt for casual wear.',
        colors: ['#FF0000', '#0000FF', '#008000'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: "Tailored Cotton Casual Shirt",
        brand: "US Polo",
        category: "Men",
        price: 40.00,
        originalPrice: 50.00,
        rating: 4.3,
        stock: 18,
        image: 'image/s7-1505347_alternate10.avif',
        description: 'Stylish tailored cotton casual shirt for men.',
        colors: ['#0000FF', '#FFFFFF', '#000000'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 6,
        name: "Women Sandals",
        brand: "Zyla",
        category: "Shoes",
        price: 35.00,
        originalPrice: 40.00,
        rating: 4.1,
        stock: 22,
        image: 'image/R.jpg',
        description: 'Elegant and comfortable sandals for women.',
        colors: ['#FFC0CB', '#000000', '#8B4513'],
        sizes: ['6', '7', '8', '9']
    },
    {
        id: 7,
        name: "Girls Pink Moana Printed Dress",
        brand: "YK Disney",
        category: "Kids",
        price: 80.00,
        originalPrice: 100.00,
        rating: 4.8,
        stock: 10,
        image: 'image/pink.webp',
        description: 'Beautiful Moana printed dress for girls.',
        colors: ['#FF69B4', '#FFFFFF'],
        sizes: ['2T', '3T', '4T', '5T']
    },
    {
        id: 8,
        name: "Casual Blue Jeans",
        brand: "Arrow",
        category: "Men",
        price: 50.00,
        originalPrice: 60.00,
        rating: 4.4,
        stock: 30,
        image: 'image/blue.webp',
        description: 'Comfortable casual blue jeans for men.',
        colors: ['#0000FF', '#000000'],
        sizes: ['30', '32', '34', '36']
    },
    {
        id: 9,
        name: "Floral Embroidered Maxi Dress",
        brand: "Trendyol",
        category: "Women",
        price: 35.00,
        originalPrice: 45.00,
        rating: 4.6,
        stock: 15,
        image: 'image/gray.webp',
        description: 'Beautiful floral embroidered maxi dress for women.',
        colors: ['#FF69B4', '#800080'],
        sizes: ['S', 'M', 'L']
    },
    {
        id: 10,
        name: "Brown Leather Jacket",
        brand: "Allen Solly",
        category: "Men",
        price: 60.00,
        originalPrice: 70.00,
        rating: 4.5,
        stock: 8,
        image: 'image/gary.webp',
        description: 'Premium brown leather jacket for men.',
        colors: ['#8B4513', '#000000'],
        sizes: ['M', 'L', 'XL']
    },
    {
        id: 11,
        name: "Casual Shoe for Men",
        brand: "US Polo",
        category: "Shoes",
        price: 40.00,
        originalPrice: 50.00,
        rating: 4.2,
        stock: 20,
        image: 'image/th.jpg',
        description: 'Stylish casual shoes for men.',
        colors: ['#FFFFFF', '#000000', '#8B4513'],
        sizes: ['8', '9', '10', '11']
    },
    {
        id: 12,
        name: "Leather Hand Purse",
        brand: "Gucci",
        category: "Bags",
        price: 40.00,
        originalPrice: 60.00,
        rating: 4.7,
        stock: 5,
        image: 'image/th (1).jpg',
        description: 'Luxury leather hand purse for women.',
        colors: ['#000000', '#8B4513'],
        sizes: ['S', 'M']
    },
    {
        id: 13,
        name: "Red Printed T-Shirt",
        brand: "YK Disney",
        category: "Kids",
        price: 30.00,
        originalPrice: 35.00,
        rating: 4.3,
        stock: 25,
        image: 'image/red.webp',
        description: 'Fun red printed t-shirt for kids.',
        colors: ['#FF0000', '#0000FF'],
        sizes: ['S', 'M', 'L']
    },
    {
        id: 14,
        name: "Printed Blazer for Men",
        brand: "Roadstar",
        category: "Men",
        price: 60.00,
        originalPrice: 70.00,
        rating: 4.4,
        stock: 10,
        image: 'image/printed.webp',
        description: 'Stylish printed blazer for formal occasions.',
        colors: ['#000000', '#0000FF'],
        sizes: ['M', 'L', 'XL']
    },
    {
        id: 15,
        name: "Leather Hand Purse",
        brand: "Flora",
        category: "Bags",
        price: 35.00,
        originalPrice: 45.00,
        rating: 4.1,
        stock: 12,
        image: 'image/lather.webp',
        description: 'Elegant leather hand purse for daily use.',
        colors: ['#8B4513', '#000000', '#FF0000'],
        sizes: ['S', 'M']
    },
    {
        id: 16,
        name: "Women Textured Handheld Bag",
        brand: "Allen Solly",
        category: "Bags",
        price: 80.00,
        originalPrice: 100.00,
        rating: 4.5,
        stock: 7,
        image: 'image/yellow.webp',
        description: 'Another variant of our popular textured handheld bag.',
        colors: ['#000000', '#8B4513'],
        sizes: ['S', 'M', 'L']
    }
];

// Get unique categories
function getCategories() {
    const categories = ['All', ...new Set(products.map(p => p.category))];
    return categories;
}

// Render products grid
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found</p>';
        return;
    }

    let html = '';
    for (let i = 0; i < productsToRender.length; i++) {
        const product = productsToRender[i];
        const discount = product.originalPrice ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        html += `
            <div class="product-card" data-id="${product.id}" onclick="goToDetail(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400?text=No+Image'">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">
                        ${product.name}
                    </div>
                    <div class="product-category">${product.category}</div>
                    <div class="product-price">
                        $${product.price.toFixed(2)}
                        <span style="text-decoration: line-through; color: #999;"></span>
                    </div>
                    <div class="product-rating">
                        ${generateRating(product.rating)} (${product.rating})
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="add-to-wishlist-btn" onclick="event.stopPropagation(); addToWishlist(${product.id})">
                            ♡
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    productsGrid.innerHTML = html;
}

// Make sure generateRating function is available
if (typeof generateRating === 'undefined') {
    window.generateRating = function(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) starsHTML += '★';
        if (halfStar) starsHTML += '½';
        for (let i = 0; i < emptyStars; i++) starsHTML += '☆';
        return starsHTML;
    };
}

// helper for card clicks
function goToDetail(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

// Export products for use in other files
window.products = products;
window.getCategories = getCategories;
window.renderProducts = renderProducts;
window.goToDetail = goToDetail;
