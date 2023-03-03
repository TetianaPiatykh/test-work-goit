import { useLocalStorage } from "hooks/useLocalStorage";
import { UserCardStyled, PictureStyled, LogoStyled, CenterStyledDiv, CenterLine, CenterEllipse, BoyAvatar, TweetStyled, FollowerStyled, Button } from "./UserCard.styled";

const UserCard = () => {
    const [follow, setFollow] = useLocalStorage('follow', false);
    const [followers, setFollowers] = useLocalStorage('followers', 100500);

    const updateFollowers = () => {
        if (!follow) {
            setFollowers(followers + 1);
    } else {
        setFollowers(followers - 1);
    }
    
};

const visibleFolowers = () => {
    const string = followers.toString();
    const length = followers.toString().length;

    const newString =
      string.slice(0, length - 3) + ',' + string.slice(length - 3, length);
    return newString;
  };

    return (
        <UserCardStyled>
            <LogoStyled/>
            <PictureStyled/>
            <CenterStyledDiv>
                <CenterLine/>
                <CenterEllipse>
                <BoyAvatar/>
                </CenterEllipse>
                
            </CenterStyledDiv>
            <TweetStyled>777 Tweets</TweetStyled>
            <FollowerStyled>{visibleFolowers()} Followers</FollowerStyled>
            <Button follow={follow} onClick={() => {
                setFollow(!follow);
                updateFollowers();
            }}>{follow ? 'Following' : 'Follow'}</Button>
        </UserCardStyled>
    )

};

export default UserCard;