<template>
    <div>
        <el-button type="success" @click="changeLocale('zh-cn')">zh</el-button>
        <el-button type="success" @click="changeLocale('en-us')">en</el-button>
    </div>
</template>
<script>
    export default {
        name:'header',
        methods:{
            changeLocale(locale) {
                this.$i18n.locale = locale
            }
        }
    }
</script>