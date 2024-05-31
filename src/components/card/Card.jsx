import style from './card.module.css';

const Card = ({ icon, title, text, color, position }) => {
	const buttonTextColor = 'button_' + color;
	return (
		<div className={`${style.card} ${style[color]} ${style[position]}`}>
			<img
				className={style.icon}
				src={`/images/${icon}.svg`}
				alt={`${icon} icon`}
			/>
			<h2 className={style.title}>{title}</h2>
			<p className={style.text}>{text}</p>
			<a href='#' className={`${style.button} ${style[buttonTextColor]}`}>
				Learn More
			</a>
		</div>
	);
};

export default Card;
