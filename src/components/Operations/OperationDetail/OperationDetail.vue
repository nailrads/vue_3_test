<template>
  <div class="operation-detail">
    <Modal>
      <OperationForm
        :formSkeleton="formSkeleton"
        :data="operationData"
        @saveForm="saveForm"
      />
    </Modal>
  </div>
</template>
<script src="./OperationDetail.ts" lang="ts"></script>
<style src="./OperationDetail.scss" lang="scss" scoped></style>
