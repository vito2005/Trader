<template>
  <div class="home">
    <Menu :items="$store.state.menu"></Menu>
    <MainContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/Content.vue'
import Menu from '@/components/Menu'
export default {
  name: 'home',
  components: {
    Menu,
    MainContent
  }
}
</script>
