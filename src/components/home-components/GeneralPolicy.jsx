import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmile} from "@fortawesome/free-regular-svg-icons"
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { faTruck } from "@fortawesome/free-solid-svg-icons"


export default function GeneralPolicy (){
     const generalPolicies=[
        {
            title:'Customer Satisfaction',
            desc_info:'Achieving customer satisfaction is our main target',
            icon:faFaceSmile,
            color:'text-green-600'
        },
        {
            title:'Smooth Return',
            desc_info:'Easily return within 72 hours of delivery',
            icon:faRotateLeft,
            color:'text-red-600'
        },
        {
            title:'Quick Delivery',
            desc_info:'Delivery in all over the country within shortest possible time',
            icon:faTruck,
            color:'text-yellow-600'
        }
     ]

    return(
        <div className="block lg:grid grid-cols-3 border-1 shadow-md lg:border-none lg:shadow-none py-2 w-full lg:w-4/5  mx-auto my-3">
            {generalPolicies.map(policy=>(
                <div className="justify-self-center border-2 shadow-sm m-2 space-y-2 p-5 lg:p-3">
                    <div className={`text-2xl flex space-x-2 ${policy.color}`}>
                        <span className="block">
                            <FontAwesomeIcon icon={ policy.icon } />
                        </span>
                        <span className="block">
                            {policy.title}
                        </span>
                    </div>
                    <div className="text-sm">
                        {policy.desc_info}
                    </div>
                </div>
            ))}

            <div className="col-span-3">
                <img src="/icons/ssl_accepts.png" className="w-full"/>
            </div>
           
        </div>
    )
}