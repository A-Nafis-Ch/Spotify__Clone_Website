import Footer from "../Footer";
import UserLibrary from "../UserDashboard/UserLibrary";
import UserNavbar from "../UserDashboard/UserNavbar";
import Playbar from "../UserDashboard/Playbar"
import UserPlaySong from "./UserPlaySong";

const UserMainSongPlay = () => {
  return (
    <div>
      <UserNavbar />
      <div className="flex gap-1 h-[77vh]">
        <UserLibrary />
        <UserPlaySong />
      </div>
      <div>
        <Playbar />
      </div>
    </div>
  );
};

export default UserMainSongPlay;
