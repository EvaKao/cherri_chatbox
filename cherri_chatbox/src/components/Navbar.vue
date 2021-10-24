<template>
    <div class="navbar pt-3 pb-2">
        <h1 class="h2">Cherri Chat</h1>
        <LangSelect class="set-language"/>
        <div class="user-info col col-md-2">
            <svg class="bd-placeholder-img rounded-circle" width="60" height="60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#ddd"></rect>
          </svg>
          <span class="user-name">潔西卡</span>
        </div>
        <!-- <div class="col-md-3 col-lg-2 me-0 px-3"><input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></div> -->
        <!-- <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            This week
          </button>
        </div> -->
      </div>
</template>

<script>
import { LangSelect } from '@/components'

export default {
  name: 'Navbar',
  components: {
    LangSelect
  }
}
</script>

<style scoped>
.navbar {
  background-color: #4A90E2;
}

.navbar > h1 {
  color: white;
}

.user-info {
  text-align: left;
}

.user-name {
  color: white;
  position:absolute;
  font-size: 30px;
  margin-left: 15px;
  margin-top: 7px
}

.set-language {
  margin-left: auto;
  font-size: 18px;
  right: 0px;
  cursor: pointer;
}
</style>