"use client";

import { Josefin_Sans } from "next/font/google";
import "./style.scss";
import { IconArrow, IconError, Logo } from "./svgicons";
import Image from "next/image";
import { useState } from "react";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	variable: "--font-josefin-sans",
});

export default function Page() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	return (
		<>
			<form
				className={`main-body ${josefin.variable}`}
				onSubmit={(e) => {
					e.preventDefault();

					// check if email is valid
					if (!email) {
						setError("Please provide a valid email");
						return;
					}
				}}
			>
				<Logo className="logo" />
				<picture>
					<source
						media="(max-width: 768px)"
						srcSet="/level-1-newbie/base-apparel-coming-soon-page/hero-mobile.jpg"
					/>
					<source
						media="(min-width: 769px)"
						srcSet="/level-1-newbie/base-apparel-coming-soon-page/hero-desktop.jpg"
					/>
					<Image
						src={
							"/level-1-newbie/base-apparel-coming-soon-page/hero-desktop.jpg"
						}
						alt="Hero Image"
						width={0}
						height={0}
						sizes="100vw"
					/>
				</picture>

				<div className="hero-content">
					<h1>
						<span>We&#39;re</span> coming soon
					</h1>
					<p>
						Hello fellow shoppers! We&#39;re currently building our
						new fashion store. Add your email below to stay
						up-to-date with announcements and our launch deals.
					</p>

					<span>
						<div
							className={`input-group ${error ? "invalid" : ""}`}
						>
							<input
								type="email"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							{error && <IconError className="error-icon" />}

							<button type="submit" className="input-btn">
								<IconArrow />
							</button>
						</div>
						{error && <span className="error">{error}</span>}
					</span>
				</div>

				<div className="desktop-bg-img" />
			</form>
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
