export const initialStore = {
  ContactList: [{ email: "alex@gmail.com" }],
}

export const storeReducer = (store, action) => {
  if (action.type === "CREATE_CONTACT") {
    const updatedContactList = [...store.contactList, action.value];
    return { ...store, contactList: updatedContactList };
  }

  if (action.type === "EDIT_CONTACT") {
    const updatedContactList = store.contactList.map((contact, index) => {
      if (index === action.position) {
        return action.value;
      }
      return contact;
    });
    return { ...store, contactList: updatedContactList };
  }

  if (action.type === "DELETE_CONTACT") {
    const updatedContactList = store.contactList.filter((_, index) => action.position !== index);
    return { ...store, contactList: updatedContactList };
  }
  return store;
};
