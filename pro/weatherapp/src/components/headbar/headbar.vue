<template>
	<div id="headbar">
		<h3> {{ thecity }}
			<router-link to="/setup"><img :src="require('@/assets/icon/setup.png')" alt=""></router-link>
		</h3>
	</div>
</template>
<script>
  export default {
    props: [ 'thecity' ]
  }
</script>
<style>
	#headbar { position: fixed; top: 0; background: #000; width: 100%; height: 40px; line-height: 35px; text-align: center; color: #fff; font-size: 20px; padding-top: 10px; }
	#headbar>h3 img { width: 26px; height: 26px; position: absolute; top: 0; right: 0; padding-top:14px; margin-right: 14px; }
</style>