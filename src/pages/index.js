import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";

export default ({ data }) => {
	const {
		allStrapiProject: { nodes: projects },
		allStrapiBlog: { nodes: blogs },
	} = data;

	return (
		<Layout>
			<SEO
				title={"Home"}
				description={"welcome to my portfolio"}
			/>
			<Hero />
			<Services />
			<Jobs />
			<Projects
				projects={projects}
				title="featured projects"
				showLink
			/>
			<Blogs
				blogs={blogs}
				title="blog"
				showLink
			/>
		</Layout>
	);
};

export const query = graphql`
	query {
		allStrapiProject(filter: { feature: { eq: true } }) {
			nodes {
				id
				description
				title
				url
				github
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				stack {
					id
					title
				}
			}
		}
		allStrapiBlog(sort: { date: DESC }, limit: 3) {
			nodes {
				slug
				desc
				date(formatString: "MMMM Do, YYYY")
				id
				title
				category
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				content {
					data {
						content
					}
				}
			}
		}
	}
`;
