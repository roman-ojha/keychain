<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "SignInWithButton",
    props: {
        logoSrc: {
            type: String,
            required: true,
        },
        signInWith: {
            type: String,
            required: true,
        },
    },
});
</script>

<template>
    <button class="sign-in-with-button">
        <img :src="logoSrc" :alt="signInWith + '-logo'" />
        <p>Sign in with {{ signInWith }}</p>
    </button>
</template>

<style scoped></style>
