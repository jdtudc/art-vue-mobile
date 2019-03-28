<template>
    <div class="artm-page-list">
        <artm-list title="纯标题列表项">
            <artm-list-item title="标题文字" @on-click="onClick"></artm-list-item>
            <artm-list-item title="标题文字" arrow @on-click="onClick"></artm-list-item>
        </artm-list>
        <artm-list title="带图标、说明的列表项">
            <artm-list-item title="标题文字" value="说明文字" @on-click="onClick"></artm-list-item>
            <artm-list-item title="标题文字" value="说明文字" @on-click="onClick">
                <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="">
            </artm-list-item>
        </artm-list>
        <artm-list title="带箭头的列表项">
            <artm-list-item title="标题文字" value="说明文字" arrow @on-click="onClick"></artm-list-item>
            <artm-list-item title="标题文字" value="说明文字" arrow @on-click="onClick">
                <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="">
            </artm-list-item>
        </artm-list>
        <artm-list title="带自定义说明列表项">
            <artm-list-item title="标题文字" @on-click="onClick">
                <p slot="value" style="color: red">我是自定义的哦</p>
            </artm-list-item>
            <artm-list-item title="标题文字" arrow @on-click="onClick">
                <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="">
                <p slot="value" style="color: red">我是自定义的哦</p>
            </artm-list-item>
        </artm-list>
        <artm-list title="带描述的列表项">
            <artm-list-item title="标题文字" desc="我是描述文字" @on-click="onClick"></artm-list-item>
            <artm-list-item title="标题文字" desc="我是描述文字" arrow @on-click="onClick"></artm-list-item>
            <artm-list-item title="标题文字" arrow @on-click="onClick">
                <p slot="desc" class="desc" style="color: red">我是自己定义的哦</p>
            </artm-list-item>
        </artm-list>
        <div class="artm-page-spacing"></div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        methods: {
            onClick: function () {
                console.log("您点击了带箭头的列表项");
            }
        }
    }
</script>

<style type="text/scss" lang="scss">
    .artm-page-list {}
</style>
