<template>
    <b-container class="mt-3">
      <div class="fixed-top shadow-sm header_area">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">Todo App</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav tabs>
              <b-nav-item to="/" :active='$route.name=="home"'>New Todos</b-nav-item>
              <b-nav-item to="/maneger" :active='$route.name=="maneger"'>Manege Todos</b-nav-item>
              <b-nav-item to="/about" :active='$route.name=="about"'>アプリについて</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <app-header class="mt-3"></app-header>
      </div>
      <transition mode="out-in">
        <router-view />
      </transition>
    </b-container>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      appHeader: Header,
    },
  }
</script>
<style>
 body { 
  padding-top: 12rem; 
}
.header_area {
  background-color: #fff;
  padding: 20px;
}

/* nav切り替えアニメーション */
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
