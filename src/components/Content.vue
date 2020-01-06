<template>
  <div class="site-main">
    <section class="section section-profile" id="profile" ref="profile">
      <div class="section__headline">
        <span>ПРОФИЛЬ</span>
      </div>
      <div class="section__content">
<!--        <div class="section__content__skills">-->
<!--          <div class="card">-->
<!--            <div>-->
<!--              <img src="./../assets/images/settings.svg" alt="fundamental">-->
<!--              <h4>-->
<!--                Фундаменальный анализ-->
<!--              </h4>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card">-->
<!--            <div>-->
<!--              <img src="./../assets/images/technical.svg" alt="technical">-->
<!--              <h4>-->
<!--                Технический анализ-->
<!--              </h4>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card">-->
<!--            <div>-->
<!--              <img src="./../assets/images/suitcase.svg" alt="suitcase">-->
<!--              <h4>-->
<!--                Формирование портфеля-->
<!--              </h4>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <div class="section__content__aboutme">
          <div class="column__main">
            <h3 class="font-face--plantin-light">
              Здравствуйте, я - Дмитрий Сухарев.
              <br>
              Трейдер, занимаюсь управлением активами, анализом
              перспективных компаний и разбором основных тенденций на фондовых рынках России и США.
            </h3>
          </div>
          <div class="columns">
            <p>В своей деятельности я опираюсь в основном на технический анализ. Основным принципом в
              моем подходе к торговле стал отбор сильного сектора, индустрии и акции.
            </p>
            <p>  Акции, которые уже показали, что способны развить движение, быть лучше остальных, сильнее на
              ралли и устойчивее при снижениях индекса широкого рынка в целом.
             </p>
            <p>
              Основные принципы строятся на понимании как взаимодействует акция и рынок в целом,
              является ли бумага драйвером роста или находится в аутсайдерах. Стоит учесть, что лидеры часто
              меняются, происходит ротация внутри отрасли, внутри сектора и между секторами в целом. Это
              нормальный рыночный процесс.
              Моя задача использовать этот процесс и двигаться вместе с основными волнами рынка.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-statement" id="statement" ref="statement">
      <div class="section__headline">
        <span>СТЕЙТМЕНТ</span>
      </div>
      <div class="section__content">
       <chart :chart-data="statementData" :style="{ height: '400px', position: 'relative' }"/>
      </div>

    </section>
    <section class="section section-contact" id="contact" ref="contact">
      <div class="section__headline">
        <span>КОНТАКТЫ</span>
      </div>
      <div class="section__content">
        <h2>
          <a :href="'mailto:' + $store.state.email">
            {{$store.state.email}}
          </a>
        </h2>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import chart from './chart.vue'
import statement from './../assets/state.json'
@Component({
  components: {
    chart
  }
})
export default class Content extends Vue {
  @Prop() private msg!: string;
  data () {
    return {
      statementData: statement
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .section-profile {
    overflow: hidden;
    background: #FFF;
    min-height: 0;
    -webkit-transition: .8s cubic-bezier(.77,0,.175,1);
    transition: .8s cubic-bezier(.77,0,.175,1);
    &:before {
      background: #F3F3F3;
      -webkit-transform: rotate(-5deg)translateX(-50%)translateY(-90%);
      -ms-transform: rotate(-5deg)translateX(-50%)translateY(-90%);
      transform: rotate(-5deg)translateX(-50%)translateY(-90%);
    }
    .section__content {
      .section__content__skills {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 1200px;
        .card {
          width: 33.33333%;
          margin: 0 1rem;
          display: flex;
          justify-content: center;
          &:first-child {
            justify-content: flex-end;
            div {
              width: fit-content;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
          &:last-child {
            justify-content: flex-start;
            div {
              width: fit-content;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }

          div {
            width: fit-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 80px;
            }
          }
        }
      }
      .section__content__aboutme {
        max-width: 1200px;
        margin: 0 auto;
        &:after {
          visibility: hidden;
          display: block;
          font-size: 0;
          content: " ";
          clear: both;
          height: 0;
        }
        .column__main {
          width: 33.3333%;
          display: block;
          float: left;
          box-sizing: border-box;
          padding: 20px;
          .font-face--plantin-light {
            margin: 0;
            font-family: "Plantin Light",serif;
            font-weight: 400;
            font-style: normal;
            text-align: right;
            font-size: 1.5em;
          }
        }
        .columns {
          text-align: left;
          width: 66.66667%;
          -webkit-column-count: 2;
          -moz-column-count: 2;
          column-count: 2;
          -webkit-column-gap: 20px;
          -moz-column-gap: 20px;
          column-gap: 20px;
          display: block;
          float: left;
          box-sizing: border-box;
          padding: 20px 20px 0 20px;
          p {
            margin-top: 0;
            color: #9B9BA3;
            font-family: "Plantin Light",serif;
            font-weight: 400;
            font-style: normal;
            line-height: 1.85em;
            letter-spacing: .05em;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  .section-statement {
    margin: 0 auto;
    background: #F3F3F3;
    overflow: hidden;
    background: #F3F3F3;
    min-height: 0;
    -webkit-transition: .8s cubic-bezier(.77,0,.175,1);
    transition: .8s cubic-bezier(.77,0,.175,1);
    &:before {
      background: #FFF;
      -webkit-transform: rotate(-5deg)translateX(-50%)translateY(-90%);
      -ms-transform: rotate(-5deg)translateX(-50%)translateY(-90%);
      transform: rotate(-5deg)translateX(-50%)translateY(-90%);
    }
    .section__content {
      width: 97%;
    }
  }
  .section-contact {
    margin-bottom: 233px;
    overflow: hidden;
    background: #FFF;
    min-height: 0;
    -webkit-transition: .8s cubic-bezier(.77,0,.175,1);
    transition: .8s cubic-bezier(.77,0,.175,1);
    &:before {
      background: #F3F3F3;
      -webkit-transform: rotate(-5deg)translateX(-50%)translateY(-90%);
      -ms-transform: rotate(-5deg)translateX(-50%)translateY(-90%);
      transform: rotate(-5deg)translateX(-50%)translateY(-90%);
    }
    a:hover, a:visited:hover {
      text-decoration: none;
    }
  }
  @media (max-width: 600px) {
    .section-profile {
      .section__content {
        .section__content__aboutme {
          .column__main {
            width: 100%;
            h3.font-face--plantin-light {
              text-align: justify;
              font-size: 2em;
              line-height: 1.6em;
            }
          }
          .columns {
            width: 100%;
            column-count: 1;
            p {
              width: 100%;
              text-align: justify;
              font-size: 2em;
            }
          }
        }
      }
    }
  }
</style>
