<template>
  <nav class="main-nav">
    <ul>
      <li :key="i" v-for="(item, i) in items"><a :href="`#${item.href}`"></a>{{ item.title }}</li>
    </ul>
    <a href="#" class="main-nav-trigger">
      <i class="icon icon--burger"></i>
    </a>
  </nav>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
        @Prop() private items!: string[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  nav.main-nav {
      position: fixed;
      top: 0;
      width: 100%;
      text-align: center;
      z-index: 1000;
      transition: .7s cubic-bezier(.77,0,.175,1);
    ul  {
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
        margin: 10px;
        text-transform: uppercase;
        font-family: "Oak Bold",sans-serif;
        font-weight: 700;
        font-style: normal;
        &:hover {
          color: #87c6bd;
        }
      }
    }
  }
  a.main-nav-trigger {
    display: block;
    position: fixed;
    top: 30px;
    right: 30px;
    padding: 10px 0;
    cursor: pointer;
    i.icon--burger {
      height: 3px;
      width: 30px;
      background: #1D1D1F;
      display: inline-block;
      position: absolute;
      right: 10px;
      top: -2px;
      vertical-align: middle;
      &:before, &:after {
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        left: 0;
        position: absolute;
        background: #1D1D1F;
        -webkit-transition: .4s cubic-bezier(.77,0,.175,1);
        transition: .4s cubic-bezier(.77,0,.175,1);
      }
      &:before {
        top: 8px;
        -webkit-transform: rotateZ(0);
        transform: rotateZ(0);
      }
      &:after {
        top: 16px;
        -webkit-transform: rotateZ(0);
        transform: rotateZ(0);
      }
    }
  }
</style>
