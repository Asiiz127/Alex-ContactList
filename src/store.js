export const initialStore = () => ({
  ContactList: [{ id:'1', email: "alex@gmail.com" }],
});

export const storeReducer = (store, action) => {

  if (action.type === "CREATE_CONTACT") {
    const newContact = { ...action.value, id: crypto.randomUUID() };
    const updatedContactList = [...store.ContactList, newContact];
    return { ...store, ContactList: updatedContactList };
  }
  if (action.type === "EDIT_CONTACT") {
    const updatedContactList = store.ContactList.map(contact =>
    contact.id === action.id ? { ...contact, ...action.value } : contact
    );
    return { ...store, ContactList: updatedContactList };
  }
  if (action.type === "REMOVE_CONTACT") {
    const updatedContactList = store.ContactList.filter(contact =>
      contact.id !== action.id
    );
    return { ...store, ContactList: updatedContactList };
  }
return store;
};
