import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Box } from "./Box";
import user from "../user.json";
import data from "../data.json"
import friends from "../friends.json"
import transactions from "../transactions.json"

export const App = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Profile user = {user} />
        <Statistics title = "Upload stats" stats = {data}/>
      </Box>
      <FriendList friends = {friends}/>
      <TransactionHistory items={transactions}/>
    </Box>
  )
};
