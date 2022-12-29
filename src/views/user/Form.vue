<template>
  <div class="form_create">
    <h2>CREATE USER</h2>
    <form @submit.prevent="Validate()">

      <div class="mb-3">
        <label for="exampleInputName" class="form-label">User Name</label>
        <input v-bind:class="{'is-invalid': errors.name}"
               @blur="validate()"
               type="text" class="form-control" id="exampleName" v-model="user.name" aria-describedby="emailHelp"
               style="    width: 80%;
    margin-left: 10%;">
        <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
      </div>

      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputName" v-model="user.email" aria-describedby="emailHelp"
               style="    width: 80%;
    margin-left: 10%;">
      </div>

      <div class="mb-3">
        <label for="exampleInputPrice" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPrice" v-model="user.password" style="    width: 80%;
    margin-left: 10%;">
      </div>

      <button type="submit" class="btn btn-primary" style="margin-right: 10px">Save</button>
      <button class="btn btn-danger">
        <router-link to="/product" style="color: white; text-decoration: none">Back</router-link>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormUser',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      errors: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  created() {
    this.Validate()
  },
  methods: {
    Validate() {
      let isValid = true
      this.errors = {
        name: '',
        email: '',
        password: '',
      }
      if (!this.user.name) {
        this.errors.name = 'Name is require'
        isValid = false
      }
      if (!this.user.password) {
        this.errors.password = 'Password is require'
        isValid = false
      }
      return isValid
    },
    save() {

    }
  }


}

</script>