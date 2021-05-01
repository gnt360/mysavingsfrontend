<template>
 <div class="container">
   <div class="row">
     <div class="col-md-5 m-auto">
       <div class="card">
         <div class="card-body">
            <form >
              <h3 class="text-center mt-4">Sign In To Admin</h3>
		
			<div class="login-form">
				<div class="form-group">
					<label for="username">Username</label><br>
					<input id="username" name="username" type="text" class="form-control" required>
				</div>
				<div class="form-group">
					<label for="password" class="placeholder"><b>Password</b></label>
					<a href="#" class="link float-right">Forget Password ?</a>
					<div class="position-relative">
						<input id="password" name="password" type="password" class="form-control" required>
						<div class="show-password">
							<i class="icon-eye"></i>
						</div>
					</div>
				</div>
				<div class="form-group form-action-d-flex mb-3">
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="rememberme">
						<label class="custom-control-label m-0" for="rememberme">Remember Me</label>
					</div>
					<button  class="btn btn-primary col-md-5 float-right mt-3 mt-sm-0 fw-bold">Sign In</button>
				</div>
				<div class="login-account mt-5 text-center">
					<span class="msg">Don't have an account yet ?</span>&nbsp;
					<router-link to="/User-Account" id="show-signup" class="link">Sign Up</router-link>
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

export default {
  name: 'Login',
 
}
</script>


<style scoped>
.container{
  margin-top: 5em;
}

.card-body{
  height: 480px;
}

</style>
