import React from 'react';
import { useApp } from "./hook";
import { List } from "../components/list";
import { ListAction } from "../components/listAction";

import './App.css';

export const App: React.FC = () => {
  const [list, addNewItem, inputValue, changeInput, removeItem, cancelLastAction] = useApp()
  return (
    <div className="App">
      <div className="App-main">
          <div className="w50">
            <ListAction
                inputValue={inputValue}
                addNewItem={addNewItem}
                changeInput={changeInput}
                cancelLastAction={cancelLastAction}
            />
          </div>
          <div className="w50">
            <List
                list={list}
                removeItem={removeItem}
            />
          </div>
      </div>
    </div>
  );
}
