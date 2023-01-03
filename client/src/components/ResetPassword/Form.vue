<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "FormVue",
});
</script>

<template>
    <form action="" class="form">
        <p class="form__desc">
            Enter your email address to get verification code to reset password
        </p>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
        />
        <input type="submit" value="Send" class="form__unlock-btn" />
    </form>
</template>

<style scoped lang="scss">
@import "../../styles/components/forgetPassword/form.module.scss";
</style>
