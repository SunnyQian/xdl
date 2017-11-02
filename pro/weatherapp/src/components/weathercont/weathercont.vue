<template>
	<div id="weathercont">
		<div class="top_cont clear">
			<div class="weather_img">
        <img v-if="nowDay.img" :src="require('@/assets/weathercn/' + nowDay.img + '.png')" alt="">
      </div>
			<p class="weather_day"> {{ nowDay.weather }} </p>
			<p class="tempbar"><span class="templow"> {{ nowDay.templow }} </span> ~ <span class="temphigh"> {{ nowDay.temphigh }} </span> <span class="du">℃</span></p>
			<div>
				<div><p class="the_t">当前温度</p><p class="temp"> {{ nowDay.temp }} <span>℃</span></p></div>
				<div><p class="winddirect the_t"> {{ nowDay.winddirect }} </p><p class="windpower"> {{ nowDay.windpower }} </p></div>
				<div><p class="pm the_t">PM <span> {{ nowDay.pm }} </span></p> <p class="quality"> {{ nowDay.quality }} </p></div>
			</div>
		</div>
		<div class="hours clear">
			<p>今天是&nbsp; {{ nowDay.date }} &nbsp;日 &nbsp;&nbsp;{{ nowDay.week }} &nbsp;&nbsp;</p>
			<p @click="isClick">24小时详情</p>
		</div>
		<hourly-list :hours="hourly"  v-show="isOk"></hourly-list>
		<div class="every_day">
			<ul>
				<li v-for="(item, index) in daily">
					<span>{{ item.date.substr(5, 5) }}</span>
					<span> {{ item.week }} </span>
					<span> {{ item.day.weather }} </span>
					<span><em> {{ item.night.templow }} </em> ~ <em> {{ item.day.temphigh }} </em>℃</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
// import { getWeatherDate } from '@/api/getData'
import HourlyList from '@/components/hourly/hourly'
import axios from 'axios'
export default {
  data () {
    return {
      isOk: false,
      weekDay: [],
      nowDay: {},
      hourly: [],
      daily: []
    }
  },
  components: {
    HourlyList
  },
  created () {
    this._getDate()
  },
  methods: {
    addCity (thecity) {
      this.$emit('addcity', thecity)
    },
    isClick () {
      this.isOk = !this.isOk
    },
    _getDate () {
      let apiUrl = 'http://jisutqybmf.market.alicloudapi.com/weather/query'
      axios.get(apiUrl, {
        params: {
          city: '北京'
        },
        headers: {
          Authorization: 'APPCODE 3480d911513a45428b061cb553071d34'
        }
      }).then((res) => {
        if (res.status === 200 && res.statusText === 'OK') {
          // console.log(res)
          // console.log(res.data)
          this.nowDay = {
            city: res.data.result.city,
            date: res.data.result.date.substr(5, 5),
            img: res.data.result.img,
            week: res.data.result.week,
            weather: res.data.result.weather,
            winddirect: res.data.result.winddirect,
            windpower: res.data.result.windpower,
            temp: res.data.result.temp,
            templow: res.data.result.templow,
            temphigh: res.data.result.temphigh,
            quality: res.data.result.aqi.quality,
            pm: res.data.result.aqi.pm1024
          }
          this.hourly = res.data.result.hourly
          this.daily = res.data.result.daily.slice(1, 7)

          this.addCity(this.nowDay.city)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
	.top_cont { text-align: center; }
	.weather_img { width: 72px; height: 72px; padding-top: 70px; margin: 0 auto; }
	.weather_day { font-size: 24px; padding-top: 30px; margin-left: -5px; }
	.tempbar { margin-top: 40px; font-size: 40px; margin-bottom: 40px; }
	.top_cont>div>div { float: left; font-size: 16px; width: 33.3%; }
	.top_cont>div>div>.the_t { padding-bottom: 14px; }
	.tempbar .du { font-size: 30px; }
	.hours { border-top: 1px solid #fff; border-bottom: 1px solid #fff; padding: 20px 12px; margin-top: 30px; }
	.hours>p { font-size: 16px; float: left; }
  .hours>p:last-child { float: right; }
  .every_day ul li { height: 36px; line-height: 36px; font-size: 14px; border-bottom: 1px solid #fff; padding:0 12px; }
	.every_day ul li>span { display: inline-block; width: 24%; text-align: center; }
	.every_day ul li>span:last-child { text-align: right; }
	.every_day ul li>span:first-child { text-align: left; }
</style>