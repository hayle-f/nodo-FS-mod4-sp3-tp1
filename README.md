# SoulBeat - Landing Page

## 📄 Descripción
Landing page **SoulBeat** responsive para promocionar auriculares, con diseño moderno y animaciones suaves.  
Muestra productos, permite agregar y quitar favoritos, y persiste la información usando `localStorage`.  

---

## ⚙️ Estructura del proyecto

- **App.jsx** → Componente raíz. Monta la estructura general con `Navbar`, `Products` y `Footer`.  
- **Products.jsx** → Vista principal que muestra todos los auriculares y gestiona la interacción con las cards y el modal de favoritos.  

### 🧩 Componentes principales

- **Navbar / NavbarMenu** → Barra de navegación con menú hamburguesa en mobile.  
- **CardProduct.jsx** → Card individual de cada auricular, mostrando imagen, nombre, precio y botón para agregar o quitar de favoritos.  
- **ModalFavs.jsx** → Modal emergente que lista los productos favoritos, con opción de eliminarlos individualmente.  
- **Footer.jsx** → Sección inferior con logo, enlaces a redes sociales y derechos reservados.  

---

## 🛠 Tecnologías utilizadas

- React (JSX)
- Tailwind CSS
- Framer Motion (para animaciones)
- React Hooks (`useState`, `useEffect`, hooks personalizados)
- LocalStorage para persistencia de favoritos

---

## ⚡ Funcionalidades

- Menú responsive en desktop y mobile  
- Cards de productos con interacción de favoritos  
- Modal para ver y eliminar favoritos  
- Persistencia de favoritos usando `localStorage`  
- Diseño adaptativo a diferentes tamaños de pantalla  
- Animaciones combinadas con **Framer Motion** y **Tailwind CSS**  

---

## 🚀 Ejecución

1. Clonar el repositorio:
   ```bash
   git clone <URL-del-repo>

2. Instalar dependencias:
   ```bash
   npm install

3. Ejecutar el proyecto:
   ```bash
   npm run dev

4. Abrir en el navegador:
   ```bash
   http://localhost:3000



🧱 Estructura del Proyecto

```
📁 public/ # Archivos públicos y recursos estáticos
📁 imgs/ # Carpeta principal de imágenes
📁 inEar/ 
📁 onEar/ 
📁 OverEar/ 
📁 README.md 

📁 src/ # Código fuente
┣ App.jsx # Componente raíz
┣ index.css # Estilos globales
┣ main.jsx # Punto de entrada de React
┣ vite.config.js # Configuración de Vite
┣ 📁 assets/ # Recursos estáticos del proyecto
┃ └─ aurislogo.png # Logo de la aplicación
┣ 📁 components/ # Componentes de la aplicación
┃ ┣ CardProduct.jsx # Card que muestra información de cada auricular
┃ ┣ ModalFavs.jsx # Modal de favoritos con funcionalidad de eliminar
┃ ┣ 📁 Footer/
┃ ┃ └─ Footer.jsx # Footer con logo y enlaces a redes sociales
┃ ┣ 📁 Navbar/
┃ ┃ ┣ Navbar.jsx # Navbar principal
┃ ┃ ┗ NavbarMenu.jsx # Menú responsive de la navbar
┃ ┗ Products.jsx # Componente que renderiza la lista de productos
┣ 📁 data/
┃ └─ DataAuris.js # Datos de los auriculares
┗ 📁 hooks/
┣ useOpen.js # Hook custom para manejar estado de modales
┗ useWishlist.js # Hook custom para manejar wishlist
```

