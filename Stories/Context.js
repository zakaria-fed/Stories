import React from 'react'

let context = React.createContext(null);
export const Provider = context.Provider;
export const Consumer = context.Consumer;

export default {Provider, Consumer}
