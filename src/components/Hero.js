import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
// ...GatsbyImageSharpFluid
const query = graphql`
	query {
		file(relativePath: { eq: "hero-img.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Hero = () => {
	//query hero image
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(query);

	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline"></div>
						<h1>I'm Zen</h1>
						<h4>freelance web React frontend developer</h4>
						<Link
							to="/contact"
							className="btn"
						>
							contact me
						</Link>
						<SocialLinks />
					</div>
				</article>
				<Img
					fluid={fluid}
					className="hero-img"
				/>
			</div>
		</header>
	);
};

export default Hero;
