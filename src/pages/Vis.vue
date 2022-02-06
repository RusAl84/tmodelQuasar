<template>
  <q-page class="flex flex-center">
    <iframe
      src="http://localhost:5000/static/vis.html"
      frameborder="0"
      height="1000px"
      width="1300"
    ></iframe>
  </q-page>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "VisIndex",

  setup() {
    const $store = useStore();
    const opti = computed({
      get: () => $store.state.mes.opti,
      set: (val) => {
        $store.commit("mes/updateOpti", val);
      },
    });
    return {
      $store,
      opti,
    };
  },
});
</script>
<style scoped>
.field-label {
  vertical-align: middle;
}
</style>
