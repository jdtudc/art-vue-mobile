<template>
    <div class="artm-page-index">
        <div class="artm-page-index-header">
            <h1 class="artm-page-index-title" v-text="title"></h1>
            <p class="artm-page-index-desc" v-text="desc"></p>
        </div>
        <div class="artm-page-index-cont">
            <ul>
                <li class="artm-page-index-item" :class="[category.expand && 'artm-page-index-item_expand']" v-for="(category, index) in categories">
                    <div class="artm-page-index-category flex" @click="clickCategory(category, index)">
                        <p class="flex-item" v-text="category.name">Basic</p>
                        <i></i>
                    </div>
                    <div class="artm-page-index-category-expand">
                        <artm-list>
                            <artm-list-item :title="item.name_en + ' ' + item.name" :arrow="true" @on-click="pushTo(item.online ? item.path : '/develop', {'name_en': item.name_en})" v-for="(item, index) in category.list" :key="index"></artm-list-item>
                        </artm-list>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
	import categories from '../data/categories.json'

	export default {
		data() {
			return {
				title: "Art Vue Mobile",
				desc: "Art Vue Mobile 是一个基于 Vue2.x 的移动端组件库，根据业务量身定制，令用户的使用体验更加丝滑。",
				categories: categories
			}
		},
		methods: {
			pushTo(path, query) {
				this.$router.push({path: path, query: query || {}});
			},
			clickCategory(category, index) {
				this.categories[index].expand = !this.categories[index].expand;
			}
		}
	}
</script>

<style type="text/scss" lang="scss">
    @import "../../src/styles/common/mixin";
    @import "../../src/styles/common/var";

    .artm-page-index {
        &-header {
            padding: 40px;
        }
        &-title {
            font-size: 20px;
            line-height: 21px;
            margin-bottom: 15px;
            color: #000;
        }
        &-desc {
            font-size: 14px;
            margin-top: 5px;
            line-height: 22px;
            color: #888;
            text-align: justify;
        }
        &-cont {
            padding: 0 15px;
            .artm-page-index-item {
                margin: 10px 0;
                background-color: #fff;
                overflow: hidden;
                border-radius: 2px;
                cursor: pointer;
                &:first-child {
                    margin-top: 0;
                }
                .artm-page-index-category {
                    font-size: 16px;
                    transition: all 0.3s;
                    align-items: center;
                    padding: 20px;
                    p {
                        font-size: 16px;
                        color: #333333;
                    }
                    i {
                        display: block;
                        width: 30px;
                        height: 30px;
                        background: url("../assets/css/img/icon-menu.png") no-repeat center center;
                        background-size: 100%;
                    }
                }
                .artm-page-index-category-expand {
                    overflow: hidden;
                    height: 0;
                    .artm-list {
                        opacity: 0;
                        transform: translateY(-50%);
                        transition: all 0.3s;
                    }
                    .artm-list-cont {
                        &:before, &:after {
                            display: none;
                        }
                        .artm-list-item {
                            padding: 10px 20px;
                            &:before {
                                border-top: 1px solid #e5e5e5;
                                left: 20px;
                                right: 20px;
                            }
                        }
                    }
                }
            }
            .artm-page-index-item_expand {
                .artm-page-index-category {
                    opacity: 0.4;
                }
                .artm-page-index-category-expand {
                    height: auto;
                    .artm-list {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            }
        }
    }
</style>
