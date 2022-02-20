// import m from "./Messages.module.css";

import Message from "./Message/Message";

function Messages() {
  return (
    <div>
      <Message Message="Hi, how are you?" LikeNumber="11"/>
      <Message Message="Hi, better than you look" LikeNumber="136"/>
      <Message Message="Okay.." LikeNumber="1"/>
    </div>
  );
}
export default Messages;
