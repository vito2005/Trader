<template>
  <nav :class="{'main-nav': true, 'is-visible': isVisible}" ref="menu">
    <ul>
      <li :key="i" v-for="(item, i) in items" @click="toggle">
        <router-link v-if="item.href === '/analytics'" :to="item.href">{{ item.title }}</router-link>
        <a v-else :class="i === 0 && 'current'" :href="item.href">{{ item.title }}</a>
      </li>
    </ul>
    <a href="#" :class="{ 'main-nav-trigger': true, 'is-closeable': isCloseable}" @click="toggle">
      <i class="icon icon--burger"></i>
    </a>
  </nav>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
        @Prop() private items!: string[]
        isCloseable: boolean = false
        isVisible: boolean = false
        toggle () {
          if (window.innerWidth < 600) {
            this.isCloseable = !this.isCloseable
            this.isVisible = !this.isVisible
          }
        }
}
</script>
