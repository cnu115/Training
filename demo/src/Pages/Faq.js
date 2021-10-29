import React, {useState, useEffect} from 'react';

const Faq = () => {
    //[variable, method] = useState(variable value)
    let [i, updateIvalue] = useState(0);
    const [boole, updateBoolean] = useState(true)
    // this.state = {
    //     todos : [];
    //    i: 0 //class method
    // }
    // this.setState(data)

    useEffect(() =>{
        console.log('acting like a didMount')
        let i = 0;
        const interval = window.setInterval(() =>{
            i = i+1;
        }, 100)
        return () =>{
            console.log('willUnMount')
            clearInterval(interval)
        }
    },[]);

    useEffect(() =>{
        console.log('acting like a didUpdate')
    });

    useEffect(()=>{
        console.log('boole value ', boole)
    },[boole])


    // console.log('todos ', todos)
    const clickHandler = () => {
        // console.log('todos ', todos)
        updateBoolean(!boole)
        i = i + 1;
        //this.setState(i) //class method
        updateIvalue(i)
    }

    // console.log('todos update ', todos)
    console.log('i value ', i, 'boole ', boole)
    return (
        <div className="padding">
            {/*<h1>FAQ Page</h1>*/}
            <div className="d-flex justify-content-center">
                {boole && <h1><span className="wave">👋🏾</span></h1>}
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={clickHandler}>{boole === false ? 'Say' : 'Stop' } Hi</button>
            </div>
        </div>
    )
};

export default Faq;