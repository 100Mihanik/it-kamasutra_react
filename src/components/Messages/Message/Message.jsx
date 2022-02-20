import s from "./Message.module.css"

function Message(props){
	return(
		<article className={s.article}>
			<img className={s.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg" alt="avatar"/>
			<p>{props.Message}</p>
			<div className={s.like}>
				<img className={s.like__image} src="https://w7.pngwing.com/pngs/590/965/png-transparent-advertising-service-management-empresa-others-miscellaneous-company-service.png" alt="like"/>
				<p className={s.like__number}>{props.LikeNumber}</p>
			</div>
		</article>
	)
}

export default Message;