<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse shadow">
        <span class="navbar-brand me-0 px-0">{{ `${$t('friendList')}(${friends.length})` }}</span>
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item navbar-brand" v-for="friend in friends" :key="friend.id">
              <router-link to="/"  @click="InlineButtonClickHandler(friend.id)">
                <a href="#" class="d-flex gap-3 py-3" aria-current="true">
                  <svg class="bd-placeholder-img rounded-circle" width="60" height="60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#ddd"></rect>
                        </svg>
                    <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <p class="chat-name-container mb-0 opacity-75">{{ friend.name }}</p>
                        <h6 class="mb-0 ml-1">{{ friend.introduction }}</h6>
                    </div>
                    </div>
                </a>
            </router-link>
          </li>
        </ul>

      </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  created() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'friends'
    ]),
  },
  methods: {
    getList() {
      this.$store.dispatch('friendList/getList')
    },
    InlineButtonClickHandler(id) {
      this.$store.dispatch('chat/getChat', id)
    }
  }
}
</script>


<style scoped>
#sidebarMenu {
    padding-left: 0;
    padding-right: 0;
}

.navbar-brand {
    margin-right: 0;
    padding-top: 15px;
    color: black;
}

.nav.flex-column {
    border-top: #17a2b8 1px solid;
}

.nav-item.navbar-brand {
    border-bottom: #17a2b8 1px solid;
}

.chat-name-container {
    color: #000;
    font-weight: bold;
    margin-left: -92px
}

svg {
    min-width: 60px;
    min-height: 60px;
    margin-left: 15px;
}


</style>