import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Main.css";
import api from "../services/api";
import { Link } from "react-router-dom";

import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import logo from "../assets/logo-tindev.svg";
import itsamatch from "../assets/itsamatch.png";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  // API call
  useEffect(() => {
    (async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });

      setUsers(response.data);
    })();
  }, [match.params.id]);

  // Match: receives the match info
  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { user: match.params.id }
    });

    socket.on("match", dev => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.avatar} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button type="button">
                  <img
                    src={dislike}
                    alt="Dislike"
                    onClick={() => {
                      handleDislike(user._id);
                    }}
                  />
                </button>
                <button type="button">
                  <img
                    src={like}
                    alt="Like"
                    onClick={() => {
                      handleLike(user._id);
                    }}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Acabou :(</div>
      )}
      {matchDev && (
        <div className="match-container">
          <img className="itsamatch" src={itsamatch} alt="It's a Match" />
          <img className="avatar" src={matchDev.avatar} alt="" />
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>
          <button type="button" onClick={() => setMatchDev(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
