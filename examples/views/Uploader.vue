<template>
  <div class="artm-page-uploader">
    <artm-list title="前端Blob预览图片">
      <artm-form-item>
        <artm-uploader :file="file" :imgUrl="imgUrl" :status="status" :progress="progress" @on-change="upload" @on-error="handleError" @on-delete="handleDelete"></artm-uploader>
      </artm-form-item>
    </artm-list>
    <artm-list title="接口返回Url预览图片">
      <artm-form-item>
        <artm-uploader :file="file" :imgUrl="imgUrl" :status="status" :progress="progress" @on-change="upload" @on-error="handleError" @on-delete="handleDelete" :blob="false"></artm-uploader>
      </artm-form-item>
    </artm-list>
    <div class="artm-page-spacing"></div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
        file: null,
        progress: null,
        status: null,
        blob: false,
				imgUrl: null
			}
		},
    methods: {
			upload (file) {
        this.progress = 0
        this.status = 'uploading'

        let formData = new FormData()
        formData.append('file', file)

				// 模拟上传过程
				let timer = setInterval(() => {
					let up = Math.round(5 * Math.random())
					if (this.progress + up >= 100) {
						this.progress = 100
						this.status = "success"
						this.file = file;
						this.imgUrl = "chenjiahao.jpg"
						clearInterval(timer)
					} else {
						this.progress += up
					}
				},100)
      },
			handleDelete($input) {
				this.file = null;
			},
			handleError (err) {
				console.log(`上传错误，错误内容为：${JSON.stringify(err)}`)
      },
    },
	}
</script>

<style type="text/scss" lang="scss">
  .artm-page-uploader {

  }
</style>
