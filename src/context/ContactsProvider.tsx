/**
 * ContactsProvider
 */

import React, { useContext, useReducer, createContext } from 'react';

// == States Models  == //
type DefaultT = {
  contacts: UserModule.RootObject[];
  clone: UserModule.RootObject[];
};

// == Initial States == //
const defaultValues: DefaultT = {
  contacts: [],
  clone: [],
};

// == Actions == //
type ContactAction = { type: 'setContacts'; payload: UserModule.RootObject[] };
type CloneAction = { type: 'setClone'; payload: UserModule.RootObject[] };
type Actions = ContactAction | CloneAction;

// == reducer function == //
function reducer(state: DefaultT, action: Actions) {
  switch (action.type) {
    case 'setContacts':
      return { ...state, contacts: action.payload };
    case 'setClone':
      return { ...state, clone: action.payload };
    default:
      return state;
  }
}

// == Context Creation == //
type ContextFunctionTypes = {
  Contacts: DefaultT;
  dispatchContacts: (action: Actions) => void;
  saveContacts: (contacts: UserModule.RootObject[]) => void;
  findContacts: (text: string) => void;
};
const Context = createContext<ContextFunctionTypes | undefined>(undefined);

// == default functions == //
const ContactsProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [Contacts, dispatchContacts] = useReducer(reducer, defaultValues);

  // save the contacts
  const saveContacts = (contacts: UserModule.RootObject[]) => {
    dispatchContacts({ type: 'setContacts', payload: contacts });
    dispatchContacts({ type: 'setClone', payload: contacts });
  };

  // find contacts
  const findContacts = (text: string) => {
    if (text === '') {
      dispatchContacts({ type: 'setContacts', payload: Contacts.clone });
      return;
    }
    const results = Contacts.clone.filter(res => res.name.first.includes(text));
    dispatchContacts({ type: 'setContacts', payload: results });
  };

  return (
    <Context.Provider
      value={{ Contacts, dispatchContacts, saveContacts, findContacts }}>
      {children}
    </Context.Provider>
  );
};

// == Customs Hooks == //
export function useContacts() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('Must used in Contacts Provider');
  }

  return context;
}

export default ContactsProvider;
