import React from "react";

import Message from "./Message/Message";


function Messages(props) {

	let messagesElements = props.messageData.map(d => <Message Message={d.message} LikeNumber={d.likesNumbers}/>);

	let newMessageElement = React.createRef();
	let addMessage = () => {
		let text = newMessageElement.current.value;
		props.addPost(text);
		newMessageElement.current.value = '';
	}

  return (
		<>
		<div className="createMessage">
			<textarea ref={newMessageElement}></textarea>
			<button onClick={addMessage}>Send</button>
		</div>
    <div>
      {messagesElements}
    </div>
		</>
  );
}
export default Messages;
