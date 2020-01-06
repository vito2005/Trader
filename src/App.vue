<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body, html {
    height: 100%;
    width: 100%;
    --text-grey: #9B9BA3;
    --text-green: #87c6bd;
    --bg-white: #FFF;
    --mobile: 450px;
  }
#app {
  font-family: "Oak Bold", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.site-main {
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  min-height: 100%;
  transition: .7s cubic-bezier(.77,0,.175,1);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.section {
  padding: 70px 50px 0 50px;
  color: rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    height: 255px;
    position: absolute;
    left: 50%;
    top: 0;
    width: 120%;
    -webkit-transform: rotate(-5deg)translateX(-50%);
    -ms-transform: rotate(-5deg)translateX(-50%);
    transform: rotate(-5deg)translateX(-50%);
    -webkit-transform-origin: center top;
    -ms-transform-origin: center top;
    transform-origin: center top;
  }
  .section__headline {
    transform: rotate(0);
    font-size: 2.7em;
    font-weight: bold;
    letter-spacing: 0.4em;
    margin-top: 0.5rem;
    &:after {
      margin: 70px auto;;
      width: 100px;
      content: '';
      display: block;
      background: #1D1D1F;
      height: 4px;
      -webkit-transition: .4s cubic-bezier(.175,.885,.32,1.275).8s;
      transition: .4s cubic-bezier(.175,.885,.32,1.275).8s;
    }
  }
  .section__content {
    h2 {
      letter-spacing: .025em;
      a {
        color: rgb(0, 0, 0);
      }
    }
  }
}
  @media (max-width: 600px) {
    .section {
      padding: 70px 15px 0 10px;
      .section__headline {
        font-size: 2em;
      }
    }
  }
</style>
