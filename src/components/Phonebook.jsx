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
    console.log(data);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };
  listDeleteHandler = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => id !== item.id),
    });
    console.log(this.state.contacts);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitHandler={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          onClick={this.listDeleteHandler}
        />
      </>
    );
  }
}

export default Phonebook;
