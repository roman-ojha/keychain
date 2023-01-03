<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "FormVue",
});
</script>

<template>
    <form action="" class="form">
        <p class="form__desc">Enter your Master Password to unlock vault</p>
        <input
            type="password"
            name="master_password"
            id="master_password"
            placeholder="Master Password"
        />
        <input type="submit" value="Unlock" class="form__unlock-btn" />
        <button class="form__logout-btn" type="button">Log out</button>
    </form>
</template>

<style scoped lang="scss">
@import "../../styles/components/unlockVault/form.module.scss";
</style>
