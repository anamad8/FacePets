import React, { useState } from 'react'
import { useDataContext } from '../../Context/DataContext';
import './MakeAPost.css'

function MakeAPost() {

    const {datas} = useDataContext();

    const [dataPost, setDataPost] = useState({
      description:'',
      image:''
    })
     
    const handleChangePost = (e) => {
    
      if(e.target.name === 'image'){
        setDataPost({
          ...dataPost,
          [e.target.name]: e.target.files,
        })
    
      }else{
        setDataPost({
          ...dataPost,
          [e.target.name]: e.target.value
        })
      }
    
    }
    
    const handleSubmitPost = (e) => {
      e.preventDefault();
    
      const formData = new FormData();
    
      formData.append("description", dataPost.description);
      formData.append("image", dataPost.image[0]);
    
      fetch(`http://localhost:3030/post/${datas.id}`,{
        method:'POST',
        body: formData
      }).then((res) => {
        res.json();
        window.location.reload(false);
        }
      ).then(dataPost => console.log(dataPost))
      .catch((err) => console.log(err))
      
    }

  return (
    <>
          <div className="writePost">
            <form onSubmit={handleSubmitPost}>
        
              <input type="text" name="description" onChange={handleChangePost} placeholder="Escribe un comentario"/>
              <input type="file" name="image" onChange={handleChangePost} />

              <button type="submit">Enviar</button>

            </form>
          </div>
    </>
  )
}

export default MakeAPost