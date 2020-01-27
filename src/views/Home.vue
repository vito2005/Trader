<template>
  <div class="home">
    <Menu v-if="$store.state.mainPage" :items="$store.state.menu"></Menu>
    <MainContent v-if="$store.state.mainPage"/>
    <Analytics v-else/>
    <Footer/>
  </div>
</template>

<script>
import MainContent from '@/components/Content.vue'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Analytics from '@/views/Analytics'
export default {
  name: 'home',
  components: {
    Analytics,
    Menu,
    MainContent,
    Footer
  },
  data () {
    return {
      mainPage: true
    }
  },

  mounted () {
    const anchors = document.querySelectorAll('ul li a[href*="#"]')
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
    window.addEventListener('scroll', this.scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll (event) {
      const fromTop = window.scrollY
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const top = section.offsetTop - 100
        const bottom = top + section.offsetHeight
        const id = section.getAttribute('id')
        if (fromTop > top && fromTop < bottom) {
          document.querySelector('ul li a.current').classList.remove('current')
          document.querySelector(`ul li a[href*="#${id}"]`).classList.add('current')
        }
      })
    }
  }
}
</script>
