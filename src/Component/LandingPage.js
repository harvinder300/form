import React from 'react';
//import { Link, Routes } from 'react-router-dom';
import DashBoardTable from './DashBoardTable';
import DashBoardFirm from './DashBoardFirm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Your Website</h1>
      <p>Choose an option:</p>
      {/* <Link to="/signup">Sign Up</Link>
      <span> | </span>
      <Link to="/signin">Sign In</Link> */}

    </div>
  );
}

export default LandingPage;
