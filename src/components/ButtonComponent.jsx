


function ButtonComponent(props){
    console.log(props)
    return(
        
        <button className={props.class} type={props.type} style={{marginBlock: "20px"}}>{props.text}</button>
    )
}

export default ButtonComponent