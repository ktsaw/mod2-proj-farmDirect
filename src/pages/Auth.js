import SignUpForm from "../components/SignUpForm"

import LogInForm from "../components/LogInForm"

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Auth (props) {
  return (
    <main>
      <Header />
      <h5>New Customer: Sign Up</h5>
      <SignUpForm setUser={props.setUser}/>
      <h5>Returning Customer: Log In</h5>

      <LogInForm setUser={props.setUser} />

      <Footer />
    </main>
  )
}