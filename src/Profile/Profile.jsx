import React from 'react'

const Profile = ({user, children, name}) => {
  return (
      <>
      <div style={{margin: 50}}>
        {children}
      </div>
      <div>
          <button onClick={() => name(user.fullName)}
            style= {{borderStyle: 'none', 
                   borderRadius: 15, 
                   backgroundColor: '#0d6fff', 
                   color : 'white',
                   padding: 12}}>
          Click me</button>
      </div>
    <div style={{
      fontFamily: 'Roboto', 
      fontWeight: 500, 
      fontSize: 20,
      }}>
        <h1> {`Full Name : ${user.fullName}`} </h1>
            <h2> {`Bio : ${user.bio}`} <br />
                 {`Profession : ${user.profession}`}
            </h2>
    </div>
    </>
  )
}

export default Profile