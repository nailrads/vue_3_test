<template>
  <div class="cnt">

    <OperationDetail :field="fieldId" @update="update"/>

    <div class="operations">
      <div class="operations__title" v-text="currentField"/>

      <nav class="operations__header">
        <div class="tabs">
          <router-link
              v-for="{code, name} in tabs"
              :key="code"
              :to="{name: code}"
              v-text="name"
              class="tab"
          />
        </div>

        <button class="btn btn-add" @click="toggleModal()">
          <img src="/icons/plus.svg" alt="">
          Добавить операцию
        </button>
      </nav>

      <table class="operations__table table">
        <thead>
        <tr>
          <th class="table__item">Дата</th>
          <th class="table__item">Операция</th>
          <th class="table__item">Площадь</th>
          <th class="table__item">Комментарий</th>
          <th class="table__item">Качество</th>
        </tr>
        </thead>
        <tbody>

        <tr
            v-for="operation in operations"
            :key="operation.id"
            @click="operationDetail(operation)"
        >
          <td class="table__item">{{ dateToStandart(operation.date) }}</td>
          <td class="table__item">{{ getOperationName(operation.type) }}</td>
          <td class="table__item">{{ getArea(operation.area) }}</td>
          <td class="table__item">{{ operation.comment }}</td>
          <td class="table__item">
            <div class="table__multi">
              <div class="assessment" :variant="operation.assessment"></div>

              {{ getAssessment(operation.assessment) }}
            </div>
          </td>
        </tr>

        </tbody>
      </table>

    </div>
  </div>
</template>
<script src="./OperationsList.ts" lang="ts"></script>
<style src="./OperationsList.scss" lang="scss" scoped></style>
