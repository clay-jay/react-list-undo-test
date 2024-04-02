import React from "react";

type ListActionProps = {
    inputValue: string
    addNewItem: () => void
    cancelLastAction: () => void
    changeInput: (str: string) => void
}

export const ListAction: React.FC<ListActionProps> = ({ inputValue, cancelLastAction, changeInput, addNewItem }) => {
    return (
        <div className="List-change-block w100">
            <input
                className="w50"
                value={inputValue}
                onChange={(e) => changeInput(e.target.value)}
                placeholder="Введите значение" />
            <button onClick={() => addNewItem()}>Добавить</button>
            <button onClick={() => cancelLastAction()}>Отменить</button>
        </div>
    )
}