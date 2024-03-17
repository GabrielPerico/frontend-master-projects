import fg from "fast-glob";
import "./style.scss";
import { readdir, readdirSync } from "fs";
import path from "path";
import Link from "next/link";

export default async function Home() {
	const folders = await fg("./src/app/**", {
		onlyDirectories: true,
		deep: 2,
	}).then((res) => {
		const mainFolders = res.reduce((acc, cur) => {
			if (acc.find((e) => e.startsWith(cur.split("/")[3]))) {
				return acc;
			} else {
				return [...acc, cur.split("/")[3]];
			}
		}, [] as string[]);

		// map to { mainFolder: [subFolders] }
		const subFolders = mainFolders.map((mainFolder) => {
			return {
				[mainFolder]: res
					.filter((e) => e.startsWith(`./src/app/${mainFolder}/`))
					.map((e) => e.split("/")[4]),
			};
		});

		return subFolders[0];
	});

	return (
		<main>
			{Object.keys(folders).map((mainFolder) => {
				return (
					<div key={mainFolder}>
						<h1>{mainFolder}</h1>
						<ul>
							{folders[mainFolder].map((subFolder) => {
								// Link to the page
								return (
									<li key={subFolder}>
										<Link
											href={`/${mainFolder}/${subFolder}`}
										>
											{subFolder}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</main>
	);
}
