<template>
  <teleport to="body">
    <transition name="sidebar-fade">
      <div class="wrapper" v-show="visible">

        <div class="modal">
          <div class="modal_cnt">
            <slot name="default"></slot>
          </div>
        </div>

        <button class="btn__close" @click="toggle()">
          <img src="/icons/close.svg" alt="close">
        </button>

      </div>
    </transition>
  </teleport>
</template>

<script src="./Modal.ts" lang="ts"></script>
<style src="./Modal.scss" lang="scss" scoped></style>
