<template>
  <div class="home">
    <Menu :items="$store.state.menu"></Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'analytics',
  components: {
    Menu
  }
}
</script>
