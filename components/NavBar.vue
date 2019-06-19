<template>
  <div class="NavBar">
    <div class="nav_inner">

      <div class="nav_item">
        <a href="/">
          <img src="~/assets/logo/logo.png" alt="">
        </a>
      </div>

      <div class="nav_item">
        <ul class="routes_list">
          <li>
            <a data-ui-sref="home">
              Главная
            </a>
          </li>
          <li>
            <a data-ui-sref="office" class="bold">
              Офис в Москва-Сити
            </a>
          </li>
          <li>
            <a data-ui-sref="security">
              Безопасность
            </a>
          </li>
          <li>
            <a data-ui-sref="faq">
              Вопросы
            </a>
          </li>
          <li>
            <a data-ui-sref="contacts">
              Контакты
            </a>
          </li>
        </ul>
      </div>

      <div class="nav_item">
        <ul class="routes_list">
          <li>
            <a class="bold" href="tel:66666666">☎ 6666-6666</a>
          </li>
        </ul>

      </div>

      <div class="nav_item nav_auth_form">
        <form action="">

          <div class="fields">
            <input type="text" class="input_text" placeholder="логин">
            <input type="password" class="input_text" placeholder="пароль">
            <button type="submit" class="input_submit">Вход</button>
          </div>

          <div class="help">
            <a href="/users/password" class="restore">забыли пароль?</a>
            <a href="/users/registration" class="reg">регистрация</a>
          </div>

        </form>

      </div>

    </div>
  </div>

</template>

<style type="text/less" lang="less">

  @import (reference) "~assets/theme/helpers";
  @import (reference) "~assets/theme/colors";
  @import (reference) "~assets/theme/forms";

  .NavBar {

    background-color: rgb(249, 253, 253);
    display: block;
    text-align: center;

    .nav_inner {

      max-width: 1280px;
      margin: auto;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 30px;
      text-align: left;

      .clearfix();

      .nav_item {

        float: left;
        margin-right: 30px;
        height: 45px;
        padding: 10px 0;

        &:last-child {

          margin-right: 0;

        }

      }

    }

    .routes_list {

      list-style: none;
      .clearfix();

      li {

        float: left;
        padding: 15px 0;
        margin-right: 20px;

        &:last-child {

          margin-right: 0;

        }

        a {

          text-decoration: none;
          text-transform: uppercase;
          color: @text_main;
          font-weight: 400;
          font-size: 14px;

          &.bold {

            font-weight: 500;

          }

          &:hover {

            text-decoration: underline;

          }

        }

      }

    }

    .nav_auth_form {

      height: auto !important;

      .shloff_form();

      .fields {

        margin-top: 5px;
        text-align: right;

      }

      .help {

        font-size: 12px;
        margin-top: 10px;
        text-align: right;

        .restore {
          color: @text_middle;
          margin-right: 10px;

        }

        .reg {

          color: @input_border_main;

        }

      }

      input {

        width: 70px;
        margin-right: 10px;

      }

    }

  }
</style>

<script>

  export default {
    name: 'NavBar'
  }

</script>
