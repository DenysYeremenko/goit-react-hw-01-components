import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"
import user from "../user.json";
import data from "../data.json"

export const App = () => {
  return (
    <div>
      <Profile user = {user} />
      <Statistics title= "Upload stats" stats = {data}/>
    </div>
  )
};
