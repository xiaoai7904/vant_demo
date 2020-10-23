import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values:any) {
      console.log('submit', values);
    },
  }
});