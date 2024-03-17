"use client";

import Image from "next/image";
import { Manrope } from "next/font/google";

import "./style.scss";
import { useRef, useState } from "react";
import ShareIcon from "./svgicons";
import useResizeObserver from "@react-hook/resize-observer";

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
});

export default function Page() {
	const [share, setShare] = useState(false);

	const shareRef = useRef<HTMLDivElement>(null);
	const shareLinksRef = useRef<HTMLDivElement>(null);

	useResizeObserver(shareLinksRef, () => {
		if (shareRef.current && shareLinksRef.current) {
			shareLinksRef.current?.style.setProperty(
				"--circle-center-x",
				`${
					((shareRef.current.offsetLeft +
						shareRef.current.offsetWidth / 2) *
						100) /
					shareLinksRef.current.offsetWidth
				}%`,
			);

			shareLinksRef.current?.style.setProperty(
				"--circle-radius",
				`${
					shareRef.current.offsetLeft +
					shareRef.current.offsetWidth / 2 +
					shareLinksRef.current.offsetHeight / 2
				}px`,
			);
		}
	});

	return (
		<>
			<main className={`main-body ${manrope.variable}`}>
				<div className="card">
					<div className="card__image__container">
						<Image
							src="/level-1-newbie/article-preview-component/drawers.jpg"
							alt="Drawers Image"
							width={0}
							height={0}
							sizes="100vw"
						/>
					</div>

					<div className="card__content">
						<h2>
							Shift the overall look and feel by adding these
							wonderful touches to furniture in your home
						</h2>
						<p>
							Ever been in a room and felt like something was
							missing? Perhaps it felt slightly bare and
							uninviting. I’ve got some simple tips to help you
							make any room feel complete.
						</p>

						<div className="card__content__footer">
							<div className="card__content__footer__avatar">
								<Image
									src="/level-1-newbie/article-preview-component/avatar-michelle.jpg"
									alt="Michelle Appleton"
									width={40}
									height={40}
								/>
							</div>

							<div className="card__content__footer__text">
								<h3>Michelle Appleton</h3>
								<p>28 Jun 2020</p>
							</div>

							<div
								className={`card__content__footer__share_links_container ${
									share ? "show" : "hide"
								}`}
							>
								<div
									className={`card__content__footer__share_links`}
									ref={shareLinksRef}
								>
									<div className="card__content__footer__share_links__icons">
										<span>Share</span>

										<Image
											src="/level-1-newbie/article-preview-component/icon-facebook.svg"
											alt="Facebook Icon"
											width={20}
											height={20}
										/>

										<Image
											src="/level-1-newbie/article-preview-component/icon-twitter.svg"
											alt="Twitter Icon"
											width={20}
											height={20}
										/>

										<Image
											src="/level-1-newbie/article-preview-component/icon-pinterest.svg"
											alt="Pinterest Icon"
											width={20}
											height={20}
										/>
									</div>
								</div>

								<div
									className="card__content__footer__share_links__share_button"
									onClick={() => setShare((share) => !share)}
									ref={shareRef}
								>
									<ShareIcon />
								</div>
							</div>
						</div>
					</div>
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
