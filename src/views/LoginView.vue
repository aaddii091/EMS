<template>
  <div class="about">
    <form @submit.prevent="log">
      <input type="email" required placeholder=" Email" v-model="email" />
      <!-- <label>Password</label> -->
      <input type="password" required placeholder="Password" v-model="password" />
      <button class="primary-button" :disabled="disable" @click="!disable.value">Login</button>
      <p>Not yet a member? <span @click="redirect">Register Now !</span></p>
      <!-- <div class="error">{{ error }}</div> -->
    </form>
  </div>
</template>
<script>
import router from '@/router'
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
export default {
  setup() {
    // variables
    const disable = ref(false)
    // const disable = computed(()=>{
    //   return false
    // });
    const email = ref('')
    const password = ref('')
    const { start } = useLogin()
    // functions
    const log = async () => {
      // disable.value = true;
      await start(email.value, password.value)
      if (!error.value) {
        console.log('Logged In !', error.value)

        router.push({ name: 'home' })
      } else {
        // disable.value = false;
      }
    }
    const redirect = () => {
      router.push({ name: 'register' })
      console.log('redirected')
    }
    return { redirect, log, email, password, disable }
  }
}
</script>

<style></style>
