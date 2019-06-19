<template>
  <div class="Exchange">
    <div class="exchange_inner">
      <div class="asset_list">

        <h3 class="text_center text_dark">Отправляете</h3>

        <ul class="asset_categories">
          <li v-for="category in categories" class="asset_category">

            <div class="category_name">
              {{ category.name }}
            </div>

            <ul class="asset_items">
              <li v-for="asset in category.assets">

                <label class="asset_item" v-bind:class="{ active: exchange.send === asset.id }">
                  <img v-bind:src="asset.icon" alt="">

                  <span>{{ asset.name }}</span>

                  <input type="radio" name="send_asset" v-bind:value="asset.id" v-model="exchange.send">

                </label>

              </li>
            </ul>

          </li>
        </ul>
      </div>

      <div class="exchange_form">

        <form action="">

          <h2 class="text_center">Онлайн обмен</h2>

          <div class="text_center mt30-xs exchange_form_field">
            <label>Текущий курс</label>
            <input class="input_text size_mid text_center" type="text" disabled value="1 btc = 550 000 руб.">
          </div>

          <div class="text_center mt30-xs">

            <div class="d_ib exchange_form_field text_left mr10-xs">
              <label>Сумма отправки</label>
              <input class="input_text size_mid" type="text" placeholder="0.00">
            </div>

            <div class="d_ib exchange_form_field text_left">
              <label>Сумма получения</label>
              <input class="input_text size_mid" type="text" placeholder="0.00">
            </div>

          </div>

          <div class="text_center mt20-xs exchange_form_field">
            <label>Ваш E-Mail</label>
            <input class="input_text size_mid text_center long" type="text" placeholder="example@gmail.com">
          </div>

          <div class="text_center mt20-xs exchange_form_field">
            <label>Номер карты (16-18 цифр)</label>
            <input class="input_text size_mid text_center long" type="text" placeholder="0000 0000 0000 0000">
          </div>

          <div class="text_center mt20-xs exchange_form_field">
            <label>ФИО владельца карты</label>
            <input class="input_text size_mid text_center long" type="text" placeholder="Иванов Сергей Михайлович">
          </div>

          <div class="text_center mt30-xs agreement">


            <label class="input_checkbox mr5-xs" v-bind:class="{ checked: exchange.agreement }">
              <input type="checkbox" v-model="exchange.agreement"/>
            </label>

            <span>*Я согласен <a href="/agreement">с правилами обмена</a></span>

          </div>

          <div class="text_center mt30-xs">

            <button type="submit" class="submit_exhange_form">
              <img src="/buttons/button.png" alt="">
              <img src="/buttons/button_active.png" alt="">
            </button>

          </div>

        </form>

      </div>

      <div class="asset_list">

        <h3 class="text_center text_dark">Отправляете</h3>

        <ul class="asset_categories">

          <li v-for="category in categories" class="asset_category">

            <div class="category_name">
              {{ category.name }}
            </div>

            <ul class="asset_items">
              <li v-for="asset in category.assets">

                <label class="asset_item" v-bind:class="{ active: exchange.receive === asset.id }">

                  <img v-bind:src="asset.icon" alt="">

                  <span>{{ asset.name }}</span>

                  <input type="radio" name="receive_asset"  v-bind:value="asset.id" v-model="exchange.receive">

                </label>

              </li>
            </ul>

          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<style type="text/less" lang="less">

  @import (reference) "~assets/theme/helpers";
  @import (reference) "~assets/theme/colors";
  @import (reference) "~assets/theme/forms";

  .Exchange {

    display: block;
    text-align: center;
    padding: 30px 0;

    h3 {

      font-size: 20px;

    }

    .exchange_inner {

      max-width: 1280px;
      margin: auto;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 30px;
      text-align: left;
      .clearfix();

    }

    .asset_list {

      display: inline-block;
      width: 25%;
      background-color: @input_bg_main;
      border: 2px solid @input_border_main;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 20px 20px;

      .asset_categories {

        margin-top: 20px;

      }

      .asset_category {

        margin-bottom: 20px;

      }

      .category_name {

        font-size: 14px;
        color: @text_main;
        font-weight: 300;
        text-decoration: underline;
        padding-left: 20px;
        margin-bottom: 10px;

      }

      .asset_item {

        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        display: block;
        box-sizing: border-box;
        position: relative;

        &:hover, &.active {

          background-color: @text_light;

        }

        &.active {

          &:after {

            position: absolute;
            right: 20px;
            width: 20px;
            height: 20px;
            top: 10px;
            content: '';
            background-image: url(/forms/checkbox_active.png);
            background-size: contain;

          }

        }

        img {

          width: 20px;
          height: 20px;
          vertical-align: middle;
          margin-right: 5px;
        }

        span {

          line-height: 20px;

        }

        input {

          visibility: hidden;

        }

      }

    }

    .exchange_form {

      display: inline-block;
      width: 49%;
      vertical-align: top;
      .shloff_form();

      h2 {

        font-size: 24px;
        color: @text_dark;
        font-weight: 400;

      }

      .exchange_form_field {

        label {

          font-size: 14px;
          color: @text_main;
          margin-bottom: 7px;
          display: block;

        }

        input.long {

          width: 250px;

        }

      }

      .agreement {

        font-size: 14px;

      }

      .submit_exhange_form {

        outline: none;
        border: none;
        cursor: pointer;
        background-color: transparent;

        img:last-child {

          display: none;

        }

        &:hover {

          img:last-child {

            display: inline-block;

          }

          img:first-child {

            display: none;

          }

        }

      }

    }

  }

</style>

<script>

  export default {
    data: function () {
      return {

        categories: [
          {
            name: 'Рубли:',
            assets: [
              {
                id: 'alphabank',
                name: 'Альфабанк',
                reserve: 300124,
                shortcut: 'руб.',
                icon: '/assets/icons/alfabank.png'
              },
              {
                id: 'sberbank',
                name: 'Сбербанк',
                reserve: 432144,
                shortcut: 'руб.',
                icon: '/assets/icons/cberbank.png'
              },
              {
                id: 'qiwi',
                name: 'QIWI',
                reserve: 300124,
                shortcut: 'руб.',
                icon: '/assets/icons/kiwi.png'
              },
              {
                id: 'yandex_money',
                name: 'Яндекс Деньги',
                reserve: 300124,
                shortcut: 'руб.',
                icon: '/assets/icons/yandex.png'
              },
              {
                id: 'tinkoff',
                name: 'Тинькофф Банк',
                reserve: 300124,
                shortcut: 'руб.',
                icon: '/assets/icons/tinkoff.png'
              }
            ]
          },
          {
            name: 'Монеты:',
            assets: [
              {
                id: 'bitcoin',
                name: 'Bitcoin',
                reserve: 5.23555,
                shortcut: 'btc',
                icon: '/assets/icons/bitcoin.png'
              },
              {
                id: 'etherium',
                name: 'Etherium',
                reserve: 546.1245,
                shortcut: 'eth',
                icon: '/assets/icons/etherium.png'
              }
            ]
          }
        ],
        exchange: {
          send: null,
          receive: null,
          agreement: false
        }

      }
    }
  }

</script>
