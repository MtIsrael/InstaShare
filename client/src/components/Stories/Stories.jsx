import { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../context/authContext";
export const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARy
  const stories = [
    {
      id: 1,
      name: "Walter White",
      img: "https://images.pexels.com/photos/13397514/pexels-photo-13397514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id: 2,
      name: "Gus Fring",
      img: "https://images.pexels.com/photos/14416719/pexels-photo-14416719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id: 3,
      name: "Walter White",
      img: "https://images.pexels.com/photos/12802981/pexels-photo-12802981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id: 4,
      name: "Jesse Pinkman",
      img: "https://images.pexels.com/photos/16889679/pexels-photo-16889679/free-photo-of-drone-shot-of-road-towards-church-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="Stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
