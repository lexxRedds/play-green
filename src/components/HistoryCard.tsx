import styled from 'styled-components';

interface HistoryCardProps {
  post: {
    url: string;
    sport: string;
    type: string;
  };
}

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const BackgroundImage = styled.div`
  width: 120px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 16px;
`;

const SportText = styled.div`
  font-weight: bold;
  margin-right: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

//const HistoryCard: React.FC<HistoryCardProps> = ({ post }) => {
const HistoryCard = ({ post }: HistoryCardProps) => {
  return (
    <Card>
      <BackgroundImage style={{ backgroundImage: `url(${post.url})` }} />
      <SportText>{post.sport}</SportText>
      <Icon src={post.type === 'like' ? '../src/assets/like.svg' : '../src/assets/dislike.svg'} />
    </Card>
  );
};

export default HistoryCard;