import Header from "./components/header/Header";
import {FaqItemWrapper} from "./components/faqItem/styled";
import FaqItem from "./components/faqItem/FaqItem";
import faqs from "./faqs";
import {useState} from "react";


function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const [form, setForm] = useState({
    name: '',
    age: 0,
  })

  const handleChange = (event) => {
    setForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <div className="App">
      <Header />
      <FaqItemWrapper>
        {faqs.map(({ title, answer }, index) => (
          <FaqItem title={title} answer={answer} key={index} />
        ))}
      </FaqItemWrapper>
      <form onChange={handleChange}>
        <label>
          Имя
          <input type="text" name="name" value={form.name} />
        </label>

        <label>
          Возраст
          <input type="number" name="age" value={form.age} />
        </label>
      </form>
    </div>
  );
}

export default App;
