const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: 1,
					full_name: "Mike Anamendolla",
					address: "5842 Hillcrest Rd",
					phone: "(870) 288-4149",
					email: "mike.ana@example.com",
					avatar: "https://randomuser.me/api/portraits/men/45.jpg"
				},
			]
		},
		actions: {
			deleteContact: (id) => {
				const { contacts } = getStore();
				setStore({ contacts: contacts.filter(contact => contact.id !== id) });
			}
		}
	};
};

export default getState;