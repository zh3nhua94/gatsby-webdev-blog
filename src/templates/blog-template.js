import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";

const ComponentName = ({ data }) => {
	const { content, title, desc } = data.blog;

	return (
		<Layout>
			<SEO
				title={title}
				description={desc}
			/>
			<div className="blog-template">
				<div className="section-center">
					<article className="blog-content">
						<ReactMarkdown>{content.data.content}</ReactMarkdown>
					</article>
					<Link
						to="/blog"
						className="btn center-btn"
					>
						blog
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query GetSingleBlog($slug: String) {
		blog: strapiBlog(slug: { eq: $slug }) {
			title
			desc
			content {
				data {
					content
				}
			}
		}
	}
`;

export default ComponentName;
