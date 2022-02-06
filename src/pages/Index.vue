<template>
  <q-page class="flex flex-center">
    <q-card class="big-card" bordered>
      <q-card class="box-card" bordered>
        <q-card-section>
          <q-input class="textInput" filled type="textarea" v-model="text">
          </q-input> </q-card-section
      ></q-card>
      <q-card class="box-card" bordered>
        <q-card-section>
          <q-input outlined v-model="topic_num" label="Введите количество тем:">
          </q-input> </q-card-section
      ></q-card>
      <q-card-actions class="flex flex-center">
        <q-btn color="primary" @click="onSendClick">
          Выполинить тематическое моделирование
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import API from "../api/api";

export default defineComponent({
  name: "PageIndex",

  setup() {
    let text = ref("");
    //  "Главный герой всю жизнь занимается финансовыми махинациями. Это не только приносит ему солидные деньги, но и удовольствие от столь рискованных предприятий. На этот раз он решает взломать компьютерную систему государственного банка и завладеть суммой денег, которой ему хватит до конца жизни. Но нужен напарник, хорошо разбирающийся в компьютерах. Он находит одного парня, отбывшего срок за финансовое преступление. Тот не хочет возвращаться в тюрьму и отказывает мошеннику, но вскоре соглашается. А немногим позже компьютерщик понимает, что на свою долю он может не рассчитывать: его попросту используют. Между напарниками начинается настоящая война за ещё не добытые деньги.";
    let topic_num = ref("5");
    const $store = useStore();
    const opti = computed({
      get: () => $store.state.mes.opti,
      set: (val) => {
        $store.commit("mes/updateOpti", val);
      },
    });
    return {
      $store,
      text,
      topic_num,
      opti,
    };
  },
  // // Хук который сработает когда страница создасться
  // mounted() {
  //   this.userName = "Login";
  //   this.intervalCtx = setInterval(async () => {
  //     try {
  //       const msg = await API.getMessage(this.lastMsgID);
  //       if (typeof msg === typeof {}) {
  //         this.messages.push(msg);
  //         this.lastMsgID++;
  //       }
  //     } catch (e) {}
  //   }, 1000);
  // },
  // unmounted() {
  //   clearInterval(this.intervalCtx);
  // },
  methods: {
    // Реакция на кнопку отправки
    async onSendClick() {
      try {
        this.opti = await API.sendMessage(this.text, this.topic_num);
        console.log(this.opti);
        this.$router.push("/vis");
      } catch (e) {
        console.error(e);
      }
    },
    fontSizeMapper: (word) => Math.log2(word.value) * 5,
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
