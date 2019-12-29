<template>
  <div>
    <section class="section section-profile">
      <div class="section__headline">
        <span>ПРОФИЛЬ</span>
      </div>
      <div class="section__content">
        <div class="section__content__skills">
          <div class="card">
            <div>
              <img src="./../assets/images/settings.svg" alt="fundamental">
              <h4>
                Фундаменальный анализ
              </h4>
            </div>
          </div>
          <div class="card">
            <div>
              <img src="./../assets/images/technical.svg" alt="technical">
              <h4>
                Технический анализ
              </h4>
            </div>
          </div>
          <div class="card">
            <div>
              <img src="./../assets/images/suitcase.svg" alt="suitcase">
              <h4>
                Формирование портфеля
              </h4>
            </div>
          </div>
        </div>
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
              моем подходе к анализу рынков стал отбор сильного сектора, индустрии и акции.
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
    <section class="section section-statement">
      <div class="section__headline">
        <span>Стейтмент</span>
      </div>
      <div class="section__content">
       <chart :chart-data="statementData" :style="{ height: '400px', position: 'relative' }"/>
      </div>

    </section>
    <section class="section section-contact">
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
  .section {
    padding: 70px 50px 0 50px;
    color: rgb(0, 0, 0);
    .section__headline {
      font-size: 3rem;
      font-weight: bold;
      letter-spacing: 0.4em;
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
  .section-profile {
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
          width: 33.33333%;
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
    max-width: 1200px;
    margin: 0 auto;
    .section-statement__content {
      display: flex;
      img {
        width: 30%;
      }
    }
  }
  .section-contact {
    margin-bottom: 30px;
  }
</style>
