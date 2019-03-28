<template>
  <div class="artm-page-popup">
    <artm-list title="基本用法">
      <artm-list-item title="高度为200px" arrow @on-click="toggle(1)"></artm-list-item>
      <artm-list-item title="遮罩不可点击" arrow @on-click="toggle(2)"></artm-list-item>
    </artm-list>
    <artm-list title="高级用法">
      <artm-list-item title="内嵌IScroll组件，实现Selector效果" arrow @on-click="toggle(3)"></artm-list-item>
    </artm-list>
    <div v-transferdom>
      <artm-popup v-model="show1">
        <div class="demo-popup1">
          <artm-list>
            <artm-list-item title="切换协议层">
              <artm-switch :active="show4" :auto-switch="true" slot="value" @on-change="toggle(4)">
                <div slot="open">开</div>
                <div slot="close">关</div>
              </artm-switch>
            </artm-list-item>
          </artm-list>
        </div>
      </artm-popup>
    </div>
    <div v-transferdom>
      <artm-popup v-model="show2" unclickable>
        <div class="demo-popup2">
          <artm-list>
            <artm-list-item title="关闭">
              <artm-switch :active="show2" :auto-switch="true" slot="value" @on-change="toggle(2)">
                <div slot="open">开</div>
                <div slot="close">关</div>
              </artm-switch>
            </artm-list-item>
          </artm-list>
        </div>
      </artm-popup>
    </div>
    <div v-transferdom>
      <artm-popup v-model="show3">
        <div class="demo-popup3">
          <div class="demo-popup3-title">选择器</div>
          <artm-iscroll :options="options" @scrollEnd="scrollEnd" v-if="show3">
            <div class="demo-select">
              <div class="demo-select-item" :class="item.active && 'demo-select-item_active'" v-for="(item, index) in list" :key="index" @click="select(item)">
                <span v-text="item.value"></span>
              </div>
            </div>
          </artm-iscroll>
        </div>
      </artm-popup>
    </div>
    <div v-transferdom>
      <artm-popup v-model="show4" trans="popleft">
        <div class="demo-popup4">
          <div class="demo-popup4-title">横向滑出demo</div>
          <artm-iscroll :options="options" v-if="show4">
            <div class="demo-select">
              <div class="demo-select-item" :class="item.active && 'demo-select-item_active'" v-for="(item, index) in list" :key="index">
                <span v-text="item.value"></span>
              </div>
            </div>
          </artm-iscroll>
        </div>
      </artm-popup>
    </div>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
    data () {
    	return {
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				list: new Array(20).fill(0).map((_, idx) => {
					return {
						value: `${idx+1}`,
            active: false
					}
				}),
				options: {
					mouseWheel: true,
					probeType: 3,
					click: true
				}
      }
    },
		components: {},
		methods: {
			toggle (type) {
				switch (type) {
          case 1:
          	this.show1 = !this.show1
            break
					case 2:
						this.show2 = !this.show2
						break
					case 3:
						this.show3 = !this.show3
						break
					case 4:
						this.show4 = !this.show4
						break
          default:
          	break
        }
			},
			scrollEnd (scroll) {
				if (scroll.y <= scroll.maxScrollY) {  // pullUp
					alert("pullUp")
				} else if (scroll.y >= 0) { // pullDown
					alert("pullDown")
				} else {

				}
			},
			select (item) {
				this.list.forEach((_) => {
					_.active = item.value === _.value ? true : false
        })
        this.toggle(3)
        console.log(`您选中的是：${item.value}`)
      }
		}
	}
</script>

<style type="text/scss" lang="scss">
  .popleft-enter-active, .popleft-leave-active {
    transition: transform 0.3s ease-out;
    transform: translateX(0);
  }
  .popleft-enter, .popleft-leave-to {
    transform: translateX(100%);
  }
  .demo-popup1, .demo-popup2 { height: 200px; text-align: left; padding: 10px 0;}
  .demo-popup3 { position: relative; height: 350px; text-align: left; background-color: #f3f5f9;
    &-title { position: relative; font-size: 16px; text-align: center; line-height: 1; padding: 20px 0; color: #333333;
      &:before { content: ""; position: absolute; left: 0; bottom: 0; right: 0; height: 1px; border-bottom: 1px solid #c8c8cd; transform: scaleY(.5); transform-origin: 0 100%; pointer-events: none;}
    }
    .artm-iscroll { top: 56px;}
    .demo-select { position: relative;
      &-item { position: relative; display: flex; align-items: center; padding: 20px 15px; font-size: 16px; line-height: 1; width: 100%; color: #333333; background-color: #fff;
        &:before { content: ""; position: absolute; left: 15px; top: 0; right: 0; height: 1px; border-top: 1px solid #c8c8cd; transform: scaleY(.5); transform-origin: 0 0; pointer-events: none;}
        &_active {
          &:after { content: ""; position: absolute; right: 15px; top: 50%; margin-top: -6px; width: 12px; height: 6px; border: 2px solid #0074ff; border-top: 0; border-right: 0; transform: rotate(-45deg);}
        }
        &:first-child {
          &:before { display: none;}
        }
      }
    }
  }
  .demo-popup4 { position: relative; height: 450px; text-align: left; background-color: #f3f5f9;
    &-title { position: relative; font-size: 16px; text-align: center; line-height: 1; padding: 20px 0; color: #333333;
      &:before { content: ""; position: absolute; left: 0; bottom: 0; right: 0; height: 1px; border-bottom: 1px solid #c8c8cd; transform: scaleY(.5); transform-origin: 0 100%; pointer-events: none;}
    }
    .artm-iscroll { top: 56px;}
    .demo-select { position: relative;
      &-item { position: relative; display: flex; align-items: center; padding: 20px 15px; font-size: 16px; line-height: 1; width: 100%; color: #333333; background-color: #fff;
        &:before { content: ""; position: absolute; left: 15px; top: 0; right: 0; height: 1px; border-top: 1px solid #c8c8cd; transform: scaleY(.5); transform-origin: 0 0; pointer-events: none;}
        &_active {
          &:after { content: ""; position: absolute; right: 15px; top: 50%; margin-top: -6px; width: 12px; height: 6px; border: 2px solid #0074ff; border-top: 0; border-right: 0; transform: rotate(-45deg);}
        }
        &:first-child {
          &:before { display: none;}
        }
      }
    }
  }
  .artm-page-popup {
  }
</style>
