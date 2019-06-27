import React from "react";
import "./VideoNav.css";

export default function VideoNav() {
  return (
    <div className="video-navbar">
      <div className="video-routes">
        <a href="/">About</a>
        <a href="/">Popular</a>
        <a href="/">Trending</a>
        <a href="/">Browse</a>
      </div>
      <div className="search-bar">
        <input id="video-search" label="Search" placeholder="Search Clips..." />
      </div>
    </div>
  );
}