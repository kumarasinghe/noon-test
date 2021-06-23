import Card from "src/components/card/card";
import ListingService from "src/services/list-service";
import FavouriteService from "src/services/favourite-service";

export default function Home({ listings }): JSX.Element {
  const onFavouriteClick = (listingId: string, isFavourite: boolean) => {
    if (isFavourite) {
      FavouriteService.addToFavourites(listingId).catch(() => {
        alert("Could not add to favourites");
      });
    } else {
      FavouriteService.removeFromFavourites(listingId).catch(() => {
        alert("Could not remove from favourites");
      });
    }
  };

  return (
    <div className="fadeInUp">
      {listings.map((result, idx) => {
        const {
          id,
          profilePictureSrc,
          username,
          imageSrc,
          title,
          price,
          likeCount,
          description,
          tags,
          commentCount,
          isFavourite,
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
            isFavouriteInitially={isFavourite}
            onFavouriteChange={(isFavourite: boolean) => {
              onFavouriteClick(id, isFavourite);
            }}
          />
        );
      })}
    </div>
  );
}

export async function getStaticProps(): Promise<any> {
  const listings = await ListingService.getAllLists();

  return {
    props: {
      listings,
    },
  };
}
