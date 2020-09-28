<template>
  <div class="operation-form">
    <div
        v-text="title"
        class="operation-form__header"
    />

    <div class="operation-form__field field">

      <div class="field__info">
        <div class="field__quad"/>

        <div class="field__info__card">
          <div
              v-text="unitText"
              class="field__info__unit"
          />
          <div
              v-text="field"
              class="field__info__name"
          />
        </div>
      </div>

    </div>

    <form @submit.prevent="save()" class="operation-form__data">

      <div class="operation-form__data__inputs">

        <div data-type="operation">
          <label for="operation" v-text="fields.operation.label"/>
          <select id="operation" v-model="newOperation.type" :placeholder="fields.operation.placeholder">
            <option
                v-for="operation in operations"
                :key="operation"
                :value="operation"
                v-text="getOperationName(operation)"
            />
          </select>
        </div>

        <div data-type="date">
          <label for="operation" v-text="fields.date.label"/>
          <input v-model="date" :placeholder="fields.date.placeholder" type="text"/>
        </div>

        <div data-type="count">
          <label for="operation" v-text="fields.count.label"/>
          <input v-model="newOperation.area" :placeholder="fields.count.placeholder" type="number"/>
        </div>
      </div>

      <textarea v-model="newOperation.comment" :placeholder="fields.comment.placeholder"></textarea>

      <div
          v-text="assessmentTitle"
          class="operation-form__data__assessment"
      />
      <div class="buttons-group">
        <button
            v-for="(button, index) in assessmentButtons"
            v-text="button"
            :key="index"
            :variant="selectedAssessment !== index || selectedAssessment"
            @click="choiceAssessment(index)"
        />
      </div>

      <button
          v-text="btnText"
          class="operation-form__submit"
          type="submit"
      />
    </form>

  </div>
</template>
<script src="./OperationForm.ts" lang="ts"></script>
<style src="./OperationForm.scss" lang="scss" scoped></style>
