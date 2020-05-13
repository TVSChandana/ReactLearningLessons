import React from 'react';

    const Ninjas=({ninjas,deleteNinjaProp})=>{ 
        const ninjaList=ninjas.map(ninja=>{
            if(ninja.age>20){
            return(
                <div className="ninja" key={ninja.id}>    
                    <div>Name:{ninja.name}</div>
                    <div>Age:{ninja.age}</div>
                    <div>Belt:{ninja.belt}</div>
                    <button onClick={ () => {deleteNinjaProp(ninja.id)}}>Delete Ninja</button>       {/* When calling th efunction we should use the prop not the function */}
               </div> 
            )
        }else{
           return null
        }

        })
    

    
        return(
            <div className="ninja-list">
            {ninjaList}
            </div>
        )
    }


export default Ninjas