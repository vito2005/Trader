<template>
  <nav class="main-nav" ref="menu" @mouseleave="toggleMenuVisibility(menuVisibility)">
    <ul>
      <li :key="i" v-for="(item, i) in items"><a :href="`#${item.href}`">{{ item.title }}</a></li>
    </ul>
    <a href="#" class="main-nav-trigger">
      <i @mouseenter="toggleMenuVisibility(menuVisibility)" class="icon icon--burger"></i>
    </a>
  </nav>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
        @Prop() private items!: string[]
        menuVisibility = false
        toggleMenuVisibility (val: boolean) {
          const elem: any = this.$refs.menu
          if (!val) {
            elem.style.setProperty('--margin-top', 0)
          } else {
            elem.style.setProperty('--margin-top', '-81px')
          }
          this.menuVisibility = !val
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Oak Light",sans-serif;
    font-weight: lighter;
    font-style: normal;
  }
  nav.main-nav {
    --margin-top: -81px;
      height: auto;
      position: fixed;
      top: 0;
      width: 100%;
      text-align: center;
      z-index: 1000;
      background: #FFF;
      transition: .7s cubic-bezier(.77,0,.175,1);
    &:before {
      height: 80px;
      content: '';
      display: block;
      background: #FFF;
      border-bottom: 1px solid #F3F3F3;
      margin-top: var(--margin-top);
      -webkit-transition: .4s cubic-bezier(.77,0,.175,1);
      transition: .4s cubic-bezier(.77,0,.175,1);
    }
    ul  {
      top: auto;
      bottom: 0;
      background-color: #FFF;
      display: flex;
      justify-content: center;
      list-style: none;
      position: absolute;
      left: 0;
      right: 0;
      padding: 20px;
      margin: 0;
      li  {
        cursor: pointer;
        margin: 0 30px;
        padding: 10px;
        text-transform: uppercase;
        font-family: "Oak Bold",sans-serif;
        font-weight: 700;
        font-style: normal;
        a {
          font-family: "Oak Bold",sans-serif;
          font-weight: 700;
          font-style: normal;
          color: rgb(0,0,0);
          text-decoration: none;
          &:hover {
            color: #87c6bd;
          }
        }
      }
    }
  }
  a.main-nav-trigger {
    display: block;
    position: fixed;
    top: 20px;
    right: 30px;
    padding: 10px 0;
    cursor: pointer;
    background-color: transparent;
    &:visited {
      color: inherit;
    }
    i.icon--burger {
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      height: 3px;
      top: -2px;
      position: relative;
      margin-bottom: 20px;
      -webkit-transition: .4s cubic-bezier(.77,0,.175,1);
      transition: .4s cubic-bezier(.77,0,.175,1);
      -webkit-transform: rotateZ(0);
      transform: rotateZ(0);
      background: #1D1D1F;
      &:before, &:after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        left: 0;
        position: absolute;
        background: #1D1D1F;
        -webkit-transition: .4s cubic-bezier(.77,0,.175,1);
        transition: .4s cubic-bezier(.77,0,.175,1);
      }
      &:before {
        top: 8px;
        width: 30px;
        -webkit-transform: rotateZ(0);
        transform: rotateZ(0);
      }
      &:after {
        width: 30px;
        top: 16px;
        -webkit-transform: rotateZ(0);
        transform: rotateZ(0);
      }
    }
  }
</style>
