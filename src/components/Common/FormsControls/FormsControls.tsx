import React, {FC, HTMLInputTypeAttribute, ReactNode} from "react";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import styles from "./FormsControls.module.css"

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
}

const FormControl: FC<Omit<FormsControls, 'input'> & {children: JSX.Element}> = ({meta, children, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={hasError ? styles.error :""}>
        <div>
            {children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Textarea: FC<FormsControls> = (props) => {
    const {input, ...restProps} = props
    return <FormControl{...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: FC<FormsControls> = (props) => {
    const {input, ...restProps} = props
    return <FormControl{...props}><input {...input} {...restProps}/></FormControl>
}



/*
const FormControl: FC<FormsControls> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={hasError ? styles.error :""}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}
export const Textarea: FC<FormsControls> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={hasError ? styles.error :""}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Input: FC<FormsControls> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={hasError ? styles.error :""}>
        <div>
            <input {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}
*/
