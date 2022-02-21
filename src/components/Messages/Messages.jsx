import React from "react";

import Message from "./Message/Message";


function Messages(props) {

	let messagesElements = props.messageData.map(d => <Message Message={d.message} LikeNumber={d.likesNumbers}/>);

	let newMessageElement = React.createRef();
	let addMessage = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewPostText(text);
	}

  return (
		<>
		<div className="createMessage">
			<textarea onChange={onPostChange} ref={newMessageElement} value={props.newPostText}/>
			<button onClick={addMessage}>Send</button>
		</div>
    <div>
      {messagesElements}
    </div>
		</>
  );
}
export default Messages;
