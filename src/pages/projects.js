import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";

const ProjectsPage = ({
	data: {
		allStrapiProject: { nodes: projects },
	},
}) => {
	return (
		<Layout>
			<section className="projects-page">
				<Projects
					title="all projects"
					projects={projects}
				/>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		allStrapiProject {
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
	}
`;

export default ProjectsPage;
