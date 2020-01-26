<template>
  <div class="site-main">
    <section class="section section-profile" id="profile" ref="profile">
      <div class="section__headline">
        <span>ПРОФИЛЬ</span>
      </div>
      <div class="section__content">
        <div class="section__content__aboutme">
          <div class="column__main">
            <h3 class="font-face--plantin-light">
              Здравствуйте, я - Дмитрий Сухарев.
              <br>
              Трейдер. Занимаюсь активной торговлей ценными бумагами на рынках США и России.
              <br>
              Являюсь сторонником системного подхода в принятии решений.
            </h3>
          </div>
          <div class="columns">
            <p>В своей деятельности я опираюсь в основном на технический анализ. Основным принципом в
              моем подходе к торговле стал отбор сильного сектора, индустрии и акции.
            </p>
            <p>  Акции, которые уже показали, что способны развить движение, быть лучше остальных, сильнее на
              ралли и устойчивее при снижениях индекса широкого рынка.
             </p>
            <p>
              Основные принципы строятся на понимании как взаимодействует акция и рынок в целом,
              является ли бумага драйвером роста или находится в аутсайдерах. Стоит учесть, что лидеры часто
              меняются, происходит ротация внутри отрасли, внутри сектора и между секторами. Это
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
      <div class="switcher">
        <span @click="toggleChart('США')" :class="activeChart === 'США' && 'active'">США</span> | <span @click="toggleChart('Россия')" :class="activeChart === 'Россия' && 'active'">Россия</span>
      </div>
      <div class="section__content">
       <chart :country="activeChart" :chart-data="statementData" :style="{ height: '400px', position: 'relative' }"/>
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
import statementRussia from './../assets/stateRussia.json'
function parse (str: string) {
  const y = str.substr(0, 4)
  const m = str.substr(4, 2)
  const d = str.substr(6, 2)
  return d + '.' + m + '.' + y
}
function parseDate (date: any) {
  let dd = date.getDate()
  let mm = date.getMonth() + 1 // January is 0!

  const yyyy = date.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  return dd + '.' + mm + '.' + yyyy
}
const mappedStatement = {
  labels: statement.U2815583['1Y'].dates.map(d => parse(d)),
  data: statement.U2815583['1Y'].cps.map(d => (d * 100).toFixed(2))
}
const mappedStatementRussia = {
  labels: statementRussia.FinancialResultsHistory.map(item => parseDate(new Date(item.StartDate))),
  data: statementRussia.FinancialResultsHistory.map(item => (item.FinancialResult / statementRussia.FinancialResults[0].AverageAmount * 100).toFixed(2))
}
@Component({
  components: {
    chart
  }
})
export default class Content extends Vue {
  @Prop() private msg!: string;
    activeChart: any;
    statementData: any;
    toggleChart (chartType: string) {
      this.activeChart = chartType
      this.statementData = chartType === 'США' ? mappedStatement : mappedStatementRussia
    }
    data () {
      return {
        statementData: mappedStatement,
        activeChart: 'США'
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
            font-family:  'Plantin Light', serif;
            margin: 0;
            font-weight: 400;
            font-style: normal;
            text-align: right;
            line-height: 1.5;
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
    .switcher {
      margin: 0 0 15px 0;
      span {
        cursor: pointer;
        font-size: 1.2em;
      }
      span.active {
        color: var(--text-green);
      }
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
              font-size: 1.1em;
              letter-spacing: .025em;
            }
          }
          .columns {
            width: 100%;
            column-count: 1;
            p {
              width: 100%;
              text-align: justify;
              font-size: 1.1em;
              letter-spacing: .025em;
            }
          }
        }
      }
    }
  }
</style>
