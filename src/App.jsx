import Profile from 'components/Profile/Profile';
import StatList from 'components/Statistics/StatList';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats">
        <StatList items={data} />
      </Statistics>
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
