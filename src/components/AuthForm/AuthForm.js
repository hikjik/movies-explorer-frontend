import "./AuthForm.css";

import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function AuthForm({
  children,
  title,
  submitButtonText,
  formText,
  formLink,
  formLinkText,
}) {
  return (
    <div className="auth">
      <Logo />
      <form className="form">
        <div className="form__input-container">
          <h2 className="form__title">{title}</h2>
          <fieldset className="form__fields">{children}</fieldset>
        </div>

        <div className="form__submit-container">
          <span className="form__submit-error">Ошибка API</span>
          <button type="submit" className="form__submit-button">
            {submitButtonText}
          </button>

          <p className="form__text">
            {formText}
            <Link to={formLink} className="form__link">
              {formLinkText}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;