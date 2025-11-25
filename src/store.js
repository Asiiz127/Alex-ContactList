export const initialStore = () => ({
  ContactList: [{
      id: '1',
      photoUrl: 'ruta/a/foto.jpg',
      name: 'Mike Anamendolla',
      address: '5842 Hillcrest Rd',
      phone: '(870) 288-4149',
      email: 'mike.ana@example.com'
    }],
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
