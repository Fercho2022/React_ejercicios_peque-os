import React, {Fragment} from 'react';



const Avatar = ({urlImagen}) =>{
    return ( 
        <Fragment>

           
            <img src={urlImagen} alt="" className="mr-4" />
                

        </Fragment>

     );
}
 
export default Avatar;