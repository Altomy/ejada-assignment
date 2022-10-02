/**
 * ContactsProvider
 */

import React, { useContext, useReducer, createContext } from 'react';

// == States Models  == //
type DefaultT = {
  contacts: any[];
};

// == Initial States == //
const defaultValues: DefaultT = {
  contacts: [],
};

// == Actions == //
type ContactAction = { type: 'setContacts'; payload: any[] };
type Actions = ContactAction;

// == reducer function == //
function reducer(state: DefaultT, action: Actions) {
  switch (action.type) {
    case 'setContacts':
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}

// == Context Creation == //
type ContextFunctionTypes = {
  Contacts: DefaultT;
  dispatchContacts: (action: Actions) => void;
};
const Context = createContext<ContextFunctionTypes | undefined>(undefined);

// == default functions == //
const ContactsProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [Contacts, dispatchContacts] = useReducer(reducer, defaultValues);

  return (
    <Context.Provider value={{ Contacts, dispatchContacts }}>
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
