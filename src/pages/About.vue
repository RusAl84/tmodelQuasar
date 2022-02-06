<template>
  <q-page class="flex flex-center"> </q-page>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import API from "../api/api";

export default defineComponent({
  name: "PageIndex",

  setup() {
    const $store = useStore();
    const opti = computed({
      get: () => $store.state.mes.opti,
      set: (val) => {
        $store.commit("mes/updateOpti", val);
      },
    });
    return {
      opti,
    };
  },
});
</script>
<style scoped>
.field-label {
  vertical-align: middle;
}
.big-card {
  height: 500px;
  width: 100%;
  margin: 20px auto;
  padding: 20px auto;
}

.box-card {
  max-width: 100%;
}
.textInput {
  margin: 20px auto;
  padding: 30px 24px;
}
.tag-item {
  margin-right: 15px;
}
</style>
