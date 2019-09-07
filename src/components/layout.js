import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <TransitionLink
      to={props.to}
      exit={{ length: 0.5 }}
      entry={{ length: 0.5, delay: 0.5 }}
    >
      {props.children}
    </TransitionLink>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `2.5rem` }}>
      <TransitionLink
        to="/"
        exit={{ length: 0.5 }}
        entry={{ length: 0.5, delay: 0.5 }}
      >
        <h3 style={{ display: `inline` }}>TransitionLink Demo</h3>
      </TransitionLink>
      <ul
        style={{
          listStyle: `none`,
          float: `right`,
          padding: `0`,
          margin: `0.2em 0`,
        }}
      >
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
