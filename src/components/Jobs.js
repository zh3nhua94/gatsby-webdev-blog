import React, { useState } from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
	query {
		allStrapiJob(sort: { strapi_id: DESC }) {
			nodes {
				strapi_id
				company
				date
				position
				desc {
					id
					name
				}
			}
		}
	}
`;

const Jobs = () => {
	const data = useStaticQuery(query);
	const {
		allStrapiJob: { nodes: jobs },
	} = data;
	const [value, setValue] = useState(0);
	const { company, position, date, desc } = jobs[value];

	return (
		<section className="section jobs">
			<Title title="experience" />
			<div className="jobs-center">
				<div className="btn-container">
					{jobs.map((item, index) => {
						return (
							<button
								key={item.strapi_id}
								onClick={() => setValue(index)}
								className={`job-btn ${index === value && "active-btn"}`}
							>
								{item.company}
							</button>
						);
					})}
				</div>
				{/* index from previous button map() changes the jobs info */}
				<article className="job-info">
					<h3>{position}</h3>
					<h4>{company}</h4>
					<p className="job-date">{date}</p>
					{desc.map((item) => {
						return (
							<div
								key={item.id}
								className="job-desc"
							>
								<FaAngleDoubleRight className="job-icon" />
								<p>{item.name}</p>
							</div>
						);
					})}
					<Link
						to="/about"
						className="btn"
					>
						more info
					</Link>
				</article>
			</div>
		</section>
	);
};

export default Jobs;
