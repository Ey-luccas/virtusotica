// Products Data
const products = [
    {
        id: 1,
        name: "Swarovski Transparente",
        category: "grau",
        description: "Óculos de grau Swarovski com armação transparente elegante. Design sofisticado e confortável para o dia a dia.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Redondo",
        material: "Acetato",
        color: "Transparente",
        size: "Médio",
        price: "R$ 899,90"
    },
    {
        id: 2,
        name: "Ray-Ban Round Preto",
        category: "grau",
        description: "Óculos de grau Ray-Ban redondo em preto. Clássico atemporal com qualidade premium.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Redondo",
        material: "Acetato",
        color: "Preto",
        size: "Médio",
        price: "R$ 649,90"
    },
    {
        id: 3,
        name: "Dispar Dourado",
        category: "grau",
        description: "Armação Dispar em dourado elegante. Perfeito para quem busca sofisticação e estilo.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Retangular",
        material: "Metal",
        color: "Dourado",
        size: "Grande",
        price: "R$ 399,90"
    },
    {
        id: 4,
        name: "Dispar Preto",
        category: "grau",
        description: "Armação Dispar preta clássica. Versátil e moderna para qualquer ocasião.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Retangular",
        material: "Acetato",
        color: "Preto",
        size: "Grande",
        price: "R$ 349,90"
    },
    {
        id: 5,
        name: "Polaroid Feminino Preto",
        category: "grau",
        description: "Óculos de grau Polaroid feminino em preto. Design moderno e elegante para a mulher contemporânea.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Retangular",
        material: "Acetato",
        color: "Preto",
        size: "Médio",
        price: "R$ 459,90"
    },
    {
        id: 6,
        name: "Ray-Ban Masculino",
        category: "grau",
        description: "Óculos de grau Ray-Ban masculino. Qualidade e estilo para o homem moderno.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Retangular",
        material: "Metal",
        color: "Preto",
        size: "Grande",
        price: "R$ 599,90"
    },
    {
        id: 7,
        name: "Jean Pierre Feminino",
        category: "grau",
        description: "Óculos de grau Jean Pierre em metal feminino. Design delicado e sofisticado.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Cat Eye",
        material: "Metal",
        color: "Prateado",
        size: "Médio",
        price: "R$ 429,90"
    },
    {
        id: 8,
        name: "Hexagonal Flexível",
        category: "grau",
        description: "Óculos hexagonal flexível em preto. Design moderno com máxima resistência e conforto.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Hexagonal",
        material: "Elástico",
        color: "Preto",
        size: "Médio",
        price: "R$ 379,90"
    },
    {
        id: 9,
        name: "Modelo Exclusivo 1",
        category: "grau",
        description: "Óculos de grau com design exclusivo. Elegante e moderno para destacar seu estilo único.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Redondo",
        material: "Acetato",
        color: "Transparente",
        size: "Médio",
        price: "R$ 549,90"
    },
    {
        id: 10,
        name: "Modelo Exclusivo 2",
        category: "grau",
        description: "Óculos de grau premium com acabamento refinado. Perfeito para quem busca qualidade e sofisticação.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Retangular",
        material: "Acetato",
        color: "Preto",
        size: "Grande",
        price: "R$ 499,90"
    },
    {
        id: 11,
        name: "Modelo Premium",
        category: "grau",
        description: "Óculos de grau premium com design diferenciado. Conforto e estilo em um só produto.",
        image: "/assets/products/oculos_de_sol_polarizado_uv400_carapaca_763_2_7ceb95a574e1678d059b3df41d533db0.jpg",
        frameType: "Cat Eye",
        material: "Acetato",
        color: "Tortoiseshell",
        size: "Médio",
        price: "R$ 579,90"
    }
];

// Category names mapping
const categoryNames = {
    "all": "Todos",
    "grau": "Óculos de Grau",
    "sol": "Óculos de Sol",
    "esportivo": "Esportivo",
    "infantil": "Infantil"
};

// Like System Functions (defined early)
function getLikedProducts() {
    const liked = localStorage.getItem('likedProducts');
    return liked ? JSON.parse(liked) : [];
}

function getProductLikes(productId) {
    const likes = localStorage.getItem('productLikes');
    const likesObj = likes ? JSON.parse(likes) : {};
    return likesObj[productId] || 0;
}

function toggleLike(productId) {
    let likedProducts = getLikedProducts();
    let likes = localStorage.getItem('productLikes');
    let likesObj = likes ? JSON.parse(likes) : {};
    
    if (likedProducts.includes(productId)) {
        // Unlike
        likedProducts = likedProducts.filter(id => id !== productId);
        likesObj[productId] = Math.max(0, (likesObj[productId] || 0) - 1);
    } else {
        // Like
        likedProducts.push(productId);
        likesObj[productId] = (likesObj[productId] || 0) + 1;
    }
    
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    localStorage.setItem('productLikes', JSON.stringify(likesObj));
    
    // Re-render products to update like status
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('categoria') || 'all';
    const mostLiked = urlParams.get('mostLiked');
    
    if (mostLiked === 'true') {
        showMostLikedProducts();
    } else {
        renderProducts(category);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('categoria') || 'all';
    const mostLiked = urlParams.get('mostLiked');
    
    // Set active filter button
    if (category !== 'all' && !mostLiked) {
        const filterBtn = document.querySelector(`[data-category="${category}"]`);
        if (filterBtn) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');
        }
    }
    
    // Check if showing most liked
    if (mostLiked === 'true') {
        showMostLikedProducts();
    } else {
        renderProducts(category);
    }
    setupFilters();
    setupModal();
});

// Render Products
function renderProducts(category) {
    const grid = document.getElementById('productsGrid');
    if (!grid) {
        console.error('Grid de produtos não encontrado!');
        return;
    }
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--primary-grey);">Nenhum produto encontrado nesta categoria.</p>';
        return;
    }

    const likedProducts = getLikedProducts();
    
    grid.innerHTML = filteredProducts.map(product => {
        const isLiked = likedProducts.includes(product.id);
        const likes = getProductLikes(product.id);
        return `
        <div class="product-item" data-id="${product.id}">
            <div class="product-image-container">
                ${product.category === 'sol' ? '<span class="product-badge">Sol</span>' : ''}
                ${product.category === 'esportivo' ? '<span class="product-badge">Esportivo</span>' : ''}
                ${product.category === 'infantil' ? '<span class="product-badge">Infantil</span>' : ''}
                <button class="product-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(${product.id})" title="${isLiked ? 'Descurtir' : 'Curtir'}">
                    <i class="fas fa-heart"></i>
                    <span class="like-count">${likes}</span>
                </button>
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}';">
            </div>
            <div class="product-info">
                <div class="product-category">${categoryNames[product.category]}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${product.price ? `<div class="product-price">${product.price}</div>` : ''}
                <div class="product-actions">
                    <button class="btn-view" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i> Ver Detalhes
                    </button>
                    <button class="btn-buy" onclick="buyProduct(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Comprar
                    </button>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// Setup Filters
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn:not(.filter-btn-liked)');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and render products
            const category = this.getAttribute('data-category');
            // Remove mostLiked parameter from URL
            const url = new URL(window.location);
            url.searchParams.delete('mostLiked');
            url.searchParams.set('categoria', category);
            window.history.pushState({}, '', url);
            renderProducts(category);
        });
    });
    
    // Handle back button
    window.addEventListener('popstate', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('categoria') || 'all';
        const mostLiked = urlParams.get('mostLiked');
        
        if (mostLiked === 'true') {
            showMostLikedProducts();
        } else {
            renderProducts(category);
        }
    });
}

// View Product Details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x450?text=${encodeURIComponent(product.name)}';">
        </div>
        <div class="modal-product-info">
            <h2>${product.name}</h2>
            <div class="modal-product-category">${categoryNames[product.category]}</div>
            ${product.price ? `<div class="modal-product-price">${product.price}</div>` : ''}
            <p class="modal-product-description">${product.description}</p>
            <div class="modal-product-details">
                <h3>Detalhes do Produto</h3>
                <ul>
                    <li><strong>Tipo de Armação:</strong> ${product.frameType}</li>
                    <li><strong>Material:</strong> ${product.material}</li>
                    <li><strong>Cor:</strong> ${product.color}</li>
                    <li><strong>Tamanho:</strong> ${product.size}</li>
                    ${product.lensType ? `<li><strong>Tipo de Lente:</strong> ${product.lensType}</li>` : ''}
                </ul>
            </div>
            <div class="modal-actions">
                <button class="btn-modal-buy" onclick="buyProduct(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Fazer Pedido
                </button>
                <a href="${getWhatsAppLink(product)}" class="btn-modal-whatsapp" target="_blank">
                    <i class="fab fa-whatsapp"></i> Falar no WhatsApp
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Buy Product (redirects to WhatsApp)
function buyProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    try {
        const whatsappLink = getWhatsAppLink(product);
        window.open(whatsappLink, '_blank');
    } catch (error) {
        console.error('Erro ao gerar link do WhatsApp:', error);
        // Fallback: link simples sem imagem
        const simpleMessage = `Olá! Gostaria de fazer um pedido do produto: ${product.name}`;
        window.open(`https://wa.me/5586994193761?text=${encodeURIComponent(simpleMessage)}`, '_blank');
    }
}

// Get WhatsApp Link
function getWhatsAppLink(product) {
    // Get full image URL - convert relative path to absolute
    let imageUrl = '';
    try {
        if (product.image) {
            if (product.image.startsWith('http')) {
                imageUrl = product.image;
            } else {
                // Get current page path
                const currentPath = window.location.pathname;
                const baseUrl = window.location.origin;
                
                // Remove '../' from image path
                let cleanPath = product.image.replace(/^\.\.\//, '');
                
                // If we're in pages/, the image path is already correct
                // If we're in root, we need to adjust
                if (currentPath.includes('/pages/')) {
                    // We're in pages/, so assets/products/ is correct
                    imageUrl = baseUrl + '/' + cleanPath;
                } else {
                    // We're in root, so assets/products/ is correct
                    imageUrl = baseUrl + '/' + cleanPath;
                }
            }
        }
    } catch (error) {
        console.error('Erro ao processar URL da imagem:', error);
        imageUrl = 'Imagem não disponível';
    }
    
    const message = `Olá! Gostaria de fazer um pedido:\n\n` +
        `📦 *Produto:* ${product.name}\n` +
        `💰 *Preço:* ${product.price || 'Consulte valores'}\n` +
        `🏷️ *Categoria:* ${categoryNames[product.category]}\n` +
        `🖼️ *Tipo de Armação:* ${product.frameType}\n` +
        `🎨 *Material:* ${product.material}\n` +
        `🌈 *Cor:* ${product.color}\n` +
        `📏 *Tamanho:* ${product.size}\n` +
        `${product.lensType ? `🔍 *Tipo de Lente:* ${product.lensType}\n` : ''}` +
        `${imageUrl ? `\n🖼️ *Imagem do Produto:*\n${imageUrl}\n` : ''}` +
        `\n*Grau:* (A ser informado pela empresa)\n` +
        `\nPor favor, entre em contato para finalizar o pedido.`;

    return `https://wa.me/5586994193761?text=${encodeURIComponent(message)}`;
}

// Setup Modal
function setupModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('modalClose');

    // Close modal when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}


// Show Most Liked Products
function showMostLikedProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const showLiked = urlParams.get('mostLiked');
    
    if (showLiked === 'true') {
        // Update hero title
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (heroTitle) heroTitle.textContent = 'Produtos Mais Curtidos';
        if (heroSubtitle) heroSubtitle.textContent = 'Os favoritos dos nossos clientes';
        
        const likes = localStorage.getItem('productLikes');
        const likesObj = likes ? JSON.parse(likes) : {};
        
        // Sort products by likes
        const sortedProducts = products
            .map(p => ({ ...p, likes: likesObj[p.id] || 0 }))
            .sort((a, b) => b.likes - a.likes)
            .filter(p => p.likes > 0);
        
        const grid = document.getElementById('productsGrid');
        const likedProducts = getLikedProducts();
        
        if (sortedProducts.length > 0) {
            grid.innerHTML = sortedProducts.map(product => {
                const isLiked = likedProducts.includes(product.id);
                return `
                <div class="product-item" data-id="${product.id}">
                    <div class="product-image-container">
                        ${product.category === 'sol' ? '<span class="product-badge">Sol</span>' : ''}
                        ${product.category === 'esportivo' ? '<span class="product-badge">Esportivo</span>' : ''}
                        ${product.category === 'infantil' ? '<span class="product-badge">Infantil</span>' : ''}
                        <button class="product-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(${product.id})" title="${isLiked ? 'Descurtir' : 'Curtir'}">
                            <i class="fas fa-heart"></i>
                            <span class="like-count">${product.likes}</span>
                        </button>
                        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}';">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${categoryNames[product.category]}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        ${product.price ? `<div class="product-price">${product.price}</div>` : ''}
                        <div class="product-actions">
                            <button class="btn-view" onclick="viewProduct(${product.id})">
                                <i class="fas fa-eye"></i> Ver Detalhes
                            </button>
                            <button class="btn-buy" onclick="buyProduct(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Comprar
                            </button>
                        </div>
                    </div>
                </div>
            `;
            }).join('');
        } else {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--primary-grey);">Ainda não há produtos curtidos. Seja o primeiro a curtir!</p>';
        }
    } else {
        // Reset hero title
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (heroTitle) heroTitle.textContent = 'Nossa Coleção';
        if (heroSubtitle) heroSubtitle.textContent = 'Descubra os melhores modelos de óculos para você';
    }
}

