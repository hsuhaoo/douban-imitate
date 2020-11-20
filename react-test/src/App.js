import React, { Component } from 'react';
import { GlobalNav } from './common/nav.js';
import {Nav } from './common/header.js';
import {Section,Hot } from './common/section.js';
import {BooksInfo} from './common/booksInfo.js';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalNav/>
        <Nav/>
        <div className={styles.container}>
          <div className={styles.main}>
            <Section/>
            <BooksInfo/>
          </div>
          <div className={styles.aside}></div>
        </div>
      </div>
    );
  }
}

export default App;
