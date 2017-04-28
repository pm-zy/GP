<template>
    <div class="fixed-mask">
        <input type="button" name="" value="返回" @click="goBack"/>
    </div>
</template>

<script>
import store from '../vuex/store'

export default {
    data() {
		if(!store.getters.getLoginStatus.status) {
			alert('请先登录');
			console.log(store.getters.getLoginStatus.status);
			this.$router.replace('/login');
			return {};
		}
		return store.getters.getUserInfo
	},
    methods: {
        goBack: function() {
            let url = `/user/${this.personId}`;
			this.$router.replace(url)
        }
    }
}
</script>

<style lang="less">
.fixed-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
