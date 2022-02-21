import {renderEntireTree} from "./../render"

let state = { 
	messagePage: {messageData: [
		{id: 1, message: "Hi, how are you?", likesNumbers: 11},
		{id: 2, message: "Hi, better than you look", likesNumbers: 136},
		{id: 3, message: "Okay..", likesNumbers: 1},
		{id: 4, message: "Ok..", likesNumbers: 1},
	]},
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesNumbers: 0,
	}

	state.messagePage.messageData.push(newPost);

	renderEntireTree(state);	
}

export default state;