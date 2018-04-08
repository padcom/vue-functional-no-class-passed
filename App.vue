<template>
  <div>
    <MyDiv class="items" style="color: red" />
    <MyDiv class="items" style="color: red"></MyDiv>
    <MyDivFunc class="items" style="color: red" />
    <MyDivFunc class="items" style="color: red"></MyDivFunc>
    <MyDivFuncWithProps class="items" style="color: red" />
    <MyDivFuncWithProps class="items" style="color: red"></MyDivFuncWithProps>
  </div>
</template>

<script>
import MyDiv from './MyDiv'
import MyDivFunc from './MyDivFunc'
import MyDivFuncWithProps from './MyDivFuncWithProps'

export default {
  components: {
    MyDiv,
    MyDivFunc,
    MyDivFuncWithProps,
  }
}
</script>

<style>
.items {
  background-color: green;
}
</style>
