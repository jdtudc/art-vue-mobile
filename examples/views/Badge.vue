<template>
  <div class="artm-page-badge">
    <artm-list title="基本用法">
      <artm-list-item title="Dot Badge" value="说明文字" arrow>
        <div class="pr" slot="icon">
          <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="">
          <artm-badge dot></artm-badge>
        </div>
      </artm-list-item>
      <artm-list-item title="消息提醒" arrow>
          <p class="pr artm-page-badge-demo" slot="value">自定义内容<artm-badge count="101"></artm-badge></p>
      </artm-list-item>
      <artm-list-item title="自定义样式" arrow>
        <p class="pr artm-page-badge-demo" slot="value">
          <artm-badge count="New" bgColor="#f52f3e"></artm-badge>
        </p>
      </artm-list-item>
    </artm-list>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-badge {
    &-demo { display: flex;
      .artm-badge { margin-top: 4px; margin-left: 5px;}
    }
  }
</style>
