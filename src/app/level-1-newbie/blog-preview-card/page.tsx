import "./style.scss";
import { Illustration } from "./svgicons";
import Image from "next/image";

import { Figtree } from "next/font/google";

const figtree = Figtree({
	subsets: ["latin"],
	variable: "--font-figtree",
});

const Page = () => {
	return (
		<main className={figtree.className}>
			<div className="card">
				<div className="card__image">
					<Illustration />
				</div>

				<div className="card__content">
					<span className="tag">Learning</span>

					<small className="date">Published 21 Dec 2023</small>

					<a href="#" className="card__title">
						HTML & CSS foundations
					</a>

					<p className="card__description">
						These languages are the backbone of every website,
						defining structure, content, and presentation.
					</p>
				</div>

				<div className="card__author">
					<span className="author__avatar">
						<Image
							src={
								"/level-1-newbie/blog-preview-card/image-avatar.webp"
							}
							alt="Author Avatar"
							width={32}
							height={32}
						/>
					</span>

					<span className="author__name">Greg Hooper</span>
				</div>
			</div>
		</main>
	);
};

export default Page;
