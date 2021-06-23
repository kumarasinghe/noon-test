import Card from "src/components/card/card";
import sampleListings from "src/sample-listings"

export default function Home(): JSX.Element {

  const listings = sampleListings;

  return (
    <div className="fadeInUp">
      {listings.map((result, idx) => {
          const {profilePictureSrc, username, imageSrc, title, price,likeCount, description, tags, commentCount} = result
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
