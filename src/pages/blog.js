import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";

const Blog = ({
	data: {
		allStrapiBlog: { nodes: blogs },
	},
}) => {
	return (
		<Layout>
			<section className="blog-page">
				<Blogs
					blogs={blogs}
					title="blog"
				/>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		allStrapiBlog {
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
			}
		}
	}
`;

export default Blog;
