<template>
  <div class="product">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../crud_demo/src/assets/Form.css">
    <div class="container">
      <h1>MANAGEMENT PRODUCT</h1>
      <router-link to="/product/create">
        <button class="btn btn-primary">Create</button>
      </router-link>
      <div class="row">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name Product</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr :key="index" v-for="(product, index) in products">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.description }}</td>
            <td>
              <router-link :to="{name:'edit.product', params:{id: product.id}}">
                <button class="btn btn-success">Edit</button>
              </router-link>
            </td>
            <td>
              <button class="btn btn-danger" @click="onDelete(product.id)">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.$request.get("http://localhost:8000/api/products").then(res => {
        this.products = res.data
      })
    },
    onDelete(productId) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d63062',
        cancelButtonColor: '#33dd63',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$request.delete(`http://localhost:8000/api/products/${productId}`).then(res => {
            if (res.data.success) {

              this.$swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
              )
              this.getAll()
            }
          })
        }
      })
    },
    // onEdit(productId){
    //
    // }
  }
}
</script>