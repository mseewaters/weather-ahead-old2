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

</script>

<style scoped>

</style>