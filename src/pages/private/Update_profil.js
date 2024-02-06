import React, {useState} from 'react';
import {useUser} from "../../hooks/UserContext";
import {updateUserAttributes} from 'aws-amplify/auth';


export default function Update_profil() {
    const {user} = useUser();
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [phone, setPhoneNumber] = useState(user.phone_number);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleUpdateEmailAndNameAttributes = (event) => {
        event.preventDefault();
        updateUserAttributes({
            userAttributes: {
                email: email,
                name: name,
                phone_number: phone,
            },
        })
          .then((result) => {
              console.log(result);
          })
          .catch((error) => {
              console.log(error);
          });
    }

    return (
      <div className="app__Update_profil">
          <h1>Update_profil {user.name}</h1>
          <form onSubmit={handleUpdateEmailAndNameAttributes}>
              <div>
                  <label htmlFor="name">Nom</label>
                  <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
              </div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}/>
              </div>
              <div>
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange}/>
              </div>
              <div>
                  <button type="submit">Mettre à jour</button>
              </div>
          </form>
      </div>
    )
}

//const Container = styled.div`

//`;
