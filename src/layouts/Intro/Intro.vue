<template>
    <div class="intro">

        <div class="intro__wrapper">
            <div class="lang-switcher">
                <button
                    v-for="lang in ['ru', 'en']"
                    v-text="lang"
                    @click="toggleLocal(lang)"
                    :class="['lang-switcher__btn', {'--active': i18n.locale.value === lang}]"
                />
            </div>

            <div class="intro__cnt">

                <div class="intro__header">
                    {{ i18n.$t('INTRO_WELCOME') }}
                </div>

                <div
                    v-html="description"
                    class="intro__description"
                />
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script src="./Intro.ts" lang="ts"></script>
<style src="./Intro.scss" lang="scss"></style>
