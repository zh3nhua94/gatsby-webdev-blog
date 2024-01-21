import React from "react";
import Layout from "../components/Layout";

const contact = () => {
	return (
		<Layout>
			<section className="contact-page">
				<article className="contact-form">
					<h3>Get in Touch</h3>
					<form
						action="https://formspree.io/f/xleqdqvv"
						method="POST"
					>
						<div className="form-group">
							<input
								type="text"
								name="name"
								id="name"
								placeholder="name"
								className="form-control"
							/>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="name"
								className="form-control"
							/>
							<textarea
								name="message"
								id="message"
								rows="5"
								placeholder="message"
								className="form-control"
							></textarea>
						</div>
						<button
							type="submit"
							className="btn submit-btn"
						>
							submit
						</button>
					</form>
				</article>
			</section>
		</Layout>
	);
};

export default contact;
