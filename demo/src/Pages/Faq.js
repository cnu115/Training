import React, {useState} from 'react';

const Faq = () => {
    const [todos, todosMethod] = useState([]);
    //[variable, method] = useState(variable value)
    let [i, updateIvalue] = useState(0);
    const [boole, updateBoolean] = useState(true)
    // this.state = {
    //     todos : [];
        //    i: 0 //class method
    // }
    // this.setState(data)

    const clickHandler = () => {
        // console.log('todos ', todos)
        updateBoolean(!boole)
        i = i+1;
        //this.setState(i) //class method
        updateIvalue(i)
        todosMethod([{
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        },
            {
                userId: 1,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                completed: false
            },
            {
                userId: 1,
                id: 3,
                title: "fugiat veniam minus",
                completed: false
            }])
    }

    // console.log('todos update ', todos)
    console.log('i value ', i, 'boole ', boole)
    return (
        <div>
            {boole && <h1>HI everyone</h1>}
            <button onClick={clickHandler}>Hooks setState example</button>
            <h1>FAQ Page</h1>
        </div>
    )
};

export default Faq;