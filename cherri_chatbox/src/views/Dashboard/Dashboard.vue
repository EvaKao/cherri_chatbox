<template>
    <Chatbox />
</template>

<script>
import { Chatbox } from '@/components'

export default {
  name: "Dashboard",
  components: {
    Chatbox
  },
  data() {
    return {
      user: ''
    }
  }
};
</script>