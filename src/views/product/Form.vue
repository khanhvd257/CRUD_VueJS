<template>
  <div class="form_create">
    <h2>CREATE PRODUCT</h2>

    <form @submit.prevent="save()">


      <div class="mb-3">


        <label for="exampleInputName" class="form-label">Product Name</label>


        <input type="text"
               v-bind:class="{'is-invalid': errors.name}"
               @blur="validate()"
               v-model="product.name" class="form-control" id="exampleInputName" aria-describedby="emailHelp"
               style="width: 80%; margin-left: 10%;">
        <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>


      </div>
      <div class="mb-3">


        <label for="exampleInputPrice" class="form-label">Product Price</label>


        <input type="number"
               v-bind:class="{'is-invalid': errors.price}"
               @blur="validate()"
               v-model="product.price" class="form-control" id="exampleInputPrice" aria-describedby="emailHelp" style="    width: 80%;
    margin-left: 10%;">
        <div class="invalid-feedback" v-if="errors.price">{{ errors.price }}</div>


      </div>
      <div class="mb-3">
        <label for="exampleInputPrice" class="form-label">Description</label>
        <br>
        <textarea id="" cols="100" v-model="product.description" rows="10"></textarea>

      </div>

      <button type="submit" class="btn btn-primary" style="margin-right: 10px">Save</button>
      <button class="btn btn-danger">
        <router-link to="/product" style="color: white; text-decoration: none">BACK</router-link>
      </button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      errors: {
        name: '',
        price: '',
        description: '',
      },
      product: {
        name: '',
        price: '',
        description: '',

      }
    }
  },
  created() {
    if (this.$route.params.id) {
      let productId = this.$route.params.id
      this.getProduct(productId);
    }
  }
  ,
  methods: {
    validate() {
      let isValid = true;
      this.errors = {
        name: '',
        price: '',
        description: '',
      }
      if (!this.product.name) {
        this.errors.name = "Require Filed Name"
        isValid = false
      }
      if (!this.product.price) {
        this.errors.price = "Require Filed Price"
        isValid = false
      }
      return isValid;
    },
    save() {
      if (this.validate()) {
        if (this.$route.params.id) {
          this.$request.put(`http://localhost:8000/api/products/${this.product.id}`, this.product).then(res => {
            if (res.data.success) {
              console.log("tesst", this.product)
              this.$router.push({name: 'product'})
              this.$swal.fire({
                title: "Edit Success",
                toast: true,
                position: "top-end",
                timer: 2000,
                icon: "success",
                showConfirmButton: false
              })
              return
            }
          })
        } else {
          this.$request.post("http://localhost:8000/api/products", this.product).then(res => {
            if (res.data.success) {
              this.$swal.fire({
                title: 'Create Product Success',
                icon: 'success',
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
              })
              this.$router.push({name: 'product'})
            } else {
              alert("Wrong Something")
            }
          })
        }

      }
    },
    getProduct(productId) {
      this.$request.get(`http://localhost:8000/api/products/${productId}`).then(res => {
        this.product = res.data
        console.log(this.product)
      })
    }
  }
}
</script>