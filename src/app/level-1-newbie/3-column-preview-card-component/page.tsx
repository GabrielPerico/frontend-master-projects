import Image from "next/image";
import { Lexend_Deca, Big_Shoulders_Display } from "next/font/google";

import "./styles.scss";
import { Metadata } from "next";

const lexendDeca = Lexend_Deca({
	subsets: ["latin"],
	variable: "--font-lexend-deca",
});

const bigShouldersDisplay = Big_Shoulders_Display({
	subsets: ["latin"],
	variable: "--font-big-shoulders-display",
});

export const metadata: Metadata = {
	title: "3 Column Preview Card Component",
};

export default function Page() {
	return (
		<>
			<main
				className={`card-container ${lexendDeca.variable} ${bigShouldersDisplay.variable}`}
			>
				<div className="card sedans">
					<Image
						src="/level-1-newbie/3-column-preview-card-component/icon-sedans.svg"
						alt="Icon Sedans"
						width={64}
						height={40}
						priority
					/>

					<h2>Sedans</h2>

					<p>
						Choose a sedan for its affordability and excellent fuel
						economy. Ideal for cruising in the city or on your next
						road trip.
					</p>

					<button type="button">Learn More</button>
				</div>

				<div className="card suvs">
					<Image
						src="/level-1-newbie/3-column-preview-card-component/icon-suvs.svg"
						alt="Icon SUVs"
						width={64}
						height={40}
						priority
					/>

					<h2>SUVs</h2>

					<p>
						Take an SUV for its spacious interior, power, and
						versatility. Perfect for your next family vacation and
						off-road adventures.
					</p>

					<button type="button">Learn More</button>
				</div>

				<div className="card luxury">
					<Image
						src="/level-1-newbie/3-column-preview-card-component/icon-luxury.svg"
						alt="Icon Luxury"
						width={64}
						height={40}
						priority
					/>
					<h2>Luxury</h2>

					<p>
						Cruise in the best car brands without the bloated
						prices. Enjoy the enhanced comfort of a luxury rental
						and arrive in style.
					</p>

					<button type="button">Learn More</button>
				</div>
			</main>

			<div className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a href="https://github.com/GabrielPerico">Gabriel Périco</a>.
			</div>
		</>
	);
}
