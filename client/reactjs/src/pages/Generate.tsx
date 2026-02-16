import { useState } from "react";
import { useParams } from "react-router-dom"
import { IThumbnail } from "../assets/assets";


const Generate = () => {
    const {id} = useParams();
    const [title,setTitle]=useState('')
    const [addDetails,setAddDetails]=useState('')
    const [thumbnail,setThumbnail]=useState<IThumbnail|null>(null)
    const [loading, setLoading]=useState(false)

  return (
    <div>Generate</div>
  )
}

export default Generate