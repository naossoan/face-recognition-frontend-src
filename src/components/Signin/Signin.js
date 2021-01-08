import React from 'react'
import { render } from 'react-dom'
import tachyons from 'tachyons'



//This form is taken from the Tachyons library.
class Signin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }
  onEmailChange = (e) => {
    this.setState({signInEmail: e.target.value})
  }

  onPasswordChange = (e) => {
    this.setState({signInPassword: e.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://secret-dusk-14450.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword 
      })
    }).then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
 
  }
  render() {
    const { onRouteChange, loadUser } = this.props
    return (
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <div className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Sign In</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={this.onEmailChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
                onClick={this.onSubmitSignIn}
              />
            </div>
            <div className='lh-copy mt3'>
              <p
                className='f6 link dim black db pointer'
                onClick={() => onRouteChange('register')}
              >
                Register
              </p>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default Signin
