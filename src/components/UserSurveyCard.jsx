import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function UserSurveyCard({ surveyId, title, description, latitude, longitude, createAt, endAt, status }) {
    const apiKey = "pk.e0afa6d277fe22eea544ebd4c5a8c643";
    const staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${latitude},${longitude}&zoom=14&size=400x250&markers=icon:small-red-cutout|${latitude},${longitude}`;

    return (
        <div className="p-2 border rounded-lg w-80">
            <img src={staticMapUrl} alt="map-image" className="w-full h-48 object-cover rounded-lg" />
            <div>
                <div className="flex justify-between items-center m-2 mt-6">
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-1 h-7 bg-gray-300 rounded-lg"></div>
                        <h2 className="text-3xl text-gray-700">{title} {surveyId}</h2>
                    </div>
                    <div className="flex flex-col text-sm font-light">
                        <div className="flex flex-row-reverse items-center justify-center gap-2">
                            <div className="size-2 mb-1 rounded-full bg-green-500"></div>
                            <p className="text-gray-400">{createAt}</p>
                        </div>
                        <div className="flex flex-row-reverse items-center justify-center gap-2">
                            <div className="size-2 mb-1 rounded-full bg-red-500"></div>
                            <p className="text-gray-400">{endAt}</p>
                        </div>

                    </div>
                </div>
                <div className="m-4 flex flex-col justify-center items-center">
                    <p className="line-clamp-3 text-gray-400">{description}</p>
                    <button className="w-full p-2 m-4 mb-0 border border-red-300 rounded-lg flex justify-center items-center hover:bg-red-300 transtion-colors group">
                        <FontAwesomeIcon icon={faTrashCan} className="text-red-400 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>
        </div>
    )

}