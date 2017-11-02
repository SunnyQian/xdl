<template>
	<transition name="slide">
		<div class="set_up">
			<h3>
			  <img @click="goback" :src="require('@/assets/icon/back.png')" alt="">
			  设置
			</h3>
			<div class="set_up_cont">
				<div>
					<p>小尾巴<span @click="isup" :class="{ on_btn: isOn_btn, right: isRight, active: isUp }"><em></em></span></p>
					<p>省流量<span @click="isdown" :class="{ on_btn: isOn_btn, right: isRight, active: isDown }"><em></em></span></p>
					<!-- <p>小尾巴<span @click="isup" :class="mystyle"><em></em></span></p>
					<p>省流量<span @click="isdown" :class="mystyle"><em></em></span></p> -->
				</div>
				<p class="about_tit">关于</p>
				<div class="about">
					<ul>
						<li>当前版本</li>
						<li>意见反馈</li>
						<li>评分鼓励</li>
						<li>关于作者</li>
						<li>关于天气社区</li>
					</ul>
				</div>
				<p class="copyright">2017 Lance Li 4 Lovely JJ</p>
			</div>
		</div>
	</transition>
</template>
<script>
export default {
  data () {
    return {
      // mystyle: {
      //   active: false,
      //   on_btn: true,
      //   right: true
      // }
      isUp: false,
      isDown: false,
      isOn_btn: true,
      isRight: true
    }
  },
  activated () {
    // this.isup()
    // this.isdown()
  },
  methods: {
    goback () {
      this.$router.back()
    },
    isup () {
      this.isUp = !this.isUp
      // this.mystyle.active = !this.mystyle.active
      // console.log(this.mystyle.active)
    },
    isdown () {
      this.isDown = !this.isDown
    }
  }
}
</script>
<style scoped>
	.slide-enter-active, .slide-leave-active { transition: all 0.1s linear }
	.slide-enter, .slide-leave-to { transform: translate3d(100%, 0, 0) }
	.set_up { position: fixed; top: 0; left: 0; z-index: 999; width: 100%; height: 100%; background: #FAFAFA; }
	.set_up>h3 { font-size: 20px; height: 44px; line-height: 44px; width: 100%; background: #000; text-align: center; }
	.set_up>h3>img { width: 24px; height: 24px; position: absolute; left: 10px; top: 10px; }
	/* 设置样式 */
	.set_up_cont { margin-top:16px; font-size:14px; color: #666; letter-spacing: 1px; }
	.set_up_cont>div { background:#fff; border-top:1px solid #ccc; }
	.set_up_cont>div:first-child p { border-bottom:1px solid #ccc; height:40px; line-height:40px; padding:0 14px;  }
	.set_up_cont>div:first-child p span { width:50px; height:22px; border:1px solid #999; margin-top:10px;  border-radius:10px; }
	.set_up_cont>div:first-child p span em { position: relative; left: -1px; top: -4px; display:inline-block; width:20px; height:20px; border:1px solid #999; background:#fff; border-radius:50%; }
	.set_up_cont>div:first-child p .active { background: #00CC66; border-color: #00CC66; }
	.set_up_cont>div:first-child p .active em { border-color: #fff; position: relative; left: 28px; }
	.about_tit { padding:10px 14px; }
	.about>ul>li { padding-left:14px; height:40px; line-height:40px; border-bottom:1px solid #ccc; }
	.copyright { width:110px; margin:0 auto; text-align:center; line-height:20px; padding-top:20px; }
</style>