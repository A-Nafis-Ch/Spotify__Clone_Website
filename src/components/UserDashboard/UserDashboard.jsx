import UserNavbar from "./UserNavbar";
import UserLibrary from "./UserLibrary";
import UserMain from "./UserMain";
import Playbar from "./Playbar";

const UserDashboard = () => {
  return (
    <div>
      <UserNavbar />
      <div className="flex gap-1">
        <UserLibrary />
        <UserMain />
      </div>
      <Playbar />
    </div>
  );
};

export default UserDashboard;
