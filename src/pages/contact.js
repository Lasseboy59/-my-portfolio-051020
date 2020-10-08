import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>mail to me</h3>
        <a href="https://www.linkedin.com/in/laurikyttala/" target="_blank">or use: @LinkedIn or </a>
        <a href="https://twitter.com/laurikyt" target="_blank">@Twitter</a>
        <form action="https://formspree.io/f/maylqooo" method="POST">
          <div className="from-group">
            <input
              type="text" name="name"
              placeholder="name"
              className="form-control" />
            <input
              type="email" name="email"
              placeholder="email"
              className="form-control" />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"></textarea>
          </div>
          <button type="submit" className="submit-btn btn">submit here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
