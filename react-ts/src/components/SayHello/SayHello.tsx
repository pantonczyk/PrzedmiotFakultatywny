import React from "react";
import './index.css';

interface SayHelloProps {
   name: String;
}
 
function SayHello(props: SayHelloProps) {
   return <h2>Cześć, {props.name}!</h2>;
}

export default SayHello;