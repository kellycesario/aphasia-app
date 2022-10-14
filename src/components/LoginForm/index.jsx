import './styles.scss'
import { Label } from '@radix-ui/react-label';

export default function LoginForm() {
    return (
        <section>
            <form action="" className='loginForm__form' >
                <Label
                    htmlFor="e-mail"
                    className='loginForm__label' >
                    E-mail
                </Label>

                <input
                    className='loginForm__input'
                    type="text"
                    id="e-mail"
                    placeholder="johndoe@email.com"
                />

                <Label
                    htmlFor="password"
                    className='loginForm__label' >
                    Password
                </Label>

                <input
                    className='loginForm__input'
                    type="password"
                    id="password"
                />

                <a
                    className='loginForm__forgotPassword'
                    href="#">
                    Forgot password
                </a>

                <button
                    onClick={(e) => { e.preventDefault() }}
                    className="loginForm__button"
                    role="button">
                    Sign In
                </button>


            </form>
        </section>
    )
}