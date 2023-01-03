import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import RegisterView from "../views/RegisterView.vue";
import VaultView from "../views/VaultView.vue";
import UnlockVault from "../views/UnlockVault.vue";
import CreateMasterPW from "../views/CreateMasterPW.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/signin",
            name: "singin",
            component: SignInView,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
        },
        {
            path: "/vault",
            name: "vault",
            component: VaultView,
        },
        {
            path: "/vault/unlock",
            name: "vaultUnlock",
            component: UnlockVault,
        },
        {
            path: "/vault/create-master-password",
            name: "create",
            component: CreateMasterPW,
        },
    ],
});

export default router;
