import React from "react";
import "./Video.css";
import videos from "../../videos.json";
import MedalPlayer from "medal-video-player";

export default function Video() {
  return (
    <div className="video-wrapper">
      <MedalPlayer
        content={videos[0]}
        user={videos[0].poster.displayName}
        videoOpts={{
          autoplay: true, // should the video autoplay?
          loop: true, // should the video loop?
          muted: true, // is the video muted by default?
          controls: true, // are the video controls enabled?
          embedded: true, // is this an embedded player? should we include all branding components and enable player.js events?
          retry: true // if the video fails to load, for whatever reason, retry video.play() up to 10 times
        }}
      />
    </div>
  );
}
