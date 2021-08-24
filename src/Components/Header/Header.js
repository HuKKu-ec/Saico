import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../../store/Context'
import './Header.css'
function Header() {
    const { firebase } = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  let history=useHistory()
 const handleLogout=()=>{
      firebase.auth().signOut().then(() => {
        history.push('/login')
      }).catch((error) => {
        console.log('error in logout'+error)
      });
  }
    return (
        <div>
        <div className="header-navs">
            <ul>
                <div className="heads">
                    <h1 className="brand">SAICO</h1>
                    {user?<span className="userName">{user.displayName}</span>:<span onClick={()=>{history.push('/login')}}><button className='logout'>Login</button> </span>}
                    
                    {user && <span style={{marginLeft: '94px'}} onClick={handleLogout}><button className='logout'>Logout</button> </span>}
                </div>{user?
                <div className="lies" style={{ 'marginRight': '18%', 'font': 'small-caption' }}>
                    <li id='calculator' onClick={() => { history.push('/calculator') }}>Calculator</li>
                    <li id='history' onClick={() => { history.push('/history') }}>History</li>
                    <li id='home' onClick={() => { history.push('/home') }}>Home</li>
                </div>:null}
            </ul>
        </div>
        {user?null:
        <div style={{textAlign:'center',marginTop:'15%'}}>
        <h1>Please make sure that you are logedin!</h1>
   
        </div>
        }

        </div>
    )
}
export default Header
