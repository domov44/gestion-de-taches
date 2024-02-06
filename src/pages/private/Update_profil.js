import React from 'react';
import {useUser} from "../../hooks/UserContext";

export default function Update_profil() {
    const {user} = useUser();
    
    return (
      <div className="app__Update_profil">
            <h1>Update_profil</h1>
          <form>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" value={user.name}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={user.email}/>
                </div>
                <div>
                    <label htmlFor="phone">Téléphone</label>
                    <input type="tel" id="phone" name="phone" value={user.phone_number}/>
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
