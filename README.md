# StreamerHub - Progetto React TypeScript

Un'applicazione e-commerce per streamer e creator, sviluppata con React, TypeScript e React Router.

## 🚀 Funzionalità

- **Navigazione SPA** con React Router
- **Rotte protette** per aree autenticate
- **Rotte dinamiche** per dettagli prodotti
- **Gestione stato** con useState e useEffect
- **Design responsive** con CSS Grid e Flexbox
- **TypeScript** per type safety

## 📋 Esercizi Risolti

### Esercizio 1 – Rotta dinamica
  **Obiettivo**: Creare una rotta `/product/:id` che visualizzi l'ID del prodotto dall'URL.

  **Soluzione**:
  ```typescript
  // In AppRouter.tsx
  <Route path="/product/:id" element={<ProductDetail />} />

  // In ProductDetail.tsx
  const { id } = useParams<{ id: string }>();
  console.log("Product ID from URL:", id);

### Esercizio 2 – useParams con fetch
**Obbiettivo**: Estendere l'esercizio 1 facendo una fetch a FakeStoreAPI per ottenere i dettagli del prodotto.

Soluzione:
  ```typescript
  useEffect(() => {
  const fetchProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data: Product = await response.json();
    setProduct(data);
  };
  
    if (id) fetchProduct();
  }, [id, navigate]);

File: src/pages/ProductDetail.tsx

### Esercizio 3 – useNavigate
**Obiettivo**: Creare un form di login che reindirizza a /profile dopo l'autenticazione.

Soluzione:

```typescript
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (username.trim()) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/profile');
      }
    };

File: src/pages/Login.tsx
