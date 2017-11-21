<template>
    <div>
        <el-button type="success" @click="changeLocal('zh-cn')">zh</el-button>
        <el-button type="success" @click="changeLocal('en-us')">en</el-button>
    </div>
</template>
<script>
    export default {
        name:'header',

        methods:{
            changeLocal(locale) {
                this.$i18n.locale = locale
            }
        }
    }
</script>