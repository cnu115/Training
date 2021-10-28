import React, {useEffect, useState} from "react";

const TodoData = (props) => {
    const [a, updateA] = useState(true)
    const todoData = () => {
        return data.map((i, j )=> {
            return <li key={j}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" type="checkbox"/>
                        {i.title}
                        <i className="input-helper"/>
                    </label>
                </div>
                <i className="remove mdi mdi-close-circle-outline"/>
            </li>
        })
    }
    const {data} = props;
    return(
        <>
            {todoData()}
        </>
    )
}
export default TodoData;