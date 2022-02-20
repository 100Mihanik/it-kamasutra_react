// import m from "./Messages.module.css";

import Message from "./Message/Message";

function Messages() {

	let messageData = [
		{id: 1, message: "Hi, how are you?", likesNumbers: 11},
		{id: 2, message: "Hi, better than you look", likesNumbers: 136},
		{id: 3, message: "Okay..", likesNumbers: 1},
	]

  return (
    <div>
      <Message Message={messageData[0].message} LikeNumber={messageData[0].likesNumbers}/>
      <Message Message={messageData[1].message} LikeNumber={messageData[1].likesNumbers}/>
      <Message Message={messageData[2].message} LikeNumber={messageData[2].likesNumbers}/>
    </div>
  );
}
export default Messages;
