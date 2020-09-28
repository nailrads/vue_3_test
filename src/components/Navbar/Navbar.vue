<template>
    <nav class="nav">
        <div class="nav__cnt cnt">
            <router-link
                v-for="{path, name} in links"
                :key="path"
                :to="{name: path}"
                v-text="name"
                :class="['nav__item', {'--active': path === isActiveRoute}]"
            />
        </div>
    </nav>
</template>

<script src="./Navbar.ts" lang="ts"></script>
<style src="./Navbar.scss" lang="scss"></style>
