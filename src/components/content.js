import React from "react"

import style from "./content.module.css"

export default class Content extends React.Component {
  render() {
    return (
      <main className={style.main}>
        <div className={style.content}>
          {this.props.children}
        </div>
      </main>
    )
  }
}