<template functional>
  <!-- For the stateless component to render class and style passed on form parent
       one needs to bind those values from context as shown below -->
  <div v-bind="data.attrs" :class="data.staticClass" :style="data.staticStyle">
    Functional component
  </div>
</template>
