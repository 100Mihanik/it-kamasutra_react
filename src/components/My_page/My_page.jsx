import s from "./My_page.module.css";

function MyPage() {
	return(
		<div className={s.my_page}>
			<img className={s.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg" alt="avatar"/>
		</div>
	)
}

export default MyPage;