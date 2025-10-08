import React, { useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Check if description is an array or string
  const isArrayDescription = Array.isArray(repo.description);
  
  // Determine if we need "Read More" button
  const needsReadMore = isArrayDescription 
    ? repo.description.length > 3 
    : repo.description && repo.description.length > 150;

  return (
    <div 
      className="repo-card-div" 
      style={{ backgroundColor: theme.highlight }}
      onClick={() => openRepoinNewTab(repo.url)}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} className="repo-card-content">
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          
          {isArrayDescription ? (
            <ul 
              className={`repo-description-list ${isExpanded ? 'expanded' : ''}`}
              style={{ color: theme.text }}
            >
              {repo.description.map((item, index) => (
                <li key={index} className="repo-description-item">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p 
              className={`repo-description ${isExpanded ? 'expanded' : ''}`}
              style={{ color: theme.text }}
            >
              {repo.description}
            </p>
          )}

          {needsReadMore && (
            <button 
              className="read-more-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              style={{ color: theme.text }}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}

          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Created on {repo.createdAt.split("T")[0]}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}