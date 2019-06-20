<template>
  <div>
    <NavBar></NavBar>
    <banner></banner>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {

  width: 100vw;

}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>

  import NavBar from '~/components/NavBar.vue'
  import Banner from '~/components/Banner.vue'

  //mobile viewport hack
//  (function(){
//
//    function apply_viewport(){
//      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)   ) {
//
//        var ww = window.screen.width;
//        var mw = 1280; // min width of site
//        var ratio =  ww / mw; //calculate ratio
//        var viewport_meta_tag = document.querySelector('[name=viewport]');
//        if( ww < mw){ //smaller than minimum size
//          viewport_meta_tag.setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + mw);
//        }
//        else { //regular size
//          viewport_meta_tag.setAttribute('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width=' + ww);
//        }
//      }
//    }
//
//    //ok, i need to update viewport scale if screen dimentions changed
//    window.addEventListener('resize', function(){
//      apply_viewport();
//    });
//
//    apply_viewport();
//
//  }());

  export default {
    components: {
      NavBar,
      Banner
    }
  }
</script>
