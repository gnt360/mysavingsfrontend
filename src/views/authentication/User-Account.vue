<template>
 <div class="container">
   <div class="row">
     <div class="col-md-5 m-auto">
       <div class="card">
         <div class="card-body">
            <form>
              <h3 class="text-center mt-4">Sign up as new customer</h3>
              <div class="login-form">
				<div class="form-group">
					<label for="fullname" class="placeholder"><b>Fullname</b></label>
					<input  id="fullname" name="fullname" type="text" class="form-control" required>
				</div>
				<div class="form-group">
					<label for="email" class="placeholder"><b>Email</b></label>
					<input  id="email" name="email" type="email" class="form-control" required>
				</div>

                <div class="form-group">
					<label for="category" class="placeholder"><b>Category</b></label>
					<select class="form-control">
                        <option>..please select category..</option>
                        <option>Premieum</option>
                        <option>Standard</option>
                        <option>Basic</option>
                    </select>
				</div>

				<div class="form-group">
					<label for="passwordsignin" class="placeholder"><b>Password</b></label>
					<div class="position-relative">
						<input  id="passwordsignin" name="passwordsignin" type="password" class="form-control" required>
						<div class="show-password">
							<i class="icon-eye"></i>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label for="confirmpassword" class="placeholder"><b>Confirm Password</b></label>
					<div class="position-relative">
						<input  id="confirmpassword" name="confirmpassword" type="password" class="form-control" required>
						<div class="show-password">
							<i class="icon-eye"></i>
						</div>
					</div>
				</div>
				<!-- <div class="row form-sub mt-3">
					<div class="custom-control custom-checkbox ml-3">
						<input type="checkbox" class="custom-control-input" name="agree" id="agree">
						<label class="custom-control-label" for="agree">I Agree the terms and conditions.</label>
					</div>
				</div> -->
				<div class="row form-action mt-2">
					<div class="col-md-6">
						<button class="btn btn-primary w-100 fw-bold ml-2">Sign Up</button>
					</div>
				</div>
                <div class="login-account mt-2 text-center">
					<span class="msg">Already Registered ?</span>&nbsp;
					<router-link to="/" id="show-signup" class="link">Login</router-link>
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
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
   
  }
}
</script>


<style scoped>
.container{
  margin-top: 5em;
}

.card-body{
  min-height: 480px;
}

</style>
