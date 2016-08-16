<template>
	<div>
		<navs></navs>
		<div class="container">
			<div class="jumbotron">
				<router-view></router-view>
			</div>
		</div>
		
		<footer></footer>
	</div>
</template>
<script type="text/javascript">
	import navs from './nav';

	export default {
		components: {
			navs
		}
	}
</script>