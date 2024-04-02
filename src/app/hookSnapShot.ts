import { useState } from "react";

type List = string[]


const defaultList: List = ["Автомобиль", "Самолет", "Корабль"]

export const useApp = () => {
    const [list, setList] = useState<List>(defaultList)
    const [inputValue, setInputValue] = useState<string>("")
    const [cacheList, setCacheList] = useState<List[]>([defaultList])

    const addNewItem = (): void => {
        setCacheList([...cacheList, list])
        setList([...list, inputValue])
        changeInput("")
    }

    const removeItem = (index: number): void => {
        setCacheList([...cacheList, list])
        setList(list.filter((item, i) => i !== index))
    }

    const changeInput = (str: string): void => {
        setInputValue(str)
    }

    const cancelLastAction = () => {
        let tmpCache = cacheList
        let lastAction = tmpCache.pop()
        if (lastAction === undefined) return
        setList(lastAction)
        setCacheList(tmpCache)
    }

    return [list, addNewItem, inputValue, changeInput, removeItem, cancelLastAction] as const
}