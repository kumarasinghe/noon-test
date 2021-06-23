import Card from "src/components/card/card";

export default function Favourites(): JSX.Element {
  const listings = [];

  return (
    <div className="fadeInUp">
      {listings.map((result, idx) => {
        const {
          profilePictureSrc,
          username,
          imageSrc,
          title,
          price,
          likeCount,
          description,
          tags,
          commentCount,
        } = result;
        return (
          <Card
            key={idx}
            profilePictureSrc={profilePictureSrc}
            username={username}
            imageSrc={imageSrc}
            title={title}
            price={price}
            likeCount={likeCount}
            description={description}
            tags={tags}
            commentCount={commentCount}
          />
        );
      })}
    </div>
  );
}
