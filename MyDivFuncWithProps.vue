<template functional>
  <div>
    Functional component {{ props.class }}
  </div>
</template>

<script>
export default {
  props: [ "class", "style" ]
}
</script>
