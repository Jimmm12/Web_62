import React, { useContext, useState } from 'react'
import contactContext from '../../contexts/ContactContext/ContactContext'
import ContactCard from '../ContactCard/ContactCard'
import './ContactList.css'
import {Input} from 'reactstrap'
const ContactList = ({ contacts }) => {
  const ctxContact = useContext(contactContext)
  const [search, setSearch] = useState('')
  const filterContact = ctxContact.contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  )
  return (
    <div>
      <h2>Contact List</h2>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      Filter Contact
      <div className="contact-list">
        {filterContact.map((item) => (
          <ContactCard key={item.id} card={item}></ContactCard>
        ))}
      </div>
    </div>
  )
}

export default ContactList