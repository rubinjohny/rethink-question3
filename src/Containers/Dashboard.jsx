import { useState } from 'react'
import { SearchField } from '../Components/SearchField'
import {encode, decode, getMap} from '../Services/ShortenURL'
import {Intro} from '../Components/Intro'
import { DataSection } from '../Components/DataSection'
import { notification } from 'antd'
import "../App.css"

export const Dashboard = () => {

    const [dataMap, setDataMap] = useState([])

    const generateNewUrl = domain => {
        if(domain == "")
            return

        const res = encode(domain)
        setDataMap(getMap())

        notification.success({
            message: "Shortened new Domain!",
            description: `${res} has been generated for ${domain}`,
        });
    }

    const expand = url => {
        if(url == "")
            return 
           
        try{
            const res = decode(url)    
            notification.success({
                message: "Decode Sucessfull!",
                description: `decoded domain ${res}`,
            });
        }
        catch(err){
            console.log(err)
            notification.error({
                message: "Decode Error!",
                description: `${err}`,
            });
        }
        
    }

    return(
        <div className="dashboard">
            <div className="content">
                <Intro />
                <div className="search-fields-container">
                    <SearchField 
                        placeholder="Input Domain to shorten"
                        onSearch={text => generateNewUrl(text)}
                        submitText="Generate"
                    />
                    <SearchField
                        placeholder="Input short url"
                        onSearch={text => expand(text)}
                        submitText="Get Domain"
                    />
                </div>

                <DataSection data={dataMap} />
                
            </div>
        </div>
    )
}