import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.js";

export const ContactList = () => {
  const { store } = useContext(Context);
  const contacts = store.contacts;

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add new contact
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
