import { useState } from "react"
import { Checkbox } from "../Checkbox"
import { Input } from "../Input"
import { withValidation } from "../../HOC/withValidation"
import "./index.css"

const WithValidationInput = withValidation(Input, {validate: (value) => Boolean(value), validationMsg: "Please fill this field"});
const PasswordInput = withValidation(Input, {validate: (value) => value?.length > 6, validationMsg: "Password must be at least 6 characters"});
const WithValidationCheckbox = withValidation(Checkbox, {validate: (value) => Boolean(value), validationMsg: "Please fill this field"});

export const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const [triggerValidation, setTriggerValidation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!(username && password && terms)) {
      setTriggerValidation(true);
      return;
    }

    alert('Yaaaay!');
  }

  return (
    <form className="form">
      <label>
        Username: <WithValidationInput value={username} onChange={setUsername} triggerValidation={triggerValidation} />
      </label>
      <label>
        Password: <PasswordInput value={password} onChange={setPassword} isSecure triggerValidation={triggerValidation} />
      </label>
      <label>
        Accept Terms&Conditions: <WithValidationCheckbox value={terms} onChange={setTerms} triggerValidation={triggerValidation} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
