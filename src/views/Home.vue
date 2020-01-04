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
  },
  mounted () {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
  }
}
</script>
