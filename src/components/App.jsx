import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Leftbar from "./Leftbar/Leftbar";
import Rightbar from "./Rightbar/Rightbar";
import MyPage from "./My_page/My_page";
import Messages from "./Messages/Messages";
import Articles from "./Articles/Articles";
import ArticlesRandom from "./Articles_random/Artickes_random"


function App(props) {

  return (
<BrowserRouter>
	<Header />
	<div className="container">
		<Leftbar />
		<main className="main">
			<Routes>
				<Route path="/my_page" element={<MyPage />} />
				<Route path="/messages" element={<Messages messageData={props.appState.messagePage.messageData}/>} />
				<Route path="/article" element={<Articles />} />
				<Route path="/article/random" element={<ArticlesRandom />} />
			</Routes>
		</main>
		<Rightbar />
	</div>
</BrowserRouter>

	)}

	export default App; 