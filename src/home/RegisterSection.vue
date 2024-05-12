<template>
    <div class="container">
        <form @submit.prevent="register">
            <h2>Register</h2>
            <input
                type="email"
                v-model="email"
                placeholder="Email address..."
            />
            <input
                type="password"
                v-model="password"
                placeholder="password..."
            />
            <button>Register</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Auth } from 'aws-amplify';

const email = ref('');
const password = ref('');

async function register() {
    try {
        await Auth.signUp({
            username: email.value,
            password: password.value,
        });
        alert('User successfully registered. Please login.');
    } catch (error) {
        alert(error.message);
    }
}

</script>

<style scoped>

:input {   
  margin-right: 10px; 
}
</style>