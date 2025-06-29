import React, { useState } from "react";
export function Twitter({ nombre, username, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClass = isFollowing
    ? "tw-Card-aside-button is-following"
    : "tw-Card-aside-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-Card">
      <header className="tw-Card-header">
        <img
          className="tw-Card-header-avatar"
          src={`https://unavatar.io/${username}`}
          alt={`Avatar de ${username}`}
        />
        <div className="tw-Card-header-info">
          <strong className="tw-Card-header-name">{nombre}</strong>
          <span className="tw-Card-header-username">@{username}</span>
        </div>
      </header>

      <aside className="tw-Card-aside">
        <button className={buttonClass} onClick={handleClick}>
          <span className="tw-Card-aside-button-text">{text}</span>
          <span className="tw-Card-aside-button-stopFollow">
            dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
