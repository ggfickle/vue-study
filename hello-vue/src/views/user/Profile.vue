<template>
  <!--  template只能有一个子元素，所以需要用div包裹起来-->
  <div>
    <h1>个人信息</h1>
    {{ $route.params.id }}
    <span v-for="(info,name) in infos">
      {{name}}:{{info}}
    </span>>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: {
      infos: {}
  },
  beforeRouteEnter: ((to, from, next) => {
    //加载数据
    console.log("进入路由之前")
    // if (to.name !== 'login')
    //   next({ name: 'login' })
    // else
    //   next()
    next(vm => vm.getData())
  }),
  beforeRouteLeave: (to, from, next) => {
    console.log("离开路由之前")
    next()
  },
  methods: {
    getData: function () {
      this.axios.get('http://localhost:8080/static/data/data.json').then((resp) => {
        this.infos = resp.data
      })
    }
  }
}
</script>

<style scoped>

</style>
