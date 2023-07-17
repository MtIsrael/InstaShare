import "./Rightbar.scss";

const Rightbar = () => {
  return (
    <div className="Rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
                alt=""
              />
              <span>Walter White</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
                alt=""
              />
              <span>Jesse Pinkman</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
                alt=""
              />
              <p>
                <span>Jesse Pinkman </span> changed thier profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
                alt=""
              />
              <p>
                <span>Jesse Pinkman </span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
                alt=""
              />
              <p>
                <span>Jesse Pinkman </span> liked a comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
                alt=""
              />
              <p>
                <span>Jesse Pinkman </span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png"
                alt=""
              />
              <div className="online" />
              <span>Jesse Pinkman </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
                alt=""
              />
              <div className="online" />
              <span>Walter White </span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://api.time.com/wp-content/uploads/2017/04/gus-fring.jpg"
                alt=""
              />
              <div className="online" />
              <span>Gus Fring </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
