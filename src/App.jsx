import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ItemList from "./components/ItemList";
import FeedbackSystem from "./components/CodeReviewFeedback";
import Items from "./components/items/Items";
import FormPage from './components/form'
import SlideShow from "./components/slideShow";
import Posts from "./components/posts";
import Counter from "./components/counter";
import WordsRemover from "./components/WordRemover";

function App() {
  // const navigate = useNavigate();

  return (
    <Routes>
      {/* <Route path="/" element={<Items onNext={() => navigate("/itemlist")} />} /> */}
      <Route path="/items" element={<Items />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/slide" element={<SlideShow />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/words-remover" element={<WordsRemover />} />


      {/* <Route path="/" element={<ContactForm onNext={() => navigate("/itemlist")} />} />
      <Route path="/itemlist" element={<ItemList onNext={() => navigate("/feedbacksystem")} />} />
      <Route path="/feedbacksystem" element={<FeedbackSystem onNext={() => navigate("/")} />} /> */}
    </Routes>
  );
}

export default App;
