import React from 'react';

const Films = ({ opening_crawl, episode_id, director }) =>
  <div>
    <h1>épisode {episode_id}</h1>
      <ul>resume: {opening_crawl}
      <li>made by: {director}</li>
    </ul>
  </div>
;

export default Films;
