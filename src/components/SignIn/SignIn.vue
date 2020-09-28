<template>
    <div class="sign-in">

        <form @submit.prevent="auth">
            <button class="sign-in__btn" type="submit">{{i18n.$t('SIGN_IN')}}</button>
        </form>

    </div>
</template>

<script src="./SignIn.ts" lang="ts"></script>
<style src="./SignIn.scss" lang="scss" scoped></style>
