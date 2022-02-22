let renderEntireTree = () => {
	console.log('State chamged');
}

let state = { 
	messagePage: {
		messageData: [
		{id: 1, message: "Hi, how are you?", likesNumbers: 11},
		{id: 2, message: "Hi, better than you look", likesNumbers: 136},
		{id: 3, message: "Okay..", likesNumbers: 1}],
		newPostText: '',
}
}

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.messagePage.newPostText,
		likesNumbers: 0,
	}
	state.messagePage.messageData.push(newPost);
	state.messagePage.newPostText = '';
	renderEntireTree(state);	
}

export const updateNewPostText = (newText) => {
	state.messagePage.newPostText = newText;
	renderEntireTree(state);	
}

export const subscribe = (observer) => {	//ф-я слушатель
	renderEntireTree = observer;
}

export default state;