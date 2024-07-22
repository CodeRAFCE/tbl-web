import { guestMocks } from '../../shared/mocks';
import { HomeContainer } from './Home.style';
import { GuestCard } from './sections/guest-card';

const guest = guestMocks[0];
const Home = () => {
  return (
    <HomeContainer>
      <GuestCard guest={guest} />
    </HomeContainer>
  );
};

export default Home;
