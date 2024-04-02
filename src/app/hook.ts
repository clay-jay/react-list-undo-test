import { useState } from "react";

type List = string[]

type CancelAdd = {
    type: 'add',
    index: number
}

type CancelRemove = {
    type: 'remove',
    item: string,
    index: number
}

type CancelStack = Array<CancelAdd | CancelRemove>

const defaultList: List = ["Автомобиль", "Самолет", "Корабль"]

export const useApp = () => {
    const [list, setList] = useState<List>(defaultList)
    const [inputValue, setInputValue] = useState<string>("")
    const [cacheStack, setCacheStack] = useState<CancelStack>([])

    const addNewItem = (): void => {
        let act : CancelAdd = {
            type: 'add',
            index: list.length
        }
        setList([...list, inputValue])
        setCacheStack([...cacheStack, act])
        changeInput("")
    }

    const removeItem = (index: number): void => {
        let act : CancelRemove = {
            type: 'remove',
            item: list[index],
            index: index
        }
        setList(list.filter((item, i) => i !== index))
        setCacheStack([...cacheStack, act])
    }

    const changeInput = (str: string): void => {
        setInputValue(str)
    }

    const cancelLastAction = () => {
        const action = cacheStack.pop()
        if (action === undefined) return
        if (action.type === 'add') {
            setList(list.filter((item, i) => i !== action.index))
        }
        if (action.type === 'remove') {
            let tmpList = [...list]
            tmpList.splice(action.index, 0, action.item!)
            setList(tmpList)
        }
        setCacheStack(cacheStack)
    }

    return [list, addNewItem, inputValue, changeInput, removeItem, cancelLastAction] as const
}