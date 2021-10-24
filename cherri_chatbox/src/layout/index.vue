<template>
<!-- <Header /> -->
<div class="container-fluid">
  <div class="row">
    <Sidebar />
    <main class="main-container col-md-9 ms-sm-auto col-lg-10">
        <Navbar />
        <app-main />
    </main>

  </div>
</div>
</template>


<script>
import { AppMain, /*Header, */Navbar, Sidebar } from '@/components'

export default {
  name: "Layout",
  components: {
    AppMain,
    // Header,   
    Navbar,
    Sidebar
  }
};
</script>

<style scoped>
.main-container {
    padding: 0 0 0 0;
}
.container-fluid {
    height: calc(100vh - 55px);
}
.row {
    height: 100vh;
}
</style>