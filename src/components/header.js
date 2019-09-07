import React from "react"
import posed from "react-pose"
import { TransitionState } from "gatsby-plugin-transition-link"

const Title = posed.h1({
  hidden: { opacity: 0, x: 50, skew: 10 },
  visible: { opacity: 1, x: 0, skew: 0, duration: 500 },
})

const Description = posed.p({
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, delay: 50, duration: 500 },
})

const Header = props => (
  <TransitionState>
    {({ transitionStatus, exit, enter }) => {
      return (
        <div>
          <Title
            pose={
              ["entering", "entered"].includes(transitionStatus)
                ? "visible"
                : "hidden"
            }
          >
            {props.headerText}
          </Title>
          <Description
            pose={
              ["entering", "entered"].includes(transitionStatus)
                ? "visible"
                : "hidden"
            }
          >
            {props.headerBlurb}
          </Description>
        </div>
      )
    }}
  </TransitionState>
)

export default Header
