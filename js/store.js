const products = [
    // iPhone X
    { brand: 'iphone', name: 'iPhone X', price: 28000, image: 'Imagens/produtos/ix.png' },
    { brand: 'iphone', name: 'iPhone Xs', price: 30000, image: 'Imagens/produtos/ixs.png' },
    { brand: 'iphone', name: 'iPhone Xs Max', price: 33000, image: 'Imagens/produtos/ixsmax.png' },
    
    // iPhone 11
    { brand: 'iphone', name: 'iPhone XR', price: 29000, image: 'Imagens/produtos/xr.png' },
    { brand: 'iphone', name: 'iPhone 11', price: 30000, image: 'Imagens/produtos/i11.png' },
    { brand: 'iphone', name: 'iPhone 11 Pro', price: 35000, image: 'Imagens/produtos/i11pro.png' },
    { brand: 'iphone', name: 'iPhone 11 Pro Max', price: 40000, image: 'Imagens/produtos/i11promax.png' },

    // iPhone 12
    { brand: 'iphone', name: 'iPhone 12', price: 35000, image: 'Imagens/produtos/i12.png' },
    { brand: 'iphone', name: 'iPhone 12 Pro', price: 40000, image: 'Imagens/produtos/i12pro.png' },
    { brand: 'iphone', name: 'iPhone 12 Pro Max', price: 45000, image: 'Imagens/produtos/i12promax.png' },

    // iPhone 13
    { brand: 'iphone', name: 'iPhone 13', price: 40000, image: 'Imagens/produtos/i13.png' },
    { brand: 'iphone', name: 'iPhone 13 Pro', price: 45000, image: 'Imagens/produtos/i13pro.png' },
    { brand: 'iphone', name: 'iPhone 13 Pro Max', price: 50000, image: 'Imagens/produtos/i13promax.png' },

    // iPhone 14
    { brand: 'iphone', name: 'iPhone 14', price: 45000, image: 'Imagens/produtos/i14.png' },
    { brand: 'iphone', name: 'iPhone 14 Pro', price: 50000, image: 'Imagens/produtos/i14pro.png' },
    { brand: 'iphone', name: 'iPhone 14 Pro Max', price: 55000, image: 'Imagens/produtos/i14promax.png' },

    // iPhone 15
    { brand: 'iphone', name: 'iPhone 15', price: 50000, image: 'Imagens/produtos/i15.png' },
    { brand: 'iphone', name: 'iPhone 15 Pro', price: 55000, image: 'Imagens/produtos/i15pro.png' },
    { brand: 'iphone', name: 'iPhone 15 Pro Max', price: 60000, image: 'Imagens/produtos/i15promax.png' },

    // iPhone 16
    { brand: 'iphone', name: 'iPhone 16', price: 55000, image: 'Imagens/produtos/i16.png' },
    { brand: 'iphone', name: 'iPhone 16 Pro', price: 60000, image: 'Imagens/produtos/i16pro.png' },
    { brand: 'iphone', name: 'iPhone 16 Pro Max', price: 65000, image: 'Imagens/produtos/i16promax.png' },

    // iPhone 17
    { brand: 'iphone', name: 'iPhone 17', price: 60000, image: 'Imagens/produtos/i17.png' },
    { brand: 'iphone', name: 'iPhone 17 Pro', price: 65000, image: 'Imagens/produtos/i17pro.png' },
    { brand: 'iphone', name: 'iPhone 17 Pro Max', price: 70000, image: 'Imagens/produtos/i17promax.png' }
];


// Render produtos
function renderStore(brand = 'all') {
    const container = document.getElementById('store-container');
    container.innerHTML = '';

    let filtered = products;
    if (brand !== 'all') {
        filtered = products.filter(p => p.brand === brand);
    }

    if (filtered.length === 0) {
        container.innerHTML = '<p class="text-center w-100">Nenhum produto disponível.</p>';
        return;
    }

    filtered.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${p.image}" class="card-img-top" alt="${p.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">Preço: ${p.price.toLocaleString()} MZN</p>
                    <a href="https://wa.me/258870520693?text=Olá,%20quero%20comprar%20o%20${encodeURIComponent(p.name)}"
                       class="btn btn-success btn-block">Comprar via WhatsApp</a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Inicial
renderStore();

// Função do filtro
function filterBrand(brand) {
    renderStore(brand);
}

