<template>
	<div class="hour_list">
		<ul>
			<li v-for="item in hours">
				<span> {{ item.time }} </span>
				<span> {{ item.weather }} </span>
				<span> {{ item.temp }}  ℃</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
	  props: [ 'hours' ]
	}
</script>
<style>
	.hour_list ul li { padding: 12px; color: #fff; border-bottom: 1px solid #fff; font-size: 14px; }
	.hour_list ul li span { display: inline-block; width: 30%; }
	.hour_list ul li span:last-child { text-align: right; }
	.hour_list ul li span:nth-child(2) { text-align: center; }
</style>