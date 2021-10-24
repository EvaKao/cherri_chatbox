const getters = {
  language: state => state.app.language,
  // sidebar: state => state.app.sidebar,
  // visitedViews: state => state.tagsView.visitedViews,
  // cachedViews: state => state.tagsView.cachedViews,
  friends: state => state.friendList.friends,
  chat_name: state => state.chat.chat_name,
  chat_id: state => state.chat.chat_id,
  messages: state => state.chat.chat_content,
}
export default getters
