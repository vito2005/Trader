<template>
  <div class="home">
    <Menu :items="$store.state.menu"></Menu>
    <MainContent/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/Content.vue'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
export default {
  name: 'home',
  components: {
    Menu,
    MainContent,
    Footer
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
    window.addEventListener('scroll', event => {
      let fromTop = window.scrollY

      anchors.forEach(link => {
        let section = document.querySelector(link.hash)
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add('current')
        } else {
          link.classList.remove('current')
        }
      })
    })
  }
}
</script>
