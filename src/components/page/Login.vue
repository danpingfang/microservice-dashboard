<template>
<div class="cd-user-modal">
  <div class="cd-user-modal-container">
    <h2>后台登录</h2>
    <div id="cd-login"> <!-- 登录表单 -->
      <form class="cd-form">
        <p class="fieldset">
          <label class="image-replace cd-username" for="signin-username">用户名</label>
          <input v-model="ruleForm.username" class="full-width has-padding has-border" id="signin-username" type="text" placeholder="输入用户名">
        </p>

        <p class="fieldset">
          <label class="image-replace cd-password" for="signin-password">密码</label>
          <input v-model="ruleForm.password" class="full-width has-padding has-border" id="signin-password" type="text"  placeholder="输入密码" >
        </p>

        <p class="fieldset">
          <input type="checkbox" id="remember-me" checked>
          <label for="remember-me">记住登录状态</label>
        </p>
          <p class="fieldset">
            <input class="full-width2" type="submit" value="登 录" @click="submitForm()">
          </p>
      </form>
    </div>
  </div>
</div>  
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                const self = this;
                self.$router.push('/home');
            }
        }
    }
</script>

<style scoped>
h2{
  text-align:center;
  padding:.8em;
  font-size:20px;
}
.cd-user-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 54, 66, 0.9);
  z-index: 3;
  overflow-y: auto;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
}
.cd-user-modal{
  visibility: visible;
  opacity: 1;
}
.cd-user-modal .cd-user-modal-container {
  -webkit-transform: translateY(50px);
  -moz-transform: translateY(50px);
  -ms-transform: translateY(50px);
  -o-transform: translateY(50px);
  transform: translateY(50px);
}
.cd-user-modal-container {
  position: relative;
  width: 90%;
  max-width: 600px;
  background: #FFF;
  margin: 3em auto 4em;
  cursor: auto;
  border-radius: 0.25em;
  -webkit-transform: translateY(-30px);
  -moz-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  -o-transform: translateY(-30px);
  transform: translateY(-30px);
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  transition-property: transform;
  -webkit-transition-duration: 1s;
  -moz-transition-duration: 1s;
  transition-duration: 1s;
}

@media only screen and (min-width: 600px) {
  .cd-user-modal-container {
    margin: 4em auto;
  }
}
.cd-form {
  padding: 1.4em;
}
.cd-form .fieldset {
  text-align:left;
  position: relative;
  margin: 1.4em 0;
}
.cd-form .fieldset:first-child {
  margin-top: 0;
}
.cd-form .fieldset:last-child {
  margin-bottom: 0;
}
.cd-form label {
  font-size: 16px;
}
.cd-form label.image-replace {
  display: inline-block;
  position: absolute;
  left: 15px;
  top: 50%;
  bottom: auto;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  overflow: hidden;
  text-indent:100%;
  white-space: nowrap;
  color: transparent;
  text-shadow: none;
  background-repeat: no-repeat;
  background-position: 50% 0;
}

.cd-form input {
  margin: 0;
  padding: 0;
  border-radius: 0.25em;
  font-size: 16px;
}
.cd-form input.full-width {
  width: 80%;
}
.cd-form input.full-width2 {
  width: 94%;
}
.cd-form input.has-padding {
  padding: 12px 20px 12px 50px;
}
.cd-form input.has-border {
  border: 1px solid #d2d8d8;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}
.cd-form input.has-border:focus {
  border-color: #343642;
  box-shadow: 0 0 5px rgba(52, 54, 66, 0.1);
  outline: none;
}
.cd-form input.has-error {
  border: 1px solid #d76666;
}
.cd-form input[type=submit] {
  padding: 16px 0;
  cursor: pointer;
  background: #2f889a;
  color: #FFF;
  font-weight: bold;
}
@media only screen and (min-width: 600px) {
  .cd-form {
    padding: 2em;
  }
  .cd-form .fieldset {
    margin: 2em 0;
  }

  .cd-form .fieldset:first-child {
    margin-top: 0;
  }
  .cd-form .fieldset:last-child {
    margin-bottom: 0;
  }
  .cd-form input.has-padding {
    padding: 16px 20px 16px 50px;
  }
  .cd-form input[type=submit] {
    padding: 16px 0;
  }
}    
</style>