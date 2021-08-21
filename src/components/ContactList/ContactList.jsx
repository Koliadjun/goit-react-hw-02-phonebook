import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = { contacts: this.props.contacts };

  handleClick = id => {
    this.props.onClick(id);
  };
  render() {
    const contacts = this.props.contacts;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
            <span>{contact.number}</span>
            <button onClick={() => this.handleClick(contact.id)} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
