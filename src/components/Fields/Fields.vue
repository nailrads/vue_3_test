<template>
    <div class="fields">
        <div class="cnt">
            Fields

            <router-link
                v-for="{id, name} in fields"
                :key="id"
                :to="{name: 'performedByField', params:{fieldId: id}}"
                v-text="name"
            />
        </div>
    </div>
</template>

<script src="./Fields.ts" lang="ts"></script>
<style src="./Fields.scss" lang="scss"></style>
