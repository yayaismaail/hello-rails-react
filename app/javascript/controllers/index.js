import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";

import App from "../components/App"
import store from "../store/store";

// Connects to data-controller="react-router"
export default class extends Controller {
  connect() {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    )

  }
} 
