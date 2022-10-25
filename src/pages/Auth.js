import SignUpForm from "../components/SignUpForm"

import LogInForm from "../components/LogInForm"

export default function Auth (props) {
  return (
    <main>
      <h1>Farm Direct</h1>
      <h2>New Customer</h2>
      <h3>Sign Up</h3>
      <SignUpForm setUser={props.setUser}/>
      <h3>Returning Customer</h3>
      <h4>Log In</h4>
      <LogInForm setUser={props.setUser} />
    </main>
  )
}