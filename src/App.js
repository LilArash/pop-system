import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AddUserSurvey } from './pages/AddUserSurvey';
import { MapPicker } from './components/MapPicker';
import { ListUserSurvey } from './pages/ListUserSurvey';
import { CommentComponent } from './components/CommentComponent';
import { UserSurveyInfo } from './pages/UserSurveyInfo';

function App() {
  return (
    <UserSurveyInfo />
  );
}

export default App;
