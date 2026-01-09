const addNewProductForm = document.getElementById('product-form');
const updateProductForm = document.getElementById('update-product-form');

addNewProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Add New Product form submitted");
    const resp = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: document.getElementById('product-name').value,
            type: document.getElementById('product-type').value,
            category: document.getElementById('product-category').value,
            description: document.getElementById('product-description').id
        })
    });
    alert('New product added successfully!');
    addNewProductForm.reset();
});

