<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "FormVue",
});
</script>

<template>
    <form class="form-container">
        <input type="text" placeholder="Email Address" name="email" />
        <input type="text" placeholder="Password" name="password" />
        <input
            type="submit"
            value="Sign In"
            class="form-container__sign-in-button"
        />
        <RouterLink
            type="button"
            value="Create New Account"
            class="form-container__create-account-button"
            to="/register"
            >Create New Account</RouterLink
        >
        <RouterLink
            to="/forget-password"
            class="form-container__forget-password"
            >Forget Password?</RouterLink
        >
    </form>
</template>

<style scoped lang="scss">
@import "../../styles/components/signin/form.module.scss";
</style>
