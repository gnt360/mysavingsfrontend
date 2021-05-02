<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 m-auto">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="login">
				
              <h3 class="text-center mt-4">Sign In To Admin</h3>

              <div class="login-form">
                <div class="form-group">
                  <label for="username">Username</label><br />
                  <input
                    id="username"
                    name="user_name"
                    type="text"
                    class="form-control"
                    v-model="form.user_name"
                  />
                  <span v-if="errors.user_name" class="text-danger">{{errors.user_name[0]}}</span><br>
                </div>
                <div class="form-group">
                  <label for="password" class="placeholder"
                    ><b>Password</b></label
                  >
                  <a href="#" class="link float-right">Forget Password ?</a>
                  <div class="position-relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      class="form-control"
                      v-model="form.password"
                    />
                    <span v-if="errors.password" class="text-danger">{{errors.password[0]}}</span>
                    <div class="show-password">
                      <i class="icon-eye"></i>
                    </div>
                  </div>
                </div>
                
                <div class="form-group form-action-d-flex mb-3">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rememberme"
                    />
                    <label class="custom-control-label m-0" for="rememberme"
                      >Remember Me</label
                    >
                  </div>
                  <button
                    class="btn btn-primary col-md-5 float-right mt-3 mt-sm-0 fw-bold"
                  >
                    Sign In
                  </button>
                </div>
                <div class="login-account mt-5 text-center">
                  <span class="msg">Don't have an account yet ?</span>&nbsp;
                  <router-link to="/User-Account" id="show-signup" class="link"
                    >Sign Up</router-link
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/Helpers/User";

export default {
  name: "Login",
  data() {
    return {
      form: {
        user_name: '',
        password: '',
      },

      errors: {},
    };
  },

  methods:{

    login(){
     User.login(this.form)
      .then(response => {
        this.$root.$emit("/", true);
          localStorage.setItem("token", response.data);
          let loader = this.$loading.show({
          // Optional parameters
          container: this.fullPage ? null : this.$refs.formContainer,
          canCancel: false,
          onCancel: this.onCancel,
          //loader: "bars, spinner, dots",
          loader: "spinner",
          color: "blue",
          width: 80,
          height: 80,
        });

        setTimeout(() => {
         this.$router.push({ name: "Dashboard" });
          loader.hide();
          this.$toastr.Add({
            name: "User Login",
            title: "Success", 
            msg: "You have successfully logged in", 
            clickClose: true, 
            timeout: 5000, 
            type: "success", 
          });
        }, 4000);

      })
      .catch(error =>{
           if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
      });
    }
}
};
</script>

<style scoped>
.container {
  margin-top: 5em;
}

.card-body {
  height: 480px;
}
</style>
