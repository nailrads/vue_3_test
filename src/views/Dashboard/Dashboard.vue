<template>
    <div class="dashboard">
        <template v-if="showListFields">
            <Fields/>
        </template>

        <router-view/>
    </div>
</template>

<script src="./Dashboard.ts" lang="ts"></script>
