import { FC } from "react";
import { Header } from "../../components/Header/Header";
import movieImg from "./movie.png";

export const About: FC = () => {
	return (
		<>
			<Header />
			<div className="container">
				<h2>About page</h2>
				<div className="center">
					<img src={movieImg} alt="about" />
				</div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
					eaque vel repellendus recusandae exercitationem quos totam, neque,
					nemo beatae aut, est harum laudantium aliquam aspernatur molestias
					officia pariatur nesciunt corporis.
				</p>
				<p>
					Ut voluptas sit, optio dolor ullam ipsa amet dolorum labore quisquam
					vero ab modi animi dignissimos tenetur corporis pariatur
					reprehenderit. Illo qui sunt error aperiam eveniet expedita ipsum aut
					aspernatur.
				</p>
				<p>
					Quasi porro laudantium quidem commodi numquam delectus cupiditate ipsa
					tempora consequuntur molestias distinctio mollitia animi quibusdam
					architecto, excepturi est ea sit dolores nobis labore a maxime
					perspiciatis doloribus tenetur! Ea.
				</p>
			</div>
		</>
	);
};
