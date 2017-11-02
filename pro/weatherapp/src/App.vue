<template>
  <div id="app" :style="{ 'background': 'url('+ require('@/assets/weathercn/bg1.jpg') +') top left fixed' }">
    <div class="all_cent">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <headbar :thecity="city"></headbar>
      <weather-cont @addcity="add"></weather-cont>
    </div>
  </div>
</template>

<script>
// 引入组件
import Headbar from '@/components/headbar/headbar'
import WeatherCont from '@/components/weathercont/weathercont'
// 引入rem文件
import '@/assets/js/rem'
export default {
  data () {
    return {
      city: ''
    }
  },
  components: {
    Headbar,
    WeatherCont
  },
  methods: {
    add (thecity) {
      this.city = thecity
    }
  }
}
</script>
<style>
  @import './assets/css/reset.css'
</style>
