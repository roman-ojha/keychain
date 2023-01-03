<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "FormVue",
});
</script>

<template>
    <form action="" class="form">
        <p class="form__desc">Reset your password</p>
        <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
        />
        <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Confirm Password"
        />
        <input type="submit" value="Reset" class="form__unlock-btn" />
    </form>
</template>

<style scoped lang="scss">
@import "../../styles/components/resetPassword/form.module.scss";
</style>
