<template>
  <div class="app-container">
    <header>
      <h1>Vue E-commerce TDD Workshop</h1>
    </header>

    <main>
      <ProductCatalog />
    </main>

    <footer>
      <p>Vue TDD E-commerce Workshop</p>
    </footer>
  </div>
</template>

<script setup></script>

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
  background-color: #f5f5f5;
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

footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  color: #666;
}
</style>
