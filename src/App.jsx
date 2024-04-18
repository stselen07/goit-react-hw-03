import { useState,useEffect } from 'react'
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import SearchBox from './components/searchBox/SearchBox';
export default function App() {

  const getInitialValues = () => {
    const storageValues = localStorage.getItem("contacts");
    return storageValues !== null ?
      JSON.parse(storageValues)
      :
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  };

  const [user, setUser] = useState(getInitialValues);


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(user));
  }, [user]);

  
  const [search, setSearch] = useState(''); 

  
  const addUser = (newUser) => {
    setUser((user) => {
      return [...user, newUser];
    })
  };
  
  
  const deleteUser = (userId) => {
    setUser((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId)
    });
  };
  
  
  const visibleContact = user.filter((users) =>
    users.name.toLowerCase().includes(search.toLowerCase())
  );

   
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList data={visibleContact} onDelete={deleteUser} />
    </div>
  );
}

