<template id="signup-form">
<div class="container-form">
    <div>
        <img src="../assets/img/img-01.png" alt="IMG">
    </div>
  <form>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="text" v-model="email" />
        <span v-if="email.length > 1">{{ email_msg }}</span>
    </div>
    <div class="form-group">
        <label for="psw1">Password <span id="characters">(6 or more characters required)</span></label>
        <input type="password" v-model="password1" />
        <span v-show="msg1">{{ pwd1_msg }}</span>
    </div>
    <div class="form-group">
        <label for="psw2">Repeat Password</label>
        <input type="password" v-model="password2" />
        <span v-show="msg2">{{ pwd2_msg }}</span>
    </div>
    <div class="form-group">
        <button :class="{active: disable_btn}" :disabled="disable_btn" @click.prevent="on_signup()">Sign Up</button>
    </div>
  </form>
  </div>
</template>

<script>

export default {
    name: 'Signup',
    data() {
    return {
      email: '',
      email_msg: '',
      password1: '',
      pwd1_msg: '',
      password2: '',
      pwd2_msg: '',
      disable_btn: true,
      msg1: true,
      msg2: true
    }
  },
  watch: {
    email: function(value) {
      this.valid_email(value, 'email_msg');
    },
    password1: function(value) {
      if(this.check_password_length(value, 'pwd1_msg', 6)) {
        this.check_passwords_match();
      }
    },
    password2: function(value) {
      if(this.check_password_length(value, 'pwd2_msg', 6)) {
        this.check_passwords_match();
      }
    }
  },
  methods: {

    valid_email(email, msg) {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this[msg] = '';
        return true;
      } else {
        this[msg] = 'Keep typing...waiting for a valid email';
        return false;
      }
    },

    check_password_length(value, msg, total) {
      var length = value.length;
      var sum = 0;
      var display;

      sum = (total - length);

      switch(sum) {
        case 0:
          display = '';
          break;
        case 1:
          display = 'Keep going - just need '+ sum + ' more character.';
          break;
        default:
          display = 'Keep going - just need '+ sum + ' more characters';
      }

      if(length >= total) {
        this[msg] = '';
        return true;
      } else {
        this[msg] = display;
        return false;
      }

    },

    check_passwords_match() {
      if(this.password1.length > 5 && this.password2.length > 5) {
          if(this.password2 != this.password1) {
            this.pwd2_msg = 'Passwords do not match';
            this.disable_btn = true;
            return true;
          } else {
            this.pwd2_msg = '';
            this.disable_btn = false;
            return false;
          }
        }
    },

    on_signup() {
      this.email = '';
      this.password1 = '';
      this.password2 = '';
      this.email_msg = '';
      this.pwd1_msg = '';
      this.pwd2_msg = '';
      this.msg1 = false;
      this.msg2 = false;
      this.disable_btn = true;
    },
  }
}
</script>

<style lang="scss">

$grey: #8F949B;
$red: #FF3400;
$purple-dark: #4158d0;
$purple-light: #7a8ade;

.container-form {
  display: contents;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signup {
  width: 700px;
  height: 460px;
  position: relative;
  overflow: hidden;
  box-shadow: 10px 10px 60px rgba(0, 0, 0, .4);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
}
.signup:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
  z-index: -1;
  background-color: white;
}

form {
  width: 50%;
  height: 80%;
  padding: 20px 50px 20px 20px;;
}
form .form-group {
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
  color: $grey;
  font-size: .9em;

  label {
    margin: 0 0 16px 0;
  }

  span {
    font-size: .8em;
    color: $red;
  }

  span#characters {
    font-size: .8em;
    color: $grey;
  }
}
.form-group input[type="text"],
.form-group input[type="password"] {
  border: none;
  outline: none;
  background: transparent;
  padding: 0 0 10px 0;
  font-size: 1em;
  border-bottom: 1px dotted $grey;
}
.form-group input[type="password"] {
  color: $red;
}
form .form-group:last-child {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 0 0;

  button {
    border: none;
    background: linear-gradient(to left, $purple-dark , $purple-light);
    padding: 10px 30px;
    border-radius: 20px;
    color: #FFFFFF;
    font-size: .8em;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
  }
  button.active {
    opacity: .5;
    cursor: default;
  }

  a {
    color: $grey;
    text-decoration: dotted;
    font-size: .8em;
  }
}
</style>
