import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
export class Phonebook extends Component {
  static defaultProps = {
    contacts: [],
  };
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  state = {
    contacts: this.props.contacts,
    filter: '',
  };
  formSubmitHandler = data => {
    const dataNameNormalized = data.name.toLowerCase();
    const findItem = this.state.contacts.find(
      contact => contact.name.toLowerCase() === dataNameNormalized,
    );
    if (findItem) {
      alert(`${findItem.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };
  listDeleteHandler = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => id !== item.id),
    });
  };

  onFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { contacts, value } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitHandler={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={value} onChange={this.onFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onClick={this.listDeleteHandler}
        />
      </>
    );
  }
}

export default Phonebook;
