import React, {useRef, useState} from "react";


interface TodoFormProps {
    onAdd(title: string): void
}


export const FormInput: React.FC<TodoFormProps> = ({onAdd}) => {

    //const [title, setTitle] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setTitle(event.target.value)
    }

    const keypressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(inputRef.current!.value)
            inputRef.current!.value = ''
            //console.log(title)
            //setTitle('')
        }
    }

    return (
        <div className="input-field">
            <input
                ref={inputRef}
                //onChange={changeHandler}
                onKeyPress={keypressHandler}
                //value={title}
                id="first_name2"
                type="text"
                className="validate"
                placeholder="todo..."/>
            <label className="active" htmlFor="first_name2">Введите текст</label>
        </div>
    )
}