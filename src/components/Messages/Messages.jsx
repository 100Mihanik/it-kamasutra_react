// import m from "./Messages.module.css";

import Message from "./Message/Message";

function Messages(props) {

	let messagesElements = props.messageData.map(d => <Message Message={d.message} LikeNumber={d.likesNumbers}/>);

  return (
    <div>
      {messagesElements}
    </div>
  );
}
export default Messages;
