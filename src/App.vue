<template>
  <div class="app-container">
    <header>
      <h1>Vue E-commerce TDD Workshop</h1>
    </header>

    <main>
      <!-- ProductCatalog component will be mounted here when completed -->
      <div class="module-placeholder">
        <h2>Module 1: Product Catalog</h2>
        <p>
          Complete the requirements in the module1.md instructions file to
          implement the Product Catalog component.
        </p>
        <p>Run the tests with: <code>npm run test:module1</code></p>

        <!-- Uncomment this line when you've created the ProductCatalog component -->
        <!-- <ProductCatalog /> -->
      </div>
    </main>

    <footer>
      <p>Vue TDD E-commerce Workshop</p>
    </footer>
  </div>
</template>

<script setup>
// Import your components here when they're ready
// import ProductCatalog from './components/ProductCatalog.vue';
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

h1 {
  color: #2c3e50;
}

main {
  min-height: 70vh;
}

.module-placeholder {
  background: #f9f9f9;
  border: 1px dashed #ddd;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
}

.module-placeholder h2 {
  margin-bottom: 15px;
  color: #42b883;
}

.module-placeholder p {
  margin-bottom: 10px;
}

.module-placeholder code {
  background: #eee;
  padding: 3px 6px;
  border-radius: 3px;
  font-family: monospace;
}

footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  color: #666;
}
</style>
