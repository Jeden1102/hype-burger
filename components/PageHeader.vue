<template>
  <div>
    <nav>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill-opacity="1"
          d="M0,192L48,202.7C96,213,192,235,288,208C384,181,480,107,576,106.7C672,107,768,181,864,202.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <ul>
        <li class="main"><NuxtLink to="/about">HypeBurger</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/home">Menu</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  overflow: hidden;
  svg {
    width: 200%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    @include breakpoint(sm) {
      width: 150%;
    }
    @include breakpoint(lg) {
      width: unset;
      height: unset;
    }
    @include breakpoint(full) {
      transform: translateY(-60px);
    }
    path {
      fill: $secondary;
    }
  }
  ul {
    display: flex;
    align-items: center;
    li {
      font-weight: bold;
      a {
        text-decoration: none;
      }
      &.main {
        a {
          color: $primary;
          font-size: 3rem;
        }
      }
    }
  }
}
</style>