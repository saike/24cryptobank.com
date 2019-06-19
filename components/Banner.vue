<template>

  <div class="Banner">

    <div class="banner_inner">

      <div class="banner_item" v-for="banner in banners">

        <div class="banner_item_inner" v-bind:style="{ background: banner.background, textAlign: banner.align }">

          <h2>{{ banner.title }}</h2>
          <h3>{{ banner.subtitle }}</h3>

          <ul class="benefits_list">
            <li v-for="benefit in banner.benefits">{{ benefit }}</li>
          </ul>

          <div class="banner_route">
            <a v-bind:href="banner.button.route"  class="input_submit">{{ banner.button.name }}</a>
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style type="text/less" lang="less">

  @import (reference) "~assets/theme/helpers";
  @import (reference) "~assets/theme/colors";
  @import (reference) "~assets/theme/forms";

  .Banner {

    display: block;

    .banner_inner {

      .clearfix();

    }

    .banner_item {

      width: 50%;
      float: left;
      box-sizing: border-box;
      padding-bottom: 10px;

      &:nth-child(odd) {

        padding-right: 5px;

      }
      &:nth-child(even) {

        padding-left: 5px;

      }


      .banner_item_inner {

        padding: 40px;

      }

      h2 {

        font-size: 20px;

      }

      h3 {

        font-size: 14px;

      }

      h2, h3 {

        text-transform: uppercase;

      }

      .benefits_list {

        margin-top: 20px;
        list-style: none;
        padding: 0;

        li {

          font-size: 14px;
          padding: 5px 0;

        }

      }

      .banner_route {

        .shloff_form();
        margin-top: 30px;

      }

    }

  }

</style>

<script>

  export default {
    name: 'Banner',
    data: function () {

      return {

        banners: [

          {
            title: 'ОНЛАЙН',
            subtitle: 'за 10 минут',
            background: 'url(/banners/online.jpg) no-repeat bottom right/cover',
            align: 'right',
            benefits: [
              'безопасный перевод ·',
              'низкий процент ·'
            ],
            button: {
              name: 'Начать обмен',
              route: '/'
            }
          },
          {
            title: 'за наличные в офисе',
            subtitle: '"МОСКВА-СИТИ"',
            background: 'url(/banners/ofice.jpg) no-repeat bottom right/cover',
            align: 'left',
            benefits: [
              '· офис в центре Москвы',
              '· охрана'
            ],
            button: {
              name: 'Заказать',
              route: '/office'
            }
          }

        ]

      }

    }
  }
</script>
