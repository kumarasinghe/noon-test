import { useState } from "react";
import getIcon from "src/utils/icon-factory";

type CardPropType = {
  profilePictureSrc: string;
  username: string;
  imageSrc: string;
  title: string;
  price: string;
  likeCount: number;
  description: string;
  tags: string[];
  commentCount: number;
  onFavouriteChange?: (status: boolean) => void;
};

function Card(props: CardPropType): JSX.Element {
  const {
    profilePictureSrc,
    username,
    title,
    price,
    imageSrc,
    likeCount,
    description,
    tags,
    commentCount,
    onFavouriteChange,
  } = props;

  const [isFavourite, setFavourite] = useState(false);

  const onFavouritePressed = () => {
    setFavourite(!isFavourite);
    onFavouriteChange?.(isFavourite);
  };

  return (
    <div className="card">
      <div className="header">
        <img className="profile-picture" src={profilePictureSrc} />
        <span className="username">{username}</span>
      </div>
      <div className="body">
        <div className="image-container">
          <div className="toolbar">
            <div>
              <div className="title">{title}</div>
              <div className="price">{price}</div>
            </div>
            <div className="tool-button-container">
              <div className="favorite-btn" onClick={onFavouritePressed}>
                {isFavourite ? getIcon("filled-heart") : getIcon("empty-heart")}
              </div>
            </div>
          </div>
          <img className="image" src={imageSrc} />
        </div>
      </div>
      <div className="footer">
        <div className="like-stats">
          {getIcon("filled-heart")} {likeCount} Likes
        </div>
        <div className="description">{description}</div>
        <div className="tag-container">
          {tags.map((tag) => {
            return (
              <span className="tag" key={tag}>
                <a href="">#{tag}</a>
              </span>
            );
          })}
        </div>
        <div className="comment-container">View {commentCount} comments</div>
      </div>
    </div>
  );
}

export default Card;
