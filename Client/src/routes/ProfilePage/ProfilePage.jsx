import { useNavigate } from 'react-router-dom';
import Chat from '../../components/Chat/Chat'
import List from '../../components/List/List'
import apiRequest from '../../lib/apiRequest';
import './ProfilePage.scss'

export default function ProfilePage() {

    const navigate = useNavigate();

    const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
                        <span>UserName: <b>John Doe</b></span>
                        <span>E-mail: <b>john@gmail.com</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}