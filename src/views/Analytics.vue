<template>
  <div class="analytics">
    <div class="button_goBack">
      <a href="/">← Назад</a>
    </div>
    <div class="site-main">
      <section class="section section-analytics">
        <div class="section__headline">
          <span>АНАЛИТИКА</span>
        </div>
        <div class="section__content">
          <p>Сегодня мы разберем что было с индексом NASDAQ в 2019 году. В любом случае это пост анализ,
            но основные принципы изучения графика будут изложены.
          </p>
          <p>Мы помним, что начиная с сентября 2018 года у нас по индексу был Down trend с первой
            попыткой его остановить в диапазоне <span>7000-7600</span>. Силы покупателей для этого не хватило.
            После выхода из этого диапазона цена довольно резко опускается на уровни <span>6200-6400</span>, попадая
            зону перепроданности <span>(oversold)</span>. Это первое что мы отметим. Само по себе формирование
            перепроданности на графике не говорит об окончании тенденции. Но может дать предположение
            что цена остановится в этой зоне, по крайней мере на какое-то время.</p>
          <div class="analytics__image">
            <img src="../assets/images/analytics/image1.png" alt="image1">
          </div>
          <p>Далее, у нас появляется бар 21 декабря. Это бар с самым большим объемом. Это может стать
            кульминацией нисходящего движения, если мы увидим подтверждение в виде ралли.</p>
          <p>Изучив поведение индекса до этого момента, мы знаем, что одним из способов остановить
            движение является известный всем бар «поглощения», аналогичный 26 декабря (дальше такие
            бары будут появляться довольно часто на индексе, например 11 марта, 4 июня, 3 октября и т.д.)</p>
          <p>Теперь этих трех причин будет достаточно для предположения что нисходящая тенденция будет
            остановлена, хотя бы временно.</p>
          <p>Это будет основной сценарий, он может быть изменен если появятся продажи аналогичные 19-21
            декабря. В таком случае мы будем иметь право предположить, что распределение активов
            продолжается и цена продолжит снижение.</p>
          <p>Далее у нас очень короткий ретест 3 января, один бар, без объема на продажу, это признак силы и
            продолжения растущей тенденции. Об этом мы можем сказать только после появления бара 4
            января.</p>
          <div class="analytics__image">
            <img src="./../assets/images/analytics/image2.png" alt="image2">
          </div>
          <p>Начиная с конца декабря у нас продолжается довольно сильное ралли до зоны продаж <span>8100-8200</span>,
            с незначительными коррекциями, которые нет смысла разбирать. Все что стоит отметить, это на
            сколько все-таки значительно поднялась цена <span>(Recovery)</span>.</p>
          <div class="analytics__image">
            <img src="../assets/images/analytics/image3.png" alt="image3">
          </div>
          <p>Нас будет интересовать зона сопротивления <span>8130-8200</span>, как поведет себя индекс там. Появятся ли
            продажи. Если да, то на сколько они будут сильны.</p>
          <div class="analytics__image">
            <img src="./../assets/images/analytics/image4.png" alt="image4">
          </div>
          <p>Как мы видим продажи от уровня <span>8200</span> в виде довольно нормальной коррекции, слабее чем в
          октябре 18 года (исходя из объема, спрэда и продолжительности коррекции). В этой точке можно
          брать бумаги, которые стоят сильнее рынка (а также для покупки нам подойдет 15 мая, если
          подходящие бумаги есть на листе)</p>
          <p>После такой коррекции, мы оставляем ожидание, что цена продолжит движение вверх, т.е. UP
            тренд сохранится.</p>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'analytics',
  components: {
    Footer
  }
}
</script>
<style lang="scss">
  .analytics {
    .button_goBack {
      position: fixed;
      z-index: 2500;
      left: 0;
      top: 0;
      width: 100%;
      text-align: left;
      background: var(--bg-white);
      overflow: hidden;
      a {
        padding: 20px;
        font-family: "Oak Bold", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: .875em;
        letter-spacing: .15em;
        color: rgb(0, 0, 0);
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        -webkit-transition: .1s;
        transition: .1s;
        &:hover {
          color: #87c6bd;
        }
      }
    }
    .section-analytics {
      .section__content {
        text-align: justify;
        p {
          font-family: "Plantin Light",serif;
          font-weight: 400;
          font-style: normal;
          line-height: 1.5em;
          span  {
            font-weight: 700;
          }
        }
        .analytics__image {
          img {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .analytics {
      .button_goBack {
        a {
          font-size: 1.6em;
        }
      }
      p {
        text-align: justify;
        font-size: 2em;
      }
    }
  }
</style>
