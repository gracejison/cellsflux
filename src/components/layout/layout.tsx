import { NextSeo } from "next-seo";
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import Search from "@components/common/search";
import CookieBar from "@components/common/cookie-bar";
import { useAcceptCookies } from "@utils/use-accept-cookies";
import Button from "@components/ui/button";
import { useTranslation } from "next-i18next";

const Layout: React.FC = ({ children }) => {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
	const { t } = useTranslation("common");
	return (
		<div className="flex flex-col min-h-screen">
			<NextSeo
				additionalMetaTags={[
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
				]}
				title="ChawkBazar React - React Next E-commerce Template"
				description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
				canonical="https//www.cellsflux.com/"
				openGraph={{
					url: "https//www.cellsflux.com",
					title: "ChawkBazar React - React Next E-commerce Template",
					description:
						"Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
					images: [
						{
							url: "/assets/images/og-image-01.png",
							width: 800,
							height: 600,
							alt: "Og Image Alt",
						},
						{
							url: "/assets/images/og-image-02.png",
							width: 900,
							height: 800,
							alt: "Og Image Alt Second",
						},
					],
				}}
			/>
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
			<Search />
			<CookieBar
				title={t("text-cookies-title")}
				hide={acceptedCookies}
				action={
					<Button onClick={() => onAcceptCookies()} variant="slim">
						{t("text-accept-cookies")}
					</Button>
				}
			/>
		</div>
	);
};

export default Layout;
