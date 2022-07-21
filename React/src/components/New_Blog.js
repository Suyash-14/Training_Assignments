import React from 'react'
import { useState} from "react"
import axios from 'axios';


const New_Blog = () => {
    const baseUrl ='https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs'
    let formobject={
        "title":"",
        "description":"",
        "author":"",
        "reading_time":""
    }
    const [form,setForm]=useState(formobject)

    function submit(event){
      event.preventDefault()
      console.log('submit')
      form["title"]=event.target[0].value;
      form["description"]=event.target[1].value;
      form["author"]=event.target[2].value;
      form["reading_time"]=event.target[3].value;
    
      setForm(formobject)
    axios.post(baseUrl,form, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
        }},).then((response) => {
        console.log('Blog Added')
    })
}
    return(
        <>
        <form onSubmit={submit}>
  <div class="mb-3">
    <label for="Input1" class="form-label"><b>Title</b></label>
    <input type="text" class="form-control" id="Input1"></input>
  </div>

  <div class="mb-3">
    <label for="Input2" class="form-label"><b>Description</b></label>
    <input type="text" class="form-control" id="Input2"></input>
  </div>
  
  <div class="mb-3">
    <label for="Input3" class="form-label"><b>Author</b></label>
    <input type="text" class="form-control" id="Input3"></input>
    </div>

  <div class="mb-3">
    <label for="Input4" class="form-label"><b>Reading_Time</b></label>
    <input type="text" class="form-control" id="Input4"></input>
  </div>
  
  <button type="submit" class="btn btn-primary"><b>Submit</b></button>
  <br></br>
  <br></br>
</form>
<h5> Watch your blogs downwards! </h5>
<br></br>
  </>
  );
}
  export default New_Blog      
        
    
