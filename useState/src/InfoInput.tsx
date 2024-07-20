import { useState } from "react";
type Information={
    name:string;
    description:{
        job:string;
        city:string;
    };
}
const InfoInput=()=>{
    const [info,setInfo]=useState<Information>({
        name:"Kim minjeong",
        description:{
            job:"Student",
            city:"Seoul"
        }
    });
    const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInfo({
            ...info,
            name:e.target.value
        });
    }
    const handleJobChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInfo({
            ...info,
            description:{
                ...info.description,
                job:e.target.value
            }
        })
    }
    const handleCityChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInfo({
            ...info,
            description:{
                ...info.description,
                city:e.target.value
            }
        })
    }
    return(
        <>
            <label>
                Name:
                <input 
                    value={info.name}
                    onChange={handleNameChange}
                     />
            </label>
            <label>
                job:
                <input
                    value={info.description.job}
                    onChange={handleJobChange} />
            </label>
            <label>
                city:
                <input
                    value={info.description.city}
                    onChange={handleCityChange} />
            </label>
            <div>
                <p>Name: {info.name}</p>
                <p>job: {info.description.job}</p>
                <p>city: {info.description.city}</p>
            </div>
        </>
    )
}
export default InfoInput;