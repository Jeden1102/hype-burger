<template>
  <div>
    <nav>
      <ul class="container">
        <li class="main"><NuxtLink to="/about">HypeBurger</NuxtLink></li>
        <li class="burger">
          <button @click="menuToggled = !menuToggled">
            <span class="line"> </span>
          </button>
        </li>
        <div v-if="menuToggled">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/home">Menu</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menuToggled = ref(false);
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  background: $secondary;
  ul {
    display: flex;
    align-items: center;
    padding: 20px 0;
    justify-content: space-between;
    li {
      font-weight: bold;
      a {
        text-decoration: none;
      }
      &.burger {
        span {
          width: 37px;
          height: 7px;
          background: $primary;
          display: block;
          position: relative;
          border-radius: 12px;
          &::after,
          &::before {
            content: "";
            width: 100%;
            height: 7px;
            background: $primary;
            position: absolute;
            top: 12px;
            left: 0;
          }
          &::before {
            bottom: 12px;
            top: unset;
            border-radius: 12px 12px 0 0;
          }
          &::after {
            border-radius: 0 0 12px 12px;
          }
        }
      }
      &.main {
        a {
          color: $primary;
          text-transform: uppercase;
          font-size: 3rem;
          text-shadow: 2px 5px 6px rgba(66, 68, 90, 0.4);
        }
      }
    }
  }
}
</style>