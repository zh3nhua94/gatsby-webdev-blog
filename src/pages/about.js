import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";
import SEO from "../components/SEO";

const About = ({ data }) => {
	const { title, info, stack, image } = data.allStrapiAbout.nodes[0];

	return (
		<Layout>
			<SEO
				title="About"
				description="about webdev"
			/>
			<div className="about-page">
				<div className="section-center about-center">
					<Image
						fluid={image.localFile.childImageSharp.fluid}
						className="about-img"
					/>
					<article className="about-text">
						<Title title={title} />
						<p>{info}</p>
						<div className="about-stack">
							{stack.map((item) => {
								return <span key={item.id}>{item.title}</span>;
							})}
						</div>
					</article>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query {
		allStrapiAbout {
			nodes {
				title
				info
				stack {
					id
					title
				}
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;

export default About;
