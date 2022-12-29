<template>
  <div class="product">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../crud_demo/src/assets/Form.css">
    <div class="container">
      <h1>MANAGEMENT USER</h1>
      <router-link to="/user/create">
        <button class="btn btn-primary">Create</button>
      </router-link>
      <div class="row" v-for="(user, index) in users" :key="index">
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">{{ user.name }}</div>
          <div class="card-body">
            <h5 class="card-title">{{ user.email }}</h5>
            <p class="card-text">{{ user.password }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      users: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {

      this.$request.get("http://localhost:8000/api/users").then(res => {
        // console.log(res.data, "data")
        this.users = res.data
      })
    }
  },
}
</script>