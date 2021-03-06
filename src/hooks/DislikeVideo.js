

import axios from "axios"
const BASE_URL='http://localhost:8080'

const DislikeVideo = (props) =>{

    const dislike = async () =>{
        const response = await axios.put(BASE_URL+"/stats/video/like/",JSON.stringify({user: props.user,videoId: props.videoId,value: "-1"}),
        {
            headers: {'Content-Type': 'application/JSON'},
        });

        return response.data;
    }

    return(
            <button onClick={()=>dislike()}>Дизлайк</button>
    )
}

export default DislikeVideo;