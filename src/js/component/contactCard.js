import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTrash, FaPen } from "react-icons/fa";

export const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);

  return (
    <div className="contact-card flex p-4 border rounded items-center justify-between hover:shadow-md">
      <div className="flex items-center gap-4">
        <img
          className="w-20 h-20 rounded-full"
          src={contact.avatar}
          alt={contact.full_name}
        />
        <div className="text-sm">
          <p className="font-semibold text-lg">{contact.full_name}</p>
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2" />{contact.address}</p>
          <p className="flex items-center"><FaPhone className="mr-2" />{contact.phone}</p>
          <p className="flex items-center"><FaEnvelope className="mr-2" />{contact.email}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <FaPen className="cursor-pointer text-blue-500" />
        <FaTrash
          className="cursor-pointer text-red-500"
          onClick={() => actions.deleteContact(contact.id)}
        />
      </div>
    </div>
  );
};