import Footer from "../Footer";
import UserLibrary from "../UserDashboard/UserLibrary";
import UserNavbar from "../UserDashboard/UserNavbar";
import PlaySong from "../MainSongPlaylist/PlaySong";
import Playbar from "../UserDashboard/Playbar"

const UserMainSongPlay = () => {
  return (
    <div>
      <UserNavbar />
      <div className="flex gap-1 h-[77vh]">
        <UserLibrary />
        <PlaySong />
      </div>
      <div>
        <Playbar />
      </div>
    </div>
  );
};

export default UserMainSongPlay;
