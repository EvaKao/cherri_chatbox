<template>
    <div id="chat">
        <div v-show="chat_id">
            <div class="container chat-container">
                <div class="chat-name-container d-flex align-items-center">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg class="bd-placeholder-img rounded-circle" width="60" height="60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#ddd"></rect>
                        </svg>
                        </a>
                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 link-secondary">{{ chatName }}</a></li>
                        </ul>
                <div class="search_img rounded-circle"><img style="width:45px;height:45px" src="@/assets/ic_search.png"></div>
                </div>
                <!-- <div><SearchBox /></div> -->
            </div>
            <div id="messages-window">
                <span v-bind:class="'message ' + (message.user_id == 'jessica' ? 'ours' : 'theirs')" :key="message" v-for="message in messages">{{message.content}}</span>
            </div>
            <div class="input-group">
                <input type="text" class="form-control" :placeholder="$t('messageInput')" v-model="newMessageContent" v-on:keyup.enter="addMessage">
                <span class="input-group-text"><img class="send_img" src="@/assets/ic_sent.png"></span>
              </div>
        </div>
        <div v-show="!chat_id" class="start-chat">
            <img src="@/assets/img_default.png">
            <div class="col-xs-12"><h1>{{ $t('startUse') }}</h1></div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
// import { SearchBox } from '@/components'


export default {
  name: 'Chatbox',
  components: {
    // SearchBox
  },
  data() {
    return {
      newMessageContent: ''
    }
  },
  computed: {
    ...mapGetters([
      'friends',
      'chat_id',
      'messages'
    ]),
    chatName() {
        var chatnName = this.friends.find((value, index, arr) => {
            if (value.id == this.chat_id) {
                return arr
            }
        })
        return (chatnName) ? chatnName.name : '';
    }
  },
  methods: {
    addMessage() {
      this.messages.push({user_id: 1, content: this.newMessageContent});
      this.newMessageContent = '';
    }
  }
}
</script>

<style scoped>

#chat {
  height: 100%; 
  overflow: hidden;
  display: flex; 
  flex-flow: column;
}

.chat-container {
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
}

#messages-window {
  height: calc(100vh - 270px);
  background:#eee; 
  flex: 1 0 auto;
  display: flex; 
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
  align-items:flex-start;
  padding:20px;
}

.chat-name-container {
    padding-top: 10px;
    padding-bottom: 10px;
}

.start-chat {
    color: #4A90E2;
    padding-top: 300px
}

.input-group-text {
    border: none;
    background-color: #fff;
}

.message {
  background:gray;
  color:white;
  padding:8px 12px;
  margin-bottom:8px;
  border-radius:16px;
  max-width:70%;
}

.ours {
  background:#0076FF;
  align-self:flex-end;
}

.search_img {
    widows: 45px;
    height: 45px;
    position: absolute;
    right: 20px;
    background-color: #dee2e6;
}

.send_img {
    width: 45px;
    height: 45px;
}

input {
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top: aqua 1px;
  height: 65px;
  width: 100%;
  padding:10px;
  
}

input:focus {
   outline: none;
}

</style>