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
            <FollowerStyled>{followers} Followers</FollowerStyled>
            <Button follow={follow} onClick={() => {
                setFollow(!follow);
                updateFollowers();
            }}>{follow ? 'Following' : 'Follow'}</Button>
        </UserCardStyled>
    )

};

export default UserCard;