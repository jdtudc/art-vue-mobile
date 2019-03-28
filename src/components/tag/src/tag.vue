<template>
    <div class="artm-tag" :class="'artm-tag_level' + level">
        <div class="artm-tag-cont">
            <slot></slot>
        </div>
    </div>
</template>
<script>
	export default {
		name: 'artm-tag',
		props: {
			level: {
				type: [Number,String],
				default: 1
			}
		},
		methods: {
		}
	}
</script>
<style type="text/scss" lang="scss">
    @import "../../../styles/components/tag";
</style>