import React from "react";
import { Delete } from "./svg";

type ListProps = {
    list: string[]
    removeItem: (i: number) => void
}

export const List: React.FC<ListProps> = ({ list, removeItem }) => {
    return (
        <>
            {list.map((item, i) => {
                return (
                    <div className="List-item" key={i}>
                        <span>{item}</span>
                        <span className="button" onClick={() => removeItem(i)}>
                          <Delete />
                        </span>
                    </div>
                )
            })}
        </>
    )
}